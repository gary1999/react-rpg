// import React from 'react';
import React, { useState, useEffect } from 'react';
import monsters from '../../Lists/Monsters';
import ItemsTab from './ItemsTab';

const monsterEncounter = () => {
    // console.log('Encounter');
    for (let i = 0; i < 10; i++) {
        console.log(monsters[Math.floor(Math.random() * monsters.length)]);
    }
    console.log('end');
};

const MainTab = () => {
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
                </div>
            </div>
        </div>
    );
};

export default MainTab;
