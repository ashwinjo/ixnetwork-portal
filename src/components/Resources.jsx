import React from 'react';
import { ExternalLink } from 'lucide-react';
import { primaryResources, helpfulLinks } from '../data/links';

const Resources = () => {
    return (
        <section id="resources" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Resources Hub</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Everything you need to go deep.
                    </p>
                </div>

                {/* Primary Resources Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {primaryResources.map((resource) => (
                        <a
                            key={resource.title}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 bg-white"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${resource.color}`}>
                                <resource.icon size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                {resource.title}
                                <ExternalLink size={14} className="text-slate-300 group-hover:text-slate-400" />
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {resource.description}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Helpful Links List */}
                <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
                    <h3 className="font-bold text-xl text-slate-900 mb-8 border-b border-slate-200 pb-4">
                        Quick Links & References
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                        {helpfulLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-slate-400 group-hover:text-blue-500 transition-colors">
                                        <link.icon size={18} />
                                    </div>
                                    <span className="font-medium text-slate-700 group-hover:text-slate-900">{link.title}</span>
                                </div>
                                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${getCategoryColor(link.category)}`}>
                                    {link.category}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const getCategoryColor = (category) => {
    switch (category) {
        case 'Documentation': return 'bg-blue-100 text-blue-600';
        case 'Package': return 'bg-amber-100 text-amber-600';
        case 'Updates': return 'bg-green-100 text-green-600';
        case 'Support': return 'bg-purple-100 text-purple-600';
        default: return 'bg-slate-200 text-slate-600';
    }
};

export default Resources;
