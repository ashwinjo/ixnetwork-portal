import React, { useState } from 'react';
import { Download, Play, Code, BookOpen, ArrowRight, ChevronDown, ChevronUp, Terminal, Monitor, FileText, Database } from 'lucide-react';
import { versions } from '../data/versions';

const Hero = (props) => {
    const [showDeployGuide, setShowDeployGuide] = useState(false);
    const [activeDeployTab, setActiveDeployTab] = useState('windows');

    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-100/50 rounded-full blur-3xl -z-10 -translate-y-1/2" />

            <div className="max-w-6xl mx-auto text-center">

                {/* Version Ticker */}
                {/* Version Ticker */}
                <div className="inline-flex items-center gap-4 bg-obsidian-1/60 backdrop-blur-sm border border-obsidian-2 px-4 py-2 rounded-full mb-8 text-xs font-mono text-obsidian-textSecondary animate-fade-in-up">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-obsidian-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(0,242,255,0.6)]" />
                        <span className="font-semibold text-obsidian-textPrimary">Latest Versions:</span>
                    </div>
                    <span className="hidden sm:inline text-obsidian-3">|</span>
                    <div className="flex gap-4">
                        <span>IxNetwork: <span className="text-obsidian-accent font-bold">{versions.ixNetwork}</span></span>
                        <span>IxOS: <span className="text-obsidian-accent font-bold">{versions.ixOS}</span></span>
                        <span>restPy: <span className="text-obsidian-accent font-bold">{versions.restPy}</span></span>
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-obsidian-textPrimary tracking-tight mb-6 leading-tight font-mono">
                    IxNetwork Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-obsidian-accent to-obsidian-accentHover">101</span>
                </h1>



                {/* Action Cards */}
                {/* Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-12 lg:grid-cols-5">
                    <ActionCard
                        icon={Play}
                        title="Deploy"
                        desc="Install and configure"
                        isActive={showDeployGuide}
                        onClick={() => setShowDeployGuide(!showDeployGuide)}
                    />
                    <ActionCard
                        icon={Code}
                        title="Write"
                        desc="Your first test"
                        href="#anatomy"
                    />
                    <ActionCard
                        icon={BookOpen}
                        title="Learn"
                        desc="Explore patterns"
                        href="#foundation"
                    />
                    <ActionCard
                        icon={Download}
                        title="Download"
                        desc="Get IxNetwork & tools"
                        href="https://support.ixiacom.com"
                    />
                    <ActionCard
                        icon={Database}
                        title="API Ref"
                        desc="Browse Documentation"
                        onClick={() => props.onNavigate ? props.onNavigate('api') : window.location.href = '#api'}
                    />
                </div>

                {/* What is IxNetwork Intro */}
                <div className="max-w-3xl mx-auto mb-12 space-y-4">
                    <h2 className="text-2xl font-bold text-obsidian-accent font-mono">What is IxNetwork?</h2>
                    <p className="text-lg text-obsidian-textSecondary leading-relaxed">
                        IxNetwork is the industry standard for L2-3 network performance testing.
                        It allows you to emulate complex network topologies and generate realistic traffic
                        to validate the performance and scalability of switches, routers, and other network devices.
                        Automation enables you to harness this power programmatically for consistent, repeatable testing cycles.
                    </p>
                </div>

                {/* Deployment Guide Inline Expansion */}
                {showDeployGuide && (
                    <div className="max-w-5xl mx-auto bg-obsidian-1 rounded-2xl border border-obsidian-2 shadow-xl overflow-hidden animate-fade-in-down text-left">
                        <div className="bg-obsidian-2 px-6 py-4 border-b border-obsidian-2 flex items-center justify-between">
                            <h3 className="font-bold text-obsidian-textPrimary flex items-center gap-2">
                                <Play size={20} className="text-obsidian-accent" />
                                Deployment & Installation Guide
                            </h3>
                            <button
                                onClick={() => setShowDeployGuide(false)}
                                className="text-obsidian-textSecondary hover:text-obsidian-accent transition-colors"
                            >
                                <ChevronUp size={20} />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-obsidian-2">
                            {['Windows', 'Docker', 'KVM'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveDeployTab(tab.toLowerCase())}
                                    className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeDeployTab === tab.toLowerCase()
                                        ? 'border-obsidian-accent text-obsidian-accent bg-obsidian-accent/10'
                                        : 'border-transparent text-obsidian-textSecondary hover:text-obsidian-textPrimary hover:bg-obsidian-2'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="p-8">
                            {activeDeployTab === 'windows' && (
                                <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
                                    <div className="space-y-6">
                                        <DeployStep number="1" title="Prerequisites" icon={FileText}>
                                            <ul className="text-sm text-obsidian-textSecondary space-y-2 list-disc pl-4">
                                                <li>Windows Server 2016/2019/2022 or Windows 10/11</li>
                                                <li>Minimum 16GB RAM (32GB Recommended)</li>
                                                <li>Administrator privileges</li>
                                                <li>Valid IxNetwork License</li>
                                            </ul>
                                        </DeployStep>

                                        <DeployStep number="2" title="Installation" icon={Monitor}>
                                            <p className="text-sm text-obsidian-textSecondary mb-2">
                                                Download the installer from the support portal and run as administrator.
                                                Select "IxNetwork Standard" for the typical automation environment.
                                            </p>
                                            <div className="bg-obsidian-0 rounded p-3 font-mono text-xs text-obsidian-accent border border-obsidian-2">
                                                # Silent install example<br />
                                                IxNetwork.exe /s /v"/qn"
                                            </div>
                                        </DeployStep>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-obsidian-2 rounded-xl p-1 border border-obsidian-accent/20 aspect-video flex items-center justify-center relative group">
                                            <div className="text-center p-6">
                                                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                                                    <Monitor size={32} />
                                                </div>
                                                <p className="text-sm text-obsidian-textSecondary font-medium">Installation Wizard</p>
                                            </div>
                                        </div>
                                        <div className="bg-obsidian-2 p-4 rounded-xl border border-obsidian-2">
                                            <h4 className="font-bold text-obsidian-textPrimary text-sm mb-2 flex items-center gap-2">
                                                <Terminal size={14} className="text-obsidian-accent" />
                                                Post-Install Verification
                                            </h4>
                                            <p className="text-sm text-obsidian-textSecondary">
                                                Launch the API Browser at <code className="text-obsidian-accent">http://localhost:11009/api/v1/browser</code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeDeployTab === 'docker' && (
                                <div className="space-y-8 animate-fade-in">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <DeployStep number="1" title="Get the Image" icon={Download}>
                                                <p className="text-sm text-slate-600 mb-2">
                                                    Download the IxNetwork Web Edition Tar File from the download page and copy it to your Linux host.
                                                </p>
                                            </DeployStep>
                                            <DeployStep number="2" title="Prerequisites" icon={Terminal}>
                                                <p className="text-sm text-slate-600 mb-2">Ensure promiscuous mode is enabled on the interface:</p>
                                                <div className="bg-slate-900 rounded p-3 font-mono text-xs text-green-400 mb-4">
                                                    ifconfig eth1 promisc
                                                </div>
                                            </DeployStep>
                                            <DeployStep number="3" title="Load Image" icon={Database}>
                                                <div className="bg-slate-900 rounded p-3 font-mono text-xs text-green-400 overflow-x-auto whitespace-pre-wrap">
                                                    {`# Decompress & Load
tar xjf Ixia_IxNetworkWeb_Docker_9.00.tar.bz2
docker load -i Ixia_IxNetworkWeb_Docker_9.00.tar`}
                                                </div>
                                            </DeployStep>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                <h4 className="font-bold text-slate-900 text-sm mb-4">4. Run Container</h4>

                                                <div className="mb-6">
                                                    <p className="text-xs font-semibold text-slate-700 mb-2">Option A: MAC VLAN BRIDGE</p>
                                                    <div className="bg-slate-900 rounded p-3 font-mono text-xs text-green-400 overflow-x-auto whitespace-pre-wrap">
                                                        {`docker run --net <network_name> \\
--ip <ip_address> \\
--hostname <hostname> \\
--name <container_name> \\
--cap-add=SYS_ADMIN \\
--cap-add=NET_ADMIN \\
-i -d \\
-v /sys/fs/cgroup:/sys/fs/cgroup \\
--tmpfs /run`}
                                                    </div>
                                                </div>

                                                <div className="mb-6">
                                                    <p className="text-xs font-semibold text-slate-700 mb-2">Option B: HTTPS (Specific Port)</p>
                                                    <div className="bg-slate-900 rounded p-3 font-mono text-xs text-green-400 overflow-x-auto whitespace-pre-wrap">
                                                        {`docker run \\
-p <host_port>:443 \\
--cap-add=SYS_ADMIN \\
--cap-add=NET_ADMIN \\
-i -d \\
-v /sys/fs/cgroup:/sys/fs/cgroup \\
--tmpfs /run`}
                                                    </div>
                                                </div>

                                                <div className="border-t border-slate-200 pt-4">
                                                    <p className="text-xs text-slate-500 mb-2">
                                                        <span className="font-semibold text-indigo-600">Optional:</span> Map license files using the <code>-v</code> flag:
                                                    </p>
                                                    <div className="bg-slate-900 rounded p-3 font-mono text-xs text-green-400 overflow-x-auto whitespace-pre-wrap">
                                                        {`# Folder mapping
-v /home/user/IxN-webui/:/etc/keysight/licenses/

# Single file mapping
-v /home/user/IxNwebui/License.bin:/etc/keysight/licenses/License.bin`}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-4">MacVlan vs Port Forwarding</h4>
                                        <div className="overflow-x-auto border border-slate-200 rounded-lg">
                                            <table className="w-full text-sm text-left text-slate-600">
                                                <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                                                    <tr>
                                                        <th className="px-4 py-2">Feature</th>
                                                        <th className="px-4 py-2">MACVLAN Bridge (Option A)</th>
                                                        <th className="px-4 py-2">Port Mapping / HTTPS (Option B)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100">
                                                    <tr>
                                                        <td className="px-4 py-2 font-medium">Visibility</td>
                                                        <td className="px-4 py-2">Acts as physical device (Unique MAC/IP)</td>
                                                        <td className="px-4 py-2">Hidden behind Host IP (Shared MAC/IP)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 font-medium">Performance</td>
                                                        <td className="px-4 py-2">High (L2 direct, minimal overhead)</td>
                                                        <td className="px-4 py-2">Medium (NAT/iptables overhead)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 font-medium">Complexity</td>
                                                        <td className="px-4 py-2">Higher (Requires Promiscuous mode)</td>
                                                        <td className="px-4 py-2">Lower (Standard Docker behavior)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 font-medium">Use Case</td>
                                                        <td className="px-4 py-2">Benchmarking & Protocol Emulation</td>
                                                        <td className="px-4 py-2">Web UI Access & REST API integration</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeDeployTab === 'kvm' && (
                                <div className="space-y-6 animate-fade-in">
                                    <div className="bg-indigo-50 border border-indigo-100 text-indigo-800 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                                        <Play size={16} className="mt-0.5 flex-shrink-0" />
                                        <div>
                                            <strong>Deployment Option:</strong> Install KVM WebUI as a separate VM.
                                        </div>
                                    </div>

                                    <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                                        <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">
                                            {`$ sudo virt-install \\
--name IxN_WebUI \\
--ram 16384 \\
--vcpus 8 \\
--network=network:default,model=virtio,mac=52:54:00:00:00:01 \\
--serial pty \\
--graphics none \\
--disk /home/kvmserver/IxVM/IxN_WebUI_01.qcow2,device=disk,bus=virtio,format=qcow2 \\
--boot hd \\
--noautoconsole \\
--force`}
                                        </pre>
                                    </div>
                                    <p className="text-xs text-slate-500 italic">
                                        * Ensure you adjust paths and resource allocations based on your host configurations.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

const ActionCard = ({ icon: Icon, title, desc, href, onClick, isActive }) => {
    const Component = href ? 'a' : 'button';
    const props = href ? { href } : { onClick };

    return (
        <Component
            {...props}
            className={`group bg-obsidian-1 p-6 rounded-lg border border-obsidian-2 hover:border-obsidian-accent/50 transition-all duration-300 text-left flex flex-col items-start w-full relative overflow-hidden
            ${isActive ? 'border-obsidian-accent shadow-[0_0_20px_rgba(0,242,255,0.1)]' : 'hover:shadow-[0_0_15px_rgba(0,242,255,0.15)]'}`}
        >
            <div className={`p-3 rounded-lg mb-4 bg-obsidian-2 text-obsidian-accent group-hover:text-obsidian-accentHover transition-colors duration-300`}>
                <Icon size={24} />
            </div>
            <h3 className="font-bold text-obsidian-textPrimary mb-1 font-mono tracking-tight">{title}</h3>
            <p className="text-sm text-obsidian-textSecondary mb-4">{desc}</p>
            <div className="mt-auto flex items-center text-xs font-semibold uppercase tracking-wider text-obsidian-textSecondary group-hover:text-obsidian-accent transition-colors w-full justify-between">
                <span>{onClick ? (isActive ? 'Close' : 'View Guide') : 'Go'}</span>
                {onClick ? (
                    isActive ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                ) : (
                    <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                )}
            </div>
        </Component>
    );
};

const DeployStep = ({ number, title, icon: Icon, children }) => (
    <div className="flex gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-obsidian-2 text-obsidian-accent border border-obsidian-accent/30 flex items-center justify-center font-bold text-sm font-mono shadow-[0_0_10px_rgba(0,242,255,0.2)]">
            {number}
        </div>
        <div>
            <h4 className="font-bold text-obsidian-textPrimary mb-2 flex items-center gap-2">
                <Icon size={16} className="text-obsidian-accent" />
                {title}
            </h4>
            {children}
        </div>
    </div>
);

export default Hero;

