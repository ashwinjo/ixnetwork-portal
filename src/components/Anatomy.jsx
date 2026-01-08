import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, Check, AlertTriangle, Play, Settings, Database, Activity, Archive } from 'lucide-react';
import { testPhases } from '../data/testPhases';

const Anatomy = () => {
    const [expandedPhase, setExpandedPhase] = useState('setup');
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
        <section id="anatomy" className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Core Concept</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Anatomy of an IxNetwork Test</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Every automation script follows the same 5-phase lifecycle. Master this pattern to master the tool.
                    </p>
                </div>

                <div className="space-y-4">
                    {testPhases.map((phase, index) => (
                        <div
                            key={phase.id}
                            className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${expandedPhase === phase.id
                                ? 'border-blue-200 shadow-lg ring-1 ring-blue-100'
                                : 'border-slate-200 shadow-sm hover:border-blue-300'
                                }`}
                        >
                            <button
                                onClick={() => togglePhase(phase.id)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg transition-colors ${expandedPhase === phase.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${expandedPhase === phase.id ? 'text-blue-900' : 'text-slate-900'}`}>
                                            {phase.title}
                                        </h3>
                                        {expandedPhase !== phase.id && (
                                            <p className="text-sm text-slate-500 truncate max-w-xs sm:max-w-md">{phase.description}</p>
                                        )}
                                    </div>
                                </div>
                                <div className={`text-slate-400 transition-transform duration-300 ${expandedPhase === phase.id ? 'rotate-180' : ''}`}>
                                    <ChevronDown />
                                </div>
                            </button>

                            <div className={`grid transition-all duration-300 ease-in-out ${expandedPhase === phase.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                }`}>
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 border-t border-slate-100">
                                        <div className="flex flex-col gap-8 mt-6">
                                            {/* Left Col: Description & Pitfalls */}
                                            <div className="w-full space-y-6">
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                                        <PhaseIcon id={phase.id} className="text-blue-500" />
                                                        Goal
                                                    </h4>
                                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                        {phase.description}
                                                    </p>

                                                    {phase.subActivities && (
                                                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                                                            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Steps</h5>
                                                            <ul className="text-sm text-slate-700 space-y-1">
                                                                {phase.subActivities.map((activity, i) => (
                                                                    <li key={i} className="flex items-start gap-2">
                                                                        <span className="text-blue-400 mt-1">•</span>
                                                                        <span>{activity}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                                                    <h4 className="font-semibold text-amber-800 mb-2 text-sm flex items-center gap-2">
                                                        <AlertTriangle size={14} /> Common Pitfalls
                                                    </h4>
                                                    <ul className="text-sm text-amber-700 space-y-2 list-disc list-outside ml-4">
                                                        {phase.pitfalls.map((pitfall, i) => (
                                                            <li key={i}>{pitfall}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Right Col: Code */}
                                            <div className="w-full bg-slate-900 rounded-lg overflow-hidden flex flex-col">
                                                <div className="flex items-center bg-slate-800 px-2 overflow-x-auto scrollbar-hide">
                                                    {phase.approaches.map(approach => (
                                                        <button
                                                            key={approach.name}
                                                            onClick={() => setTab(phase.id, approach.name)}
                                                            className={`px-4 py-2 text-xs font-mono transition-colors border-b-2 whitespace-nowrap ${(activeTabs[phase.id] || phase.approaches[0].name) === approach.name
                                                                ? 'border-blue-500 text-white'
                                                                : 'border-transparent text-slate-400 hover:text-slate-200'
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
                                                        className="absolute top-2 right-2 p-2 rounded bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
                                                        title="Copy to clipboard"
                                                    >
                                                        {copiedBlock === `${phase.id}-code` ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                                    </button>
                                                    <pre className="font-mono text-xs md:text-sm text-blue-100 whitespace-pre-wrap">
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
