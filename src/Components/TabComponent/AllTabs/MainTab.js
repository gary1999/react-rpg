// import React from 'react';
import React, { useState, useEffect } from 'react';
import monsters from '../../Lists/Monsters';
import Player from '../../../utils/Player';

const MainTab = () => {
    var Player = {};

    const [monsterName, setMonsterName] = useState('');

    // const [playerName, setPlayerName] = useState('Player');
    // const [playerLevel, setPlayerLevel] = useState(Player.level);

    const monsterEncounter = () => {
        console.log('Encounter');
        //Generate a random monster name to display
        setMonsterName(
            monsters[Math.floor(Math.random() * Object.keys(monsters).length)]
                .name
        );
    };

    const monsterEncounterChoice = (choice) => {
        if (choice === 'Fight') {
            console.log('Fight');
        } else {
            console.log('Run');
        }
    };

    return (
        <div id="main-tab">
            <div id="main-container">
                <div id="main-content">
                    <div id="content">
                        <span>{}</span>
                        <span>Level {Player.level}</span>
                        <button
                            id="fight-monster-button"
                            onClick={() => monsterEncounter()}
                        >
                            Click to seek monster
                        </button>
                    </div>

                    <div id="encounter-container">
                        <div id="monster-encounter">
                            <span>You encounter a {monsterName}</span>
                            <div id="encounter-choice-container">
                                <button
                                    onClick={() =>
                                        monsterEncounterChoice('Fight')
                                    }
                                >
                                    Fight
                                </button>
                                <button
                                    onClick={() =>
                                        monsterEncounterChoice('Flee')
                                    }
                                >
                                    Flee
                                </button>
                            </div>
                        </div>

                        {/* <p>Hello</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainTab;
