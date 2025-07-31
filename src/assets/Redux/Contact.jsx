import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFruit } from "../../slices/fruitsSlice";

const Contact = () => {
  const [fruit, setFruitInfo] = useState("");
  const dispatch = useDispatch();

  const addFruit = () => {
    if (fruit.trim() !== "") {
      dispatch(setFruit(fruit));
      setFruitInfo("");
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <input
        type="text"
        placeholder="Enter a fruit"
        value={fruit}
        onChange={(e) => setFruitInfo(e.target.value)}
      />
      <button onClick={addFruit}>Add Fruit</button>
    </div>
  );
};

export default Contact;