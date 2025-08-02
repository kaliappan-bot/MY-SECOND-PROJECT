import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./UserSlices";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = () => {
        dispatch(
            setUser({
                name: "Kali",
                email: "Kalees@gmail.com",
            })
        );
        navigate("/");
    };
    return (
        <>
        <h1>Log in</h1>
        <button onClick={login}>Login</button>
        </>
    );
};
export default Login;