import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, Check, AlertTriangle, Play, Settings, Database, Activity, Archive, Terminal } from 'lucide-react';
import { testPhases } from '../data/testPhases';

const Anatomy = () => {
    const [expandedPhase, setExpandedPhase] = useState(null);
    const [activeTabs, setActiveTabs] = useState({});
    const [copiedBlock, setCopiedBlock] = useState(null);

    const togglePhase = (id) => {
        setExpandedPhase(expandedPhase === id ? null : id);
    };

    const setTab = (phaseId, approachName) => {
        setActiveTabs(prev => ({
            ...prev,
            [phaseId]: approachName
        }));
    };

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedBlock(id);
        setTimeout(() => setCopiedBlock(null), 2000);
    };

    const PhaseIcon = ({ id }) => {
        switch (id) {
            case 'setup': return <Activity size={20} />;
            case 'config': return <Settings size={20} />;
            case 'execution': return <Play size={20} />;
            case 'verification': return <Database size={20} />;
            case 'teardown': return <Archive size={20} />;
            default: return <Activity size={20} />;
        }
    }

    return (
        <section id="anatomy" className="py-20 bg-obsidian-0">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-obsidian-accent font-bold tracking-wider text-sm uppercase mb-2 block">Core Concept</span>
                    <h2 className="text-3xl font-bold text-obsidian-textPrimary mb-4">Anatomy of an IxNetwork Test</h2>
                    <p className="text-lg text-obsidian-textSecondary max-w-2xl mx-auto">
                        Every automation script follows the same 5-phase lifecycle. Master this pattern to master the tool.
                    </p>
                </div>

                {/* Installation Section */}
                <div className="bg-obsidian-1 rounded-2xl border border-obsidian-2 p-8 mb-12 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Terminal size={100} className="text-obsidian-accent" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-obsidian-textPrimary mb-4 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-obsidian-accent/10 border border-obsidian-accent/20 flex items-center justify-center">
                                <Archive size={18} className="text-obsidian-accent" />
                            </div>
                            Install ixnetwork_restpy
                        </h3>
                        <p className="text-sm text-obsidian-textSecondary mb-6 leading-relaxed">
                            Before building your first test, initialize your local development environment using the official Python client.
                        </p>
                        <div className="bg-obsidian-0 rounded-xl p-5 font-mono text-sm text-obsidian-accent border border-obsidian-2 shadow-inner">
                            <div className="text-obsidian-3/50 text-[10px] uppercase font-bold tracking-widest mb-3"># Terminal Setup</div>
                            <div className="space-y-1">
                                <div className="flex gap-4">
                                    <span className="text-obsidian-3 opacity-30 select-none">1</span>
                                    <span>python -m venv ixnvenv</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-obsidian-3 opacity-30 select-none">2</span>
                                    <span>source ixnvenv/bin/activate</span>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <span className="text-obsidian-3 opacity-30 select-none">3</span>
                                    <span className="text-obsidian-textPrimary font-bold">pip install ixnetwork-restpy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {testPhases.map((phase, index) => (
                        <div
                            key={phase.id}
                            className={`bg-obsidian-1 rounded-xl border transition-all duration-300 overflow-hidden ${expandedPhase === phase.id
                                ? 'border-obsidian-accent shadow-[0_0_15px_rgba(0,242,255,0.1)]'
                                : 'border-obsidian-2 shadow-sm hover:border-obsidian-accent/50'
                                }`}
                        >
                            <button
                                onClick={() => togglePhase(phase.id)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg transition-colors ${expandedPhase === phase.id ? 'bg-obsidian-accent text-obsidian-0 shadow-[0_0_10px_rgba(0,242,255,0.4)]' : 'bg-obsidian-2 text-obsidian-textSecondary'
                                        }`}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${expandedPhase === phase.id ? 'text-obsidian-accent' : 'text-obsidian-textPrimary'}`}>
                                            {phase.title}
                                        </h3>
                                        {expandedPhase !== phase.id && (
                                            <p className="text-sm text-obsidian-textSecondary truncate max-w-xs sm:max-w-md">{phase.description}</p>
                                        )}
                                    </div>
                                </div>
                                <div className={`text-obsidian-textSecondary transition-transform duration-300 ${expandedPhase === phase.id ? 'rotate-180 text-obsidian-accent' : ''}`}>
                                    <ChevronDown />
                                </div>
                            </button>

                            <div className={`grid transition-all duration-300 ease-in-out ${expandedPhase === phase.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                }`}>
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 border-t border-obsidian-2">
                                        <div className="flex flex-col gap-8 mt-6">
                                            {/* Left Col: Description & Pitfalls */}
                                            <div className="w-full space-y-6">
                                                <div>
                                                    <h4 className="font-semibold text-obsidian-textPrimary mb-2 flex items-center gap-2">
                                                        <PhaseIcon id={phase.id} className="text-obsidian-accent" />
                                                        Goal
                                                    </h4>
                                                    <p className="text-obsidian-textSecondary text-sm leading-relaxed mb-4">
                                                        {phase.description}
                                                    </p>

                                                    {phase.subActivities && (
                                                        <div className="bg-obsidian-2 rounded-lg p-3 border border-obsidian-2">
                                                            <h5 className="text-xs font-bold text-obsidian-textSecondary uppercase tracking-wider mb-2">Key Steps</h5>
                                                            <ul className="text-sm text-obsidian-textPrimary space-y-1">
                                                                {phase.subActivities.map((activity, i) => (
                                                                    <li key={i} className="flex items-start gap-2">
                                                                        <span className="text-obsidian-accent mt-1">•</span>
                                                                        <span>{activity}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="bg-amber-500/10 rounded-lg p-4 border border-amber-500/20">
                                                    <h4 className="font-semibold text-amber-500 mb-2 text-sm flex items-center gap-2">
                                                        <AlertTriangle size={14} /> Common Pitfalls
                                                    </h4>
                                                    <ul className="text-sm text-amber-400/90 space-y-2 list-disc list-outside ml-4">
                                                        {phase.pitfalls.map((pitfall, i) => (
                                                            <li key={i}>{pitfall}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Right Col: Code */}
                                            <div className="w-full bg-obsidian-0 rounded-lg overflow-hidden flex flex-col border border-obsidian-2">
                                                <div className="flex items-center bg-obsidian-2 px-2 overflow-x-auto scrollbar-hide border-b border-obsidian-2">
                                                    {phase.approaches.map(approach => (
                                                        <button
                                                            key={approach.name}
                                                            onClick={() => setTab(phase.id, approach.name)}
                                                            className={`px-4 py-2 text-xs font-mono transition-colors border-b-2 whitespace-nowrap ${(activeTabs[phase.id] || phase.approaches[0].name) === approach.name
                                                                ? 'border-obsidian-accent text-obsidian-accent bg-obsidian-accent/5'
                                                                : 'border-transparent text-obsidian-textSecondary hover:text-obsidian-textPrimary'
                                                                }`}
                                                        >
                                                            {approach.name}
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="p-4 overflow-x-auto relative group">
                                                    <button
                                                        onClick={() => copyToClipboard(
                                                            phase.approaches.find(a => (activeTabs[phase.id] || phase.approaches[0].name) === a.name).code,
                                                            `${phase.id}-code`
                                                        )}
                                                        className="absolute top-2 right-2 p-2 rounded bg-obsidian-2 text-obsidian-textSecondary hover:text-obsidian-accent opacity-0 group-hover:opacity-100 transition-all border border-obsidian-2"
                                                        title="Copy to clipboard"
                                                    >
                                                        {copiedBlock === `${phase.id}-code` ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                                    </button>
                                                    <pre className="font-mono text-xs md:text-sm text-obsidian-accent/90 whitespace-pre-wrap">
                                                        <code>
                                                            {phase.approaches.find(a => (activeTabs[phase.id] || phase.approaches[0].name) === a.name).code}
                                                        </code>
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Anatomy;
