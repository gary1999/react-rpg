import React, { useState, useEffect } from 'react';

const GatheringTab = () => {
    const [resources, setResources] = useState([
        {
            id: 1,
            name: 'wood',
            amount: 0,
            string: 'cut tree',
        },
        {
            id: 2,
            name: 'stone',
            amount: 0,
            string: 'mine stone',
        },
    ]);

    const increment = (item) => {
        const newValue = resources.map((resource) => {
            if (resource.name === item) {
                return { ...resource, amount: resource.amount + 1 };
            } else {
                return resource;
            }
        });
        setResources(newValue);
    };

    return (
        <div id="gathering-tab">
            <div id="gathering-container">
                <div id="gathering-display">
                    {resources.map((resource, index) => {
                        return (
                            <button onClick={() => increment(resource.name)}>
                                {resource.string}
                            </button>
                        );
                    })}
                    <div className="inventory">
                        {resources.map((resource, index) => {
                            return (
                                <li key={index}>
                                    {resource.name} {resource.amount}
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GatheringTab;
