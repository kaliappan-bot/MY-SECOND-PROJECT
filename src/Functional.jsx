import React, { useEffect, useState } from "react";
const Functional = () => {
    const [first, setFirst] = useState(1);
    const [second, setSecond] = useState(100);
    const getData = () => {
        console.log("Data received");
    };
    useEffect(() => {
    getData();
    },[])
    useEffect(() => {
        console.log("First value changed");
    }, [first]);
    return (
        <>
        <h1>31/07/2025</h1>
        <h1>Functional</h1>
        <h1>First: {first}</h1>
        <h1>Second: {second}</h1>
        <button onClick={() => setFirst((curr) => curr + 1)}>Add First</button>
        <button onClick={() => setSecond((curr) => curr + 1)}>Add Second</button>
        </>
    );
};
export default Functional;