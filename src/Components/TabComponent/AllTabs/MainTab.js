// import React from 'react';
import React, { useState, useEffect } from 'react';
import monsters from '../../Lists/Monsters';
import Player from '../../Lists/Player';

import MainContent from '../MainContent';

const MainTab = () => {
    return (
        <div id="main-tab">
            <div id="main-container">
                <MainContent />
            </div>
        </div>
    );
};

export default MainTab;
