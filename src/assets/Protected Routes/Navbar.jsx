import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar =() => {
    const user=useSelector((state) => state.userInfo.user)
    const dispatch=useDispatch();
    const Navigate=useNavigate();
    const logout = () => {
    dispatch(removeUser())
    Navigate("/");
};
return (
    <nav>
        <h1>React Ep-16</h1>
        <ul>
            {!user &&(
            <Link to="/login">
            <li>Login</li></Link>)}
            {user && (
                <>
            <Link to="/setting"><li>Setting</li></Link>
            <li>Logout</li></>)}
            <Link to = "/login">
            <li>Login</li></Link>
            <Link to="/setting"><li>Logout</li></Link>
        </ul>
    </nav>
);
}
export default Navbar;