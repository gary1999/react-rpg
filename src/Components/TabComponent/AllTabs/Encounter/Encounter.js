import React, { useState, useEffect } from 'react';

import monsters from '../../../Lists/Monsters';

const Encounter = () => {
    const [monsterName, setMonsterName] = useState('');

    const generateMonsterRoll = () => {
        return Math.floor(Math.random() * Object.keys(monsters).length);
    };

    const monsterEncounter = () => {
        //Generate a random monster name to display
        setMonsterName(monsters[generateMonsterRoll()].Name);
    };

    useEffect(() => {
        const encounterDisplay =
            document.body.querySelector('#encounter-display');
        encounterDisplay.textContent = 'You encounter' + monsterName;
    }, [monsterName]);

    const monsterEncounterChoice = (choice) => {
        if (choice === 'Fight') {
            console.log('Fight');
        } else {
            console.log('Run');
            const encounterDisplay =
                document.body.querySelector('#encounter-display');
            encounterDisplay.textContent = 'You flee...';
        }
    };

    return (
        <>
            <span id="encounter-display">ENCOUNTER</span>
            <div id="encounter-choice-container">
                <button onClick={() => monsterEncounterChoice('Fight')}>
                    Fight
                </button>
                <button onClick={() => monsterEncounterChoice('Flee')}>
                    Flee
                </button>
            </div>
        </>
    );
};

export default Encounter;
