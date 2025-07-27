import React from "react";
import { useState } from "react";
import List from "./List";
import { useCallback } from "react";
import { useMemo } from "react";
const UseCallback = () => {
    const [number, setNumber] =useState(0);
    const [dark, setDark] = useState(false);
    const getItems= useCallback((incrementor) => {
        return [number + incrementor + 1, number + incrementor + 2, number + incrementor +3];
    }, [number]);
    // const getItems = useMemo(() => {
    //     return [number +1, number +2, number +3];
    // }, [number]);
    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };
    return (
        <div style={theme}>
            <h1>UseCallback</h1>
            <h1>27/07/2025</h1>
            <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))
                }
            />
            <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    );
};
export default UseCallback;