import React, { useState, useEffect } from 'react';
// import FirstTab from './AllTabs/FirstTab';
// import SecondTab from './AllTabs/SecondTab';

import MainTab from './AllTabs/MainTab';
import ItemsTab from './AllTabs/ItemsTab';
import GatheringTab from './AllTabs/GatheringTab';
import DialogueBox from '../DialogueBox';

import TabNavItem from './V2/TabNavItem';
import TabContent from './V2/TabContent';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="Tabs">
            <ul className="nav">
                <TabNavItem
                    title="Main"
                    id="tab1"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <TabNavItem
                    title="Equips/Inventory"
                    id="tab2"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <TabNavItem
                    title="Gathering"
                    id="tab3"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <TabNavItem
                    title="Hunt"
                    id="tab4"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <TabNavItem
                    title="Options"
                    id="tab5"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </ul>

            <div id="Content-Container">
                <TabContent id="tab1" activeTab={activeTab}>
                    <MainTab />
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <ItemsTab />
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <GatheringTab />
                </TabContent>
                <TabContent id="tab4" activeTab={activeTab}>
                    {/* <HuntingTab /> */}
                </TabContent>
                <TabContent id="tab5" activeTab={activeTab}>
                    {/* <OptionsTab /> */}
                </TabContent>
            </div>

            <DialogueBox />
        </div>
    );
};

export default Tabs;
