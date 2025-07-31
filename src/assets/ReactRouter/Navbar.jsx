import React  from "react";
// import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <h1>Shiva</h1>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/users">users</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};
export default Navbar;