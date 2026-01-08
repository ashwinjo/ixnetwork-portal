import { Database, Server, Globe, Clock } from 'lucide-react';
import treeModelImg from '../assets/ixnetwork-tree-model.png';
import architectureImg from '../assets/ixnetwork-architecture.png';
import migrationImg from '../assets/ixnetwork-migration.png';
import SessionComponents from './SessionComponents';

const Foundation = () => {
    return (
        <section id="foundation" className="py-20 border-y border-obsidian-2">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-obsidian-textPrimary mb-4">The Foundation</h2>
                    <p className="text-lg text-obsidian-textSecondary max-w-2xl mx-auto">
                        Understanding the architecture before writing the code.
                    </p>
                </div>

                {/* Automation Platform Architecture Image Placeholder */}
                {/* Migration / Tight Couplings Section */}
                <div className="mb-20 text-center">
                    <h3 className="text-2xl font-bold text-obsidian-textPrimary mb-6">From tight couplings to REST API first automation</h3>
                    <div className="bg-obsidian-1 p-4 rounded-2xl border border-obsidian-2 shadow-sm inline-block w-full max-w-4xl mx-auto flex items-center justify-center relative">
                        <img
                            src={migrationImg}
                            alt="From tight couplings to REST API first automation"
                            className="max-w-full h-auto rounded opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>

                {/* Automation Platform Architecture Image */}
                <div className="mb-20 text-center">
                    <h3 className="text-2xl font-bold text-obsidian-textPrimary mb-6">Automation Platform Architecture</h3>
                    <div className="bg-obsidian-1 p-4 rounded-2xl border border-obsidian-2 shadow-sm inline-block w-full max-w-4xl mx-auto flex items-center justify-center relative">
                        <img
                            src={architectureImg}
                            alt="Automation Platform Architecture"
                            className="max-w-full h-auto rounded opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Architecture Video */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-2xl font-bold text-obsidian-textPrimary">IxNetwork Web Edition Walkthrough</h3>
                            <p className="text-obsidian-textSecondary text-sm">10 min watch • Feature Tour</p>
                        </div>
                        <div className="bg-obsidian-1 rounded-2xl aspect-video relative overflow-hidden shadow-2xl border border-obsidian-2">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/ZpCkv6Jm0Mo"
                                title="IxNetwork Web Edition Walkthrough"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Automation Focus Timeline */}
                        <div className="mt-8">
                            <h4 className="text-obsidian-accent font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                <Clock size={14} /> Automation Focus
                            </h4>
                            <div className="space-y-3">
                                <TimelineItem
                                    label="Automation Story"
                                    title="REST API History"
                                    desc="A live log that records manual UI clicks and translates them into REST calls."
                                    time="02:48"
                                    seconds={168}
                                />
                                <TimelineItem
                                    label="Developer Tools"
                                    title="Python Code Generation"
                                    desc="Automatic generation of Python snippets based on UI actions for script integration."
                                    time="03:15"
                                    seconds={195}
                                />
                                <TimelineItem
                                    label="Learning Resources"
                                    title="In-built Documentation"
                                    desc="Quick reference guides and a full API library accessible directly from the UI."
                                    time="03:26"
                                    seconds={206}
                                />
                                <TimelineItem
                                    label="API Exploration"
                                    title="REST API Browser"
                                    desc="A hierarchical tree view to browse, edit, and commit changes directly to the API."
                                    time="04:30"
                                    seconds={270}
                                />
                                <TimelineItem
                                    label="AI/Ops Monitoring"
                                    title="Script Watch"
                                    desc="A real-time dialog that logs every API call made by an external script (e.g., from VS Code)."
                                    time="05:16"
                                    seconds={316}
                                />
                            </div>
                        </div>
                    </div>

                    {/* CRUD Operations */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-obsidian-textPrimary">How It Works</h3>
                        <p className="text-obsidian-textSecondary mb-6">
                            IxNetwork automates via a REST API. Whether you use the raw API or our Python SDK wrapper,
                            you are essentially performing CRUD operations on the test configuration tree.
                        </p>

                        <div className="space-y-4">
                            <CrudItem
                                method="POST"
                                desc="Create new objects (Sessions, vPorts, Topologies)"
                                bgColor="bg-green-500/10 text-green-400 border border-green-500/30"
                            />
                            <CrudItem
                                method="GET"
                                desc="Read statistics, configurations, and status"
                                bgColor="bg-blue-500/10 text-blue-400 border border-blue-500/30"
                            />
                            <CrudItem
                                method="PATCH"
                                desc="Update existing objects (Multiplier, IP Address)"
                                bgColor="bg-amber-500/10 text-amber-400 border border-amber-500/30"
                            />
                            <CrudItem
                                method="DELETE"
                                desc="Remove objects or close sessions"
                                bgColor="bg-red-500/10 text-red-400 border border-red-500/30"
                            />
                        </div>

                        <div className="pt-6 border-t border-obsidian-2 mt-6 md:flex gap-8 hidden">
                            <div className="text-center">
                                <div className="bg-obsidian-2 p-3 rounded-lg inline-block mb-2 text-obsidian-accent"><Globe size={24} /></div>
                                <div className="text-xs font-bold text-obsidian-textSecondary uppercase tracking-wider">Client</div>
                            </div>
                            <div className="flex-1 flex items-center justify-center relative">
                                <div className="h-0.5 bg-obsidian-2 w-full absolute"></div>
                                <div className="bg-obsidian-1 px-2 py-1 text-xs text-obsidian-textSecondary relative z-10 rounded border border-obsidian-2">JSON / HTTPS</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-obsidian-2 p-3 rounded-lg inline-block mb-2 text-obsidian-accent"><Server size={24} /></div>
                                <div className="text-xs font-bold text-obsidian-textSecondary uppercase tracking-wider">API Server</div>
                            </div>
                            <div className="flex-1 flex items-center justify-center relative">
                                <div className="h-0.5 bg-obsidian-2 w-full absolute"></div>
                            </div>
                            <div className="text-center">
                                <div className="bg-obsidian-2 p-3 rounded-lg inline-block mb-2 text-obsidian-accent"><Database size={24} /></div>
                                <div className="text-xs font-bold text-obsidian-textSecondary uppercase tracking-wider">Chassis</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Session Components Section */}
                <div className="border-t border-obsidian-2">
                    <SessionComponents />
                </div>

                {/* Tree Structure Section */}
                <div className="border-t border-obsidian-2 pt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-obsidian-textPrimary mb-4">Tree Structure Hierarchical object-oriented data model</h3>
                        <p className="text-lg text-obsidian-textSecondary max-w-2xl mx-auto">
                            The entire configuration is represented as a hierarchical tree of objects.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-obsidian-1 p-4 rounded-xl border border-obsidian-2 shadow-sm inline-block">
                            <img
                                src={treeModelImg}
                                alt="Tree Structure Hierarchical object-oriented data model"
                                className="max-w-full h-auto rounded opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CrudItem = ({ method, desc, bgColor }) => (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-obsidian-1 border border-obsidian-2 shadow-sm hover:border-obsidian-accent/50 transition-colors">
        <span className={`font-mono font-bold px-3 py-1 rounded text-sm min-w-[80px] text-center ${bgColor}`}>
            {method}
        </span>
        <span className="text-obsidian-textSecondary text-sm font-medium">{desc}</span>
    </div>
);

const TimelineItem = ({ label, title, desc, time, seconds }) => (
    <a
        href={`https://www.youtube.com/watch?v=ZpCkv6Jm0Mo&t=${seconds}s`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-4 p-3 rounded-lg bg-obsidian-1/50 border border-obsidian-2 hover:border-obsidian-accent/30 transition-all group"
    >
        <span className="shrink-0 font-mono text-[10px] text-obsidian-accent bg-obsidian-accent/10 px-2 py-1 rounded border border-obsidian-accent/20">
            {time}
        </span>
        <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[9px] uppercase font-bold text-obsidian-textSecondary tracking-tighter opacity-70">{label}</span>
                <span className="text-obsidian-textPrimary font-bold text-xs">{title}</span>
            </div>
            <p className="text-[11px] text-obsidian-textSecondary leading-relaxed group-hover:text-obsidian-textPrimary transition-colors">
                {desc}
            </p>
        </div>
    </a>
);

export default Foundation;
