import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {setUsers} from "../../slices/userSlices";
import Navbar from "../ReactRouter/Navbar";
const Home = () => {
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name: "",
        age: "",
        email: "",
        contact: "",
    });
    const handleChange = ( e ) => {
       const name = e.target.name;
       const value = e.target.value;
       setFormInput((currInput) => {
        return {
            ...currInput,
            [name]:value,
        };
       });
    };console.log(formInput);
    const adduser = (event) => {
        event.preventDefault();
        dispatch(setUsers(formInput));
    };
    return (
        <>
        <h1>29/07/2025</h1>
        <h1>Redux</h1>
        <Navbar />
        <form>
            <label>Name</label>
            <br />
            <input name="name" type="text" value={formInput.name} onChange = {handleChange} />
            <br />
            <label>Age</label>
            <br />
            <input name="age" type="number" value={formInput.age} onChange={handleChange} />
            <br />
            <label>Email</label>
            <br />
            <input name="email" type="text" value={formInput.email} onChange={handleChange} />
            <br />
            <label>Contact</label>
            <br />
            <input name="contact" type="number" value={formInput.contact} onChange={handleChange} />
            <br />
            <button onClick={adduser}>Add</button>
            </form>
            </>
            );
};
export default Home;