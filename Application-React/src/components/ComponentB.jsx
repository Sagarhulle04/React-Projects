import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ name }) => {
  return (
    <div style={{ height: "70vh", backgroundColor: "blue" }}>
      ComponentB
      <ComponentC name={name} />
    </div>
  );
};

export default ComponentB;
