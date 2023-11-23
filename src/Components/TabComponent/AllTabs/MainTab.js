// import React from 'react';
import React, { useState, useEffect } from 'react';
import monsters from '../../Lists/Monsters';
import ItemsTab from './ItemsTab';

const MainTab = () => {
    const [monsterName, setMonsterName] = useState('');

    const monsterEncounter = () => {
        console.log('Encounter');
        //Generate a random monster name to display
        setMonsterName(
            monsters[Math.floor(Math.random() * Object.keys(monsters).length)]
                .name
        );
    };

    return (
        <div id="main-tab">
            <div id="main-container">
                <div id="main-content">
                    <button
                        id="fight-monster-button"
                        onClick={() => monsterEncounter()}
                    >
                        Click to seek monster
                    </button>
                    <div id="monster-encounter">
                        <span>{monsterName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainTab;
