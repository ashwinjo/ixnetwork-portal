import React from 'react';
import { Check, X, Zap, Clock, Repeat } from 'lucide-react';

const WhatIsIxNetwork = () => {
    return (
        <section id="overview" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Automate IxNetwork?</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Move beyond manual testing to achieve scale, repeatability, and speed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Comparison Table */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                            <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-sm">Manual</span>
                            <span className="text-slate-400">vs</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Automated</span>
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <X size={18} className="text-red-500" />
                                    <span>Configuring 1000 streams</span>
                                </div>
                                <div className="flex items-center gap-2 font-medium text-slate-800">
                                    <Check size={18} className="text-green-500" />
                                    <span>Done in seconds</span>
                                </div>
                            </div>

                            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <X size={18} className="text-red-500" />
                                    <span>Regression testing</span>
                                </div>
                                <div className="flex items-center gap-2 font-medium text-slate-800">
                                    <Check size={18} className="text-green-500" />
                                    <span>Nightly builds</span>
                                </div>
                            </div>

                            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <X size={18} className="text-red-500" />
                                    <span>Reproducibility</span>
                                </div>
                                <div className="flex items-center gap-2 font-medium text-slate-800">
                                    <Check size={18} className="text-green-500" />
                                    <span>100% Consistent</span>
                                </div>
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <X size={18} className="text-red-500" />
                                    <span>Human error</span>
                                </div>
                                <div className="flex items-center gap-2 font-medium text-slate-800">
                                    <Check size={18} className="text-green-500" />
                                    <span>Eliminated</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats / Value Prop */}
                    <div className="space-y-8">
                        <ValueProp
                            icon={Clock}
                            title="95% Time Saved"
                            desc="Reduce test configuration time from days to minutes through reusable libraries."
                            color="text-blue-600 bg-blue-50"
                        />
                        <ValueProp
                            icon={Zap}
                            title="10x Faster Iterations"
                            desc="Test early and often. Catch bugs in development rather than qa."
                            color="text-amber-600 bg-amber-50"
                        />
                        <ValueProp
                            icon={Repeat}
                            title="100% Reproducibility"
                            desc="Eliminate 'it works on my machine'. Exact test conditions, every time."
                            color="text-green-600 bg-green-50"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ValueProp = ({ icon: Icon, title, desc, color }) => (
    <div className="flex gap-4">
        <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
            <Icon size={24} />
        </div>
        <div>
            <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default WhatIsIxNetwork;
