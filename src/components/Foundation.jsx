import { Database, Server, Globe } from 'lucide-react';
import treeModelImg from '../assets/ixnetwork-tree-model.png';
import architectureImg from '../assets/ixnetwork-architecture.png';
import migrationImg from '../assets/ixnetwork-migration.png';
import SessionComponents from './SessionComponents';

const Foundation = () => {
    return (
        <section id="foundation" className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">The Foundation</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Understanding the architecture before writing the code.
                    </p>
                </div>

                {/* Automation Platform Architecture Image Placeholder */}
                {/* Migration / Tight Couplings Section */}
                <div className="mb-20 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">From tight couplings to REST API first automation</h3>
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm inline-block w-full max-w-4xl mx-auto flex items-center justify-center relative bg-slate-50">
                        <img
                            src={migrationImg}
                            alt="From tight couplings to REST API first automation"
                            className="max-w-full h-auto rounded"
                        />
                    </div>
                </div>

                {/* Automation Platform Architecture Image */}
                <div className="mb-20 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Automation Platform Architecture</h3>
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm inline-block w-full max-w-4xl mx-auto flex items-center justify-center relative bg-slate-50">
                        <img
                            src={architectureImg}
                            alt="Automation Platform Architecture"
                            className="max-w-full h-auto rounded"
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Architecture Video/Placeholder */}
                    <div className="bg-slate-900 rounded-2xl aspect-video relative overflow-hidden shadow-2xl group cursor-pointer">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-full group-hover:bg-white/20 transition-all transform group-hover:scale-110">
                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-white border-b-[12px] border-b-transparent translate-x-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                            <h3 className="text-white font-bold text-lg">System Architecture Explained</h3>
                            <p className="text-slate-400 text-sm">8 min watch • Core Concepts</p>
                        </div>
                        {/* Abstract diagram lines background */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,50 Q25,25 50,50 T100,50" stroke="white" strokeWidth="0.5" fill="none" />
                                <path d="M0,30 Q25,80 50,30 T100,80" stroke="white" strokeWidth="0.5" fill="none" />
                            </svg>
                        </div>
                    </div>

                    {/* CRUD Operations */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900">How It Works</h3>
                        <p className="text-slate-600 mb-6">
                            IxNetwork automates via a REST API. Whether you use the raw API or our Python SDK wrapper,
                            you are essentially performing CRUD operations on the test configuration tree.
                        </p>

                        <div className="space-y-4">
                            <CrudItem
                                method="POST"
                                desc="Create new objects (Sessions, vPorts, Topologies)"
                                bgColor="bg-green-100 text-green-700"
                            />
                            <CrudItem
                                method="GET"
                                desc="Read statistics, configurations, and status"
                                bgColor="bg-blue-100 text-blue-700"
                            />
                            <CrudItem
                                method="PATCH"
                                desc="Update existing objects (Multiplier, IP Address)"
                                bgColor="bg-amber-100 text-amber-700"
                            />
                            <CrudItem
                                method="DELETE"
                                desc="Remove objects or close sessions"
                                bgColor="bg-red-100 text-red-700"
                            />
                        </div>

                        <div className="pt-6 border-t border-slate-200 mt-6 md:flex gap-8 hidden">
                            <div className="text-center">
                                <div className="bg-indigo-50 p-3 rounded-lg inline-block mb-2 text-indigo-600"><Globe size={24} /></div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client</div>
                            </div>
                            <div className="flex-1 flex items-center justify-center relative">
                                <div className="h-0.5 bg-slate-200 w-full absolute"></div>
                                <div className="bg-slate-100 px-2 py-1 text-xs text-slate-500 relative z-10 rounded">JSON / HTTPS</div>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-50 p-3 rounded-lg inline-block mb-2 text-indigo-600"><Server size={24} /></div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">API Server</div>
                            </div>
                            <div className="flex-1 flex items-center justify-center relative">
                                <div className="h-0.5 bg-slate-200 w-full absolute"></div>
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-50 p-3 rounded-lg inline-block mb-2 text-indigo-600"><Database size={24} /></div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Chassis</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Session Components Section */}
                <div className="border-t border-slate-200">
                    <SessionComponents />
                </div>

                {/* Tree Structure Section */}
                <div className="border-t border-slate-200 pt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Tree Structure Hierarchical object-oriented data model</h3>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            The entire configuration is represented as a hierarchical tree of objects.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm inline-block">
                            <img
                                src={treeModelImg}
                                alt="Tree Structure Hierarchical object-oriented data model"
                                className="max-w-full h-auto rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CrudItem = ({ method, desc, bgColor }) => (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <span className={`font-mono font-bold px-3 py-1 rounded text-sm min-w-[80px] text-center ${bgColor}`}>
            {method}
        </span>
        <span className="text-slate-600 text-sm font-medium">{desc}</span>
    </div>
);

export default Foundation;
