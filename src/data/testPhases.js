export const testPhases = [
    {
        id: 'setup',
        title: 'Setup Phase',
        description: 'Establish connection to the chassis and initialize the session. This is the foundation of any automation script.',
        subActivities: [
            'Start a new session',
            'Map, Assign and Connect Ports'
        ],
        approaches: [
            {
                name: 'Python (RestPy)',
                language: 'python',
                code: `"""
Phase 1: Setup
Initialize session, connect to API server, and map physical ports.
"""
from ixnetwork_restpy import SessionAssistant

# Initialize session with full logging for auditability
session = SessionAssistant(IpAddress=apiServerIp, RestPort=443, UserName='admin', 
                           Password='admin', SessionName='Automation_Session', 
                           ClearConfig=True, LogLevel='all', LogFilename='restpy.log')

ixNetwork = session.Ixnetwork
ixNetwork.info('--- Phase 1: Port Mapping & Connection ---')

portMap = session.PortMapAssistant()
vports = {}

# Map ports defined in portList [(ip, card, port), ...]
for index, port in enumerate(portList):
    name = 'Port_{}'.format(index+1)
    ixNetwork.info('Mapping {} to {}:{}:{}'.format(name, port[0], port[1], port[2]))
    vports[name] = portMap.Map(IpAddress=port[0], CardId=port[1], PortId=port[2], Name=name)

# Connect and take ownership
ixNetwork.info('Connecting to ports and taking ownership...')
portMap.Connect(forceTakePortOwnership=True)`
            }
        ],
        pitfalls: [
            'Forgetting to check if the session is legally valid immediately after connection.',
            'Not handling connection timeouts when the server is under load.'
        ]
    },
    {
        id: 'config',
        title: 'Configuration Phase',
        description: 'Define the test topology, protocols, and traffic patterns. This involves creating virtual ports, topologies, and device groups.',
        subActivities: [
            'Create Topology',
            'Create Device Groups (Protocol Stacks)',
            'Create Network Groups(Network Stacks)'
        ],
        approaches: [
            {
                name: 'Line by Line (Runtime)',
                language: 'python',
                code: `"""
Phase 2: Configuration
Define topology, protocols, and traffic patterns.
"""
ixNetwork.info('--- Phase 2: Topology & Protocol Config ---')

# Configure Topology and Device Groups
ixNetwork.info('Creating L2-3 Topology...')
topo = ixNetwork.Topology.add(Name='Tx_Topology', Ports=vports['Port_1'])
dg = topo.DeviceGroup.add(Name='Tx_Devices', Multiplier='10')

# Layer 2-3 Stack: Ethernet -> IPv4 -> BGP
ixNetwork.info('Building Protocol Stack: Eth > IPv4 > BGP')
eth = dg.Ethernet.add(Name='Eth_1')
eth.Mac.Increment(start_value='00:01:01:01:00:01', step_value='00:00:00:00:00:01')

ipv4 = eth.Ipv4.add(Name='IPv4_1')
ipv4.Address.Increment(start_value='10.1.1.1', step_value='0.0.0.1')
ipv4.GatewayIp.Single('10.1.1.10')

bgp = ipv4.BgpIpv4Peer.add(Name='BGP_1')
bgp.DutIp.Single('10.1.1.10')
bgp.Type.Single('external')

# Configure Traffic Item
ixNetwork.info('Configuring Traffic Item: BGP_Traffic')
traffic_item = ixNetwork.Traffic.TrafficItem.add(Name='BGP_Traffic', TrafficType='ipv4')
traffic_item.EndpointSet.add(Sources=topo, Destinations=vports['Port_2'])

# Apply traffic parameters and Generate
ixNetwork.info('Generating and Applying Traffic Control Plane...')
traffic_item.Generate()
ixNetwork.Traffic.Apply()`
            },
            {
                name: 'Load Config File (Fastest)',
                language: 'python',
                code: `"""
Fast Configuration
Bypass line-by-line calls by loading a pre-saved configuration.
"""
# 1) Load binary .ixncfg file
ixNetwork.info('Loading binary config: {}'.format(configFile))
ixNetwork.LoadConfig(Files(configFile, local_file=True))

# 2) Import JSON configuration (ResourceManager)
ixNetwork.info('Importing JSON config via ResourceManager: {}'.format(jsonConfigFile))
ixNetwork.ResourceManager.ImportConfigFile(Files(jsonConfigFile, local_file=True), Arg3=True)`
            }
        ],
        pitfalls: [
            'Creating objects in the wrong order (e.g., Traffic before Topology).',
            'Line-by-line configuration for large scales can be very slow due to HTTP RTT.'
        ]
    },
    {
        id: 'execution',
        title: 'Execution Phase',
        description: 'Start protocols, apply traffic, and run the test scenarios.',
        subActivities: [
            'Start Protocols',
            'Start Traffic',
            'Stop Protocols',
            'Stop Traffic'
        ],
        approaches: [
            {
                name: 'Python (RestPy)',
                language: 'python',
                code: `"""
Phase 3: Execution
Start protocols, verify convergence, and run traffic.
"""
ixNetwork.info('--- Phase 3: Traffic Execution ---')

# Synchronous Protocol Start
ixNetwork.info('Starting protocols and waiting for sync...')
ixNetwork.StartAllProtocols(Arg1='sync')

# Verify Protocol Sessions
summary = session.StatViewAssistant('Protocols Summary')
ixNetwork.info('Checking protocol health...')
summary.CheckCondition('Sessions Not Started', summary.EQUAL, 0)
summary.CheckCondition('Sessions Down', summary.EQUAL, 0)
ixNetwork.info(summary)

# Generate and Start Stateless Traffic
ixNetwork.info('Applying and starting stateless traffic...')
ixNetwork.Traffic.Apply()
ixNetwork.Traffic.StartStatelessTrafficBlocking()`
            }
        ],
        pitfalls: [
            'Starting traffic before protocols have converged.',
            'Assuming "Apply" is instantaneous (it requires time to push to hardware).'
        ]
    },
    {
        id: 'verification',
        title: 'Verification Phase',
        description: 'Collect statistics, analyze drill-downs, and validate pass/fail criteria.',
        subActivities: [
            'Analyze/Export results to xlsx, csv etc'
        ],
        approaches: [
            {
                name: 'Python (RestPy)',
                language: 'python',
                code: `"""
Phase 4: Verification
Retrieve real-time statistics and validate pass/fail criteria.
"""
ixNetwork.info('--- Phase 4: Stat Verification ---')

# Access Traffic Item Statistics
stats = session.StatViewAssistant('Traffic Item Statistics')

# Apply filters if necessary (e.g., only specific ports)
# stats.AddRowFilter('Port Name', stats.REGEX, '^Port 1$')

ixNetwork.info('Current Traffic Stats:\\n{}'.format(stats))

# Extract specific counters for validation
tx_frames = stats.Rows['Tx Frames']
rx_frames = stats.Rows['Rx Frames']

ixNetwork.info('Result Check: Tx({}) vs Rx({})'.format(tx_frames, rx_frames))

# Stop traffic once verification is complete
ixNetwork.Traffic.StopStatelessTrafficBlocking()`
            }
        ],
        pitfalls: [
            'Polling statistics too frequently causing server load.',
            'Reading wrong statistic views (User Defined vs System).'
        ]
    },
    {
        id: 'teardown',
        title: 'Teardown Phase',
        description: 'Stop traffic, release ports, and clean up the session to free resources for other users.',
        subActivities: [
            'Unmap, Unassign and Disconnect Ports',
            'Remove Session'
        ],
        approaches: [
            {
                name: 'Python (RestPy)',
                language: 'python',
                code: `"""
Phase 5: Teardown
Release resources and disconnect from the API server.
"""
ixNetwork.info('--- Phase 5: Resource Cleanup ---')

# Stop protocols and disconnect session
ixNetwork.StopAllProtocols()
ixNetwork.info('Removing automated session...')
session.Session.remove()`
            }
        ],
        pitfalls: [
            'Leaving "zombie" sessions active, consuming licenses.',
            'Not releasing ports, preventing others from using them.'
        ]
    }
];
