import React from 'react';
import { useParams } from  "react-router-dom";
import Navbar from './Navbar';
const User = () => {
    const { username } = useParams();
    return (
        <>
        <Navbar />
        <h1>User: {username}</h1></>
    );
};
export default User;