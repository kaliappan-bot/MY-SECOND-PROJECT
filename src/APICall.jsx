import React, { useEffect } from "react";
import axios from "axios";
const APICall = () => {
    // async function apicall() {
    //     const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    //     const data = await response.json();
    //     console.log(data);
    // }
    async function apicall() {
        const response = await axios.get(
            "https://official-joke-api.appspot.com/random_joke"
        );
        console.log(response.data);
    }
    useEffect(() => {
        apicall();
    }, []);
    return (
        <>
        <h1>02/08/2025</h1>
        <h1>Kalees Api</h1>
        <button onClick={apicall}>API call</button>
        </>
    );
};
export default APICall;