import { logDOM } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
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

    const nextDialogue = () => {
        console.log('clicked');
    };

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
                    <div id="gameplay-container">
                        <div id="main-game">
                            {/* <button
                            onClick={() => increment('wood')}
                            >{`Chop down tree`}</button>
                            <button
                            onClick={() => increment('tin')}
                        >{`Mine tin`}</button> */}
                            {/* <p>{resourceArray}</p> */}
                            {resources.map((resource, index) => {
                                return (
                                    <button
                                        onClick={() => increment(resource.name)}
                                    >
                                        {resource.string}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="dialogue-box">
                            <button
                                id="dialogue-button"
                                onClick={() => nextDialogue()}
                            >
                                Next
                            </button>
                        </div>
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
                </div>
            </div>
        </>
    );
}

export default App;
