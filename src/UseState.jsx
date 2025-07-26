import React, { useState } from "react";
const UseState = () => {
    let [num, SetNum] = useState(100);
    let x=1;
    const handleAdd = () => {
        SetNum((currvalue) => {
            return currvalue + 1; });
        };
        return (
            <>
           <h1>26/07/2025</h1> 
           <h1>UseState</h1>
            <h1>{num}</h1>
            <button onClick={handleAdd}>Add</button>
            </>
        );
    };
    export default UseState;