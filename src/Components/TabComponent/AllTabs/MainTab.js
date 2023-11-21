// import React from 'react';
import React, { useState, useEffect } from 'react';
import ItemsTab from './ItemsTab';

const monsterEncounter = () => {
    console.log('Encounter');
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
