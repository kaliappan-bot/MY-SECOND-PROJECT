import React, { useState, useEffect, useLayoutEffect } from "react";
const UseLayout = () => {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        console.log("count", count);
    }, [count]);
    console.log("rendered");
    return (
        <>
        <h1>Use Layout</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount((curr) => curr + 1)}>Add</button>
        </>
    );
};
export default UseLayout;