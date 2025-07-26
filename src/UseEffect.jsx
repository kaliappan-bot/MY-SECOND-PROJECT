import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const UseEffect = () => {
    const [num1, setNum1] = useState(100);
    const [num2, setNum2] = useState(1000);
    useEffect (() => {
        setNum1(200);
        console.log("from useEffect");
        return () => {
            setNum1(null);
            console.log("memory cleaned");
        };
    }, [num1, num2]);
    return (
        <>
        <h1>UseEffect</h1>
        <h1>{num1}</h1>
        <button onClick={() => setNum1((curr) => curr + 1)}>Add</button>
        <h1>{num2}</h1>
        <button onClick={() => setNum2((curr) => curr + 1)}>Add</button>
        </>
    );
};
export default UseEffect;