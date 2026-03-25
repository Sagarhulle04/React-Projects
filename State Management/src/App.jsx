import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 20) {
      setCount(count + 1);
    }
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <span>
        <button onClick={decrement}>-</button>
        <span
          style={{
            color: `${count < 0 ? "red" : count === 0 ? "blue" : "green"} `,
            fontSize: "30px",
          }}
        >
          {" "}
          {count}{" "}
        </span>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </span>
    </div>
  );
};

export default App;
