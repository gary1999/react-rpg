import React, { useState, useEffect } from 'react';

import Player from '../Lists/Player';
import Relaxing from './AllTabs/Encounter/Relaxing';
import Encounter from './AllTabs/Encounter/Encounter';

const MainContent = () => {
    const [activeEncounter, setActiveEncounter] = useState(false);

    const displayActiveEncounter = () => {
        setActiveEncounter(!activeEncounter);
    };

    return (
        <>
            <div id="main-content">
                <div id="content">
                    <span>{Player.Name}</span>
                    <span>Level: {Player.Level}</span>
                    <span>Total health: {Player.Stats.Health}</span>
                    <span>
                        Damage: {Player.Stats.DamageMin}-
                        {Player.Stats.DamageMax}
                    </span>
                    <button
                        id="fight-monster-button"
                        // onClick={() => monsterEncounter()}
                        onClick={() => displayActiveEncounter()}
                    >
                        Click to seek monster
                    </button>
                </div>
                <div id="encounter-container">
                    <div id="monster-encounter">
                        {/* <Encounter /> */}
                        {/* Check what player is doing */}
                        {activeEncounter ? <Encounter /> : <Relaxing />}
                        {/* <div id="monster-fight"></div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainContent;
