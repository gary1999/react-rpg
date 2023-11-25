// const Player = (name, level, exp) => {
//     Name: name,
//     Level: level,
//     Exp: exp,
// };

// export default Player;

const player = () => {
    let Player = {};

    const reloadCharacter = () => {
        if (JSON.parse(localStorage.getItem('Player')) === null) {
            // console.log('no player');
            Player = {
                name: 'Player',
                level: 1,
                exp: 0,
            };
            localStorage.setItem('Player', JSON.stringify(Player));
            console.log('Player created');
            console.log(JSON.parse(localStorage.getItem('Player')));
        } else {
            console.log('Player found');
            console.log(JSON.parse(localStorage.getItem('Player')));
        }
    };

    const saveCharacter = () => {
        Player = {
            name: 'Player',
            level: 20,
            exp: 0,
        };
        localStorage.setItem('Player', JSON.stringify(Player));
        console.log('Saved');
    };

    const deleteCharacter = () => {
        localStorage.removeItem('Player');
        console.log('Removed');
    };

    const getPlayer = () => {
        // let test = JSON.parse(localStorage.getItem('Player'));
        console.log(Player.name);
    };

    return (
        <>
            <button onClick={() => reloadCharacter()}>Load</button>
            <button onClick={() => saveCharacter()}>Save</button>
            <button onClick={() => deleteCharacter()}>Delete</button>
            <button onClick={() => getPlayer()}>Get</button>
        </>
    );
};
