import React, { createContext, useState } from "react";
import Container from "./Container";
export const ThemeContext = createContext();
const UseContext = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider 
        value={{
            theme, toggleTheme,
        }}
        >
        <h1>UseContext</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>App Comp</h1>
        <Container />
        </ThemeContext.Provider>
    );
};
export default UseContext;