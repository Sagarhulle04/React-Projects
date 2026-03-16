import React from "react";

const ComponentC = ({ name }) => {
  return (
    <div style={{ height: "60vh", backgroundColor: "green" }}>
      ComponentC
      <h4>Your name is {name} </h4>
    </div>
  );
};

export default ComponentC;
