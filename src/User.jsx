import React, { useContext } from "react";
import { ThemeContext } from "./UseContext";
const User = () => {
    const { theme } = useContext(ThemeContext);
    const textStyle = {
        backgroundColor: theme === "light" ? "white" :"black",
        color: theme === "light" ? "black" : "white",
    };
    return (
        <>
        <h1 style={textStyle}>User</h1>
        </>
    );
};
export default User;