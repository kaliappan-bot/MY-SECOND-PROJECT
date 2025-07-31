import React from "react";
// import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate =useNavigate();
    const handleClick = () => {
        navigate("/users");
    };
    return (
        <nav>
            <h1>Shiva</h1>
            <ul>
                <Link to ="/">Home</Link>
                <Link to="/users">Users</Link>
                {/* <li onClick={handleClick}Users>Users</li> */}
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    );
};
export default Navbar;