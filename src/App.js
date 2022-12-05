import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [wood, setWood] = useState(0);
    const [tin, setTin] = useState(0);
    const [copper, setCopper] = useState(0);

    const resource = [
        {
            id: 1,
            name: 'wood',
            amount: 0,
        },
        {
            id: 2,
            name: 'tin',
            amount: 0,
        },
        {
            id: 3,
            name: 'copper',
            amount: 0,
        },
        {
            id: 4,
            name: 'steel',
            amount: 0,
        },
    ];

    const [resources, setResources] = useState(resource);

    const incrementWood = () => {
        const newValue = resources.map((resource) => {
            if (resource.id === 1) {
                return { ...resource, amount: resource.amount + 1 };
            } else {
                return resource;
            }
        });
        setResources(newValue);
    };

    const incrementTin = () => {};

    const branchTest = () => {
        //Test
    };

    return (
        <>
            <div className="App">
                {/* displays wood
                <h1>{resources.wood}</h1>
                <h1>{resources.tin}</h1> */}

                <h1>RPG</h1>
                <div id="main-container">
                    <div id="main-game">
                        <button
                            onClick={incrementWood}
                        >{`Chop down tree`}</button>
                        {/* <p>{resourceArray}</p> */}
                    </div>

                    <div className="inventory">
                        {resources.map((resource, index) => {
                            return (
                                <li key={index}>
                                    {resource.name} {resource.amount}
                                </li>
                            );
                        })}
                    </div>
                    <div className="dialogue-box"></div>
                </div>
            </div>
        </>
    );
}

export default App;
