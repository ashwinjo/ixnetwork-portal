import React from 'react';
import sessionComponentsImg from '../assets/ixnetwork-session-components.png';

const SessionComponents = () => {
    return (
        <div className="py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-obsidian-textPrimary mb-4">IxNetwork Session Components</h2>
                <p className="text-lg text-obsidian-textSecondary max-w-2xl mx-auto">
                    4 different ways to perform operations on IxNetwork Session Components.
                </p>
            </div>

            <div className="flex justify-center">
                <div className="bg-obsidian-1 p-4 rounded-2xl border border-obsidian-2 shadow-sm inline-block">
                    <img
                        src={sessionComponentsImg}
                        alt="IxNetwork Session Components Diagram"
                        className="max-w-full h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
        </div>
    );
};

export default SessionComponents;
