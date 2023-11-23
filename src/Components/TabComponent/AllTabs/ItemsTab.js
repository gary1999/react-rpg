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

    const equipEquips = (key, value) => {
        if (value != 'Nothing') {
            setEquips({ ...equips, [key]: value });
            // setInventory({ ...inventory, [key]: value });
            delete inventory[key];
            // console.log(inventory);
        }
    };

    return (
        <div id="items-tab">
            <div id="items-container">
                <div id="equips-display">
                    <div id="equipped-display">
                        Equipped
                        {Object.entries(equips).map(([key, value]) => {
                            return (
                                <button
                                    id={`${key}Slot`}
                                    onClick={() => changeEquips(key, value)}
                                >{`${key}: ${value}`}</button>
                            );
                        })}
                    </div>
                    <div id="stat-gains">Stats Gained</div>
                    <div id="stat-total">Stats Total</div>
                </div>
                <div id="inventory-display">
                    Inventory{' '}
                    {Object.entries(inventory).map(([key, value]) => {
                        return (
                            <button
                                onClick={() => equipEquips(key, value)}
                            >{`${key}: ${value}`}</button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ItemsTab;
