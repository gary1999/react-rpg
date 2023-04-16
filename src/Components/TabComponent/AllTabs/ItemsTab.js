import React, { useState } from 'react';

const ItemsTab = () => {
    // const [count, setCount] = useState(number);

    const [equips, setEquips] = useState({
        Helmet: 'Basic Helmet',
        Top: 'Shirt',
        Bottom: 'Pants',
        Shoes: 'Sandals',
        Weapon: 'Stick',
        Shield: 'Wooden Shield',
    });

    const equipsKeys = Object.keys(equips);
    const equipsValues = Object.values(equips);

    const [inventory, setInventory] = useState({});

    const changeEquips = (key, value) => {
        if (value != 'Nothing') {
            setEquips({ ...equips, [key]: 'Nothing' });
            setInventory({ ...inventory, [key]: value });
        }
    };

    return (
        <div id="items-tab">
            <div id="items-container">
                <div id="equips-display">
                    Equipped Items
                    {Object.entries(equips).map(([key, value]) => {
                        return (
                            <button
                                onClick={() => changeEquips(key, value)}
                            >{`${key}: ${value}`}</button>
                        );
                    })}
                </div>
                <div id="inventory-display">
                    Inventory{' '}
                    {Object.entries(inventory).map(([key, value]) => {
                        return (
                            <button
                                onClick={() => changeEquips(key, value)}
                            >{`${key}: ${value}`}</button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ItemsTab;
