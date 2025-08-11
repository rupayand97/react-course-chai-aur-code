import React from "react";
import { useState } from "react";

const Counter1 = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>hello world</h1>
      <h2>counter: {count}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button> <br />
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter1;