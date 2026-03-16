import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = ({ name }) => {
  return (
    <div style={{ height: "80vh", backgroundColor: "yellow" }}>
      ComponentA
      <ComponentB name={name} />
    </div>
  );
};

export default ComponentA;
