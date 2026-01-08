import React from 'react';
import { ExternalLink } from 'lucide-react';
import { primaryResources, helpfulLinks } from '../data/links';

const Resources = () => {
    return (
        <section id="resources" className="py-20 bg-obsidian-0 border-t border-obsidian-2">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-obsidian-textPrimary mb-4">Resources Hub</h2>
                    <p className="text-lg text-obsidian-textSecondary max-w-2xl mx-auto">
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
                            className="p-6 rounded-2xl border border-obsidian-2 shadow-sm hover:shadow-[0_0_15px_rgba(0,242,255,0.15)] hover:border-obsidian-accent/50 transition-all duration-300 group hover:-translate-y-1 bg-obsidian-1"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${resource.color}`}>
                                <resource.icon size={24} />
                            </div>
                            <h3 className="font-bold text-obsidian-textPrimary mb-2 flex items-center gap-2">
                                {resource.title}
                                <ExternalLink size={14} className="text-obsidian-3 group-hover:text-obsidian-accent" />
                            </h3>
                            <p className="text-sm text-obsidian-textSecondary leading-relaxed">
                                {resource.description}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Helpful Links List */}
                <div className="bg-obsidian-1 rounded-2xl p-8 md:p-12 border border-obsidian-2">
                    <h3 className="font-bold text-xl text-obsidian-textPrimary mb-8 border-b border-obsidian-2 pb-4">
                        Quick Links & References
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                        {helpfulLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-obsidian-2 hover:shadow-sm transition-all group border border-transparent hover:border-obsidian-2"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-obsidian-textSecondary group-hover:text-obsidian-accent transition-colors">
                                        <link.icon size={18} />
                                    </div>
                                    <span className="font-medium text-obsidian-textPrimary group-hover:text-obsidian-accent">{link.title}</span>
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
        case 'Documentation': return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
        case 'Package': return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
        case 'Updates': return 'bg-green-500/10 text-green-400 border border-green-500/20';
        case 'Support': return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
        default: return 'bg-obsidian-2 text-obsidian-textSecondary border border-obsidian-3';
    }
};

export default Resources;
