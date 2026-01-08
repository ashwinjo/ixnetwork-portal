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
                code: `session = SessionAssistant(IpAddress=apiServerIp, RestPort=None, UserName='admin', Password='admin', 
                           SessionName=None, SessionId=None, ApiKey=None,
                           ClearConfig=True, LogLevel='all', LogFilename='restpy.log')

ixNetwork = session.Ixnetwork

ixNetwork.info('Assign ports')
portMap = session.PortMapAssistant()
vport = dict()
for index,port in enumerate(portList):
    portName = 'Port_{}'.format(index+1)
    vport[portName] = portMap.Map(IpAddress=port[0], CardId=port[1], PortId=port[2], Name=portName)

portMap.Connect(forceTakePortOwnership)

# Note: If you are loading the configuration from ixia configuration file, 
# first load the config and then Connect ports`
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
                code: `ixNetwork.info('Creating Topology Group 1')
topology1 = ixNetwork.Topology.add(Name='Topo1', Ports=vport['Port_1'])
deviceGroup1 = topology1.DeviceGroup.add(Name='DG1', Multiplier='3')
ethernet1 = deviceGroup1.Ethernet.add(Name='Eth1')
ethernet1.Mac.Increment(start_value='00:01:01:01:00:01', step_value='00:00:00:00:00:01')
ethernet1.EnableVlans.Single(True)

ixNetwork.info('Configuring vlanID')
vlanObj = ethernet1.Vlan.find()[0].VlanId.Increment(start_value=103, step_value=0)

ixNetwork.info('Configuring IPv4')
ipv4 = ethernet1.Ipv4.add(Name='Ipv4')
ipv4.Address.Increment(start_value='1.1.1.1', step_value='0.0.0.1')
ipv4.GatewayIp.Increment(start_value='1.1.1.4', step_value='0.0.0.0')

ixNetwork.info('Configuring BgpIpv4Peer 1')
bgp1 = ipv4.BgpIpv4Peer.add(Name='Bgp1')
bgp1.DutIp.Increment(start_value='1.1.1.4', step_value='0.0.0.1')
bgp1.Type.Single('external')
bgp1.LocalAs2Bytes.Increment(start_value=101, step_value=0)

ixNetwork.info('Configuring Network Group 1')
networkGroup1 = deviceGroup1.NetworkGroup.add(Name='BGP-Routes1', Multiplier='100')
ipv4PrefixPool = networkGroup1.Ipv4PrefixPools.add(NumberOfAddresses='1')
ipv4PrefixPool.NetworkAddress.Increment(start_value='10.10.0.1', step_value='0.0.0.1')
ipv4PrefixPool.PrefixLength.Single(32)

ixNetwork.info('Create Traffic Item')
trafficItem = ixNetwork.Traffic.TrafficItem.add(Name='BGP Traffic', BiDirectional=False, TrafficType='ipv4')

ixNetwork.info('Add endpoint flow group')
trafficItem.EndpointSet.add(Sources=topology1, Destinations=topology2)

# Note: A Traffic Item could have multiple EndpointSets (Flow groups).
#       Therefore, ConfigElement is a list.
ixNetwork.info('Configuring config elements')
configElement = trafficItem.ConfigElement.find()[0]
configElement.FrameRate.update(Type='percentLineRate', Rate=50)
configElement.FrameRateDistribution.PortDistribution = 'splitRateEvenly'
configElement.FrameSize.FixedSize = 128
trafficItem.Tracking.find()[0].TrackBy = ['flowGroup0']

trafficItem.Generate()
ixNetwork.Traffic.Apply()`
            },
            {
                name: 'Load Config File (Fastest)',
                language: 'python',
                code: `# 1) For .ixncfg configuration file
ixNetwork.info('Loading config file: {0}'.format(configFile))
ixNetwork.LoadConfig(Files(configFile, local_file=True))

# 2) For .json configuration file 
ixNetwork.info('\\nLoading JSON config file: {0}'.format(jsonConfigFile))
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
                code: `ixNetwork.StartAllProtocols(Arg1='sync')
ixNetwork.info('Verify protocol sessions')
protocolSummary = session.StatViewAssistant('Protocols Summary')
protocolSummary.CheckCondition('Sessions Not Started', protocolSummary.EQUAL, 0)
protocolSummary.CheckCondition('Sessions Down', protocolSummary.EQUAL, 0)
ixNetwork.info(protocolSummary)

trafficItem = ixNetwork.Traffic.TrafficItem.find()[0]

trafficItem.Generate()
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
                code: `trafficItemStatistics = session.StatViewAssistant('Traffic Item Statistics')

# StatViewAssistant could also filter by REGEX, LESS_THAN, GREATER_THAN, EQUAL. 
# Examples:
#    trafficItemStatistics.AddRowFilter('Port Name', trafficItemStatistics.REGEX, '^Port 1$')
#    trafficItemStatistics.AddRowFilter('Tx Frames', trafficItemStatistics.GREATER_THAN, "5000")

ixNetwork.info('{}\\n'.format(trafficItemStatistics))

# Get the statistic values
txFrames = trafficItemStatistics.Rows['Tx Frames']
rxFrames = trafficItemStatistics.Rows['Rx Frames']
ixNetwork.info('\\nTraffic Item Stats:\\n\\tTxFrames: {}  RxFrames: {}\\n'.format(txFrames, rxFrames))

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
                code: `ixNetwork.Traffic.StopStatelessTrafficBlocking()
ixNetwork.StopAllProtocols()
session.Session.remove()`
            }
        ],
        pitfalls: [
            'Leaving "zombie" sessions active, consuming licenses.',
            'Not releasing ports, preventing others from using them.'
        ]
    }
];
