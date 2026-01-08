import React from 'react';

const ApiReference = () => {
    return (
        <div className="pt-24 h-screen flex flex-col">
            <iframe
                src="https://openixia.github.io/ixnetwork_restpy/#/reference"
                className="w-full h-full border-none"
                title="IxNetwork API Reference"
            />
        </div>
    );
};

export default ApiReference;
