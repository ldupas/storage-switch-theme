import React, {useState, useEffect } from 'react';

function useCounter() {
    const initialState = Number(localStorage.getItem("count"));
    const [count, setCount] = useState(initialState)

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    useEffect(() => localStorage.setItem("count", count), [count]);

    return { count, increment, decrement};
}

function Counter() {
    const { count, increment, decrement} = useCounter(0);
    return (
        <div>
            <h1>Welcome in town Cowboy !</h1>
            <p>How many players will join?</p>
            <div className="counter">{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
