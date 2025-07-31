import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  
  const fruits = useSelector((state) => state.fruitsInfo.fruits);

  console.log("Fruits from Redux:", fruits);

  return (
    <div>
      <h1>About</h1>
      <h2>Fruits List:</h2>
      <ul>
        {fruits && fruits.length > 0 ? (
          fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
        ) : (
          <li>No fruits available</li>
        )}
      </ul>
    </div>
  );
};

export default About;