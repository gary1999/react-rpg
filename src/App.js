// import { logDOM } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import './CSS/App.css';
import './CSS/Main.css';
import './CSS/Tabs.css';
import './CSS/Dialogue.css';
import './CSS/Items.css';

import Tabs from './Components/TabComponent/Tabs';

function App() {
    // const [tabs, setTabs] = useState(['main', 'equipment', 'options']);
    // const tabs = ['main', 'equipment', 'resources', 'options'];
    // const tabsList = tabs.map((tab) => <button>{tab}</button>);

    return (
        <>
            <div className="App">
                <h1>RPG</h1>
                <Tabs />
            </div>
        </>
    );
}

export default App;
