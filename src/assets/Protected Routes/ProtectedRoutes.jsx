import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Setting from "./Setting";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./PrivateRoute";
const ProtectedRoutes = () => {
    return (
        <Provider store={store}>
            {/* <BrowserRouter> */}
            <h1>0l/08/2025</h1>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}/>
            <Route path="/setting" element={<setting />} />
            </Routes>
            
            {/* </BrowserRouter> */}
        </Provider>
    );
};
export default ProtectedRoutes;