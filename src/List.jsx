import React from "react";
import { useEffect } from "react";
import { useState } from "react"; 
const List = ({ getItems }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems(10));
        console.log("setting items");
}, [getItems]);
return (
    <>
    {items.map((item, index) => (
         <p key={index}>{item}</p>
    ))}</>
);
};
export default List;
