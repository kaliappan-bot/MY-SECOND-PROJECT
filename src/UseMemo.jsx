import React from "react";
import { useState, useMemo,  } from "react";
import { useEffect } from "react";

const UseMemo = () => {
    const[number, setNumber] = useState(0);
    const[dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]); 
    const themeStyles = useMemo(() =>
    {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
            padding: "20px",
            marginTop: "20px"
        };
    }, [dark]);
    useEffect(() => {
        console.log("Theme changed");
    }, [themeStyles]);
    return (
        <>
        <h1>UseMemo</h1>
        <h1>27/07/2025</h1>
        <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
        <div style={themeStyles}>{doubleNumber}</div></>
        );
};
export default UseMemo;
function slowFunction(num) {
    for (let i=0; i<10; i++) {}
    return num*2;
}