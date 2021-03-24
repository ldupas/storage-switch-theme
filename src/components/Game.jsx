import React, { useState } from 'react';

function Game() {
    const initialState = Number(localStorage.getItem("count"));
    const [count, setCount] = useState(initialState)

    return (
        <div>
            <span>{count} players joined the game</span>
        </div>
    )
}

export default Game
