import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [wood, setWood] = useState(0);
    const [tin, setTin] = useState(0);
    const [copper, setCopper] = useState(0);

    const resource = {
        wood: 0,
        tin: 0,
        copper: 0,
    };

    // const resource = [
    //     {
    //         id: 1,
    //         name: 'wood',
    //         amount: 0,
    //     },
    //     {
    //         id: 2,
    //         name: 'tin',
    //         amount: 0,
    //     },
    //     {
    //         id: 3,
    //         name: 'copper',
    //         amount: 0,
    //     },
    //     {
    //         id: 4,
    //         name: 'steel',
    //         amount: 0,
    //     },
    // ];

    const [resources, setResources] = useState(resource);

    const [resourceArray, setResourceArray] = useState([]);

    const incrementWood = () => {
        setWood((wood) => wood + 1);
        setResources({
            ...resources,
            wood: wood + 1,
        });
        if (!resourceArray.includes('wood')) {
            setResourceArray([...resourceArray, 'wood']);
        }
    };

    const incrementTin = () => {
        setTin((tin) => tin + 1);
        setResources({
            ...resources,
            tin: tin + 1,
        });
        if (!resourceArray.includes('tin')) {
            setResourceArray([...resourceArray, 'tin']);
        }
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
                    <div id="main-game">
                        <button
                            onClick={incrementWood}
                        >{`Chop down tree`}</button>
                        <button onClick={incrementTin}>{`Mine tin`}</button>
                        {/* <p>{resourceArray}</p> */}
                    </div>

                    <div className="inventory">
                        <ul>
                            {resourceArray.map((resource, index) => {
                                return <li>{resource}</li>;
                            })}
                        </ul>

                        <div className="dialogue-box"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
