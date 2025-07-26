import React, { useEffect, useRef, useState } from "react";
const UseRef = () => {
    const [input, setInput] = useState("");
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current = input;
    }, [input]);
    const display = () => {
        console.log(inputRef.current);
    };
    return (
        <>
        <h1>UseRef</h1>
        <h1>Input</h1>
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}></input>
        <p>My name is {input}</p>
        <p>My name (ref) is {inputRef.current}</p>
        <button onClick={display}>Show Input</button></>
    );
};
export default UseRef;