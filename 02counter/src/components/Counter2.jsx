import React from "react";
import { useState } from "react";

const Counter2 = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    //Note: will it increment by 4 or 1 ? Answer: 1. Because it updates as a batch. here react will see that same work is done 4 times, so it will
    //consider it single.
    //If we want to increment 4 times by writing like this. we need to use previous value. than only it will work and increment by 4
  };

  const decrement = () => {
    //if we write like this, than it will decrement by 4.
    //useState is a function. so, by default setCount takes callback. by using this callback we can modify the value. now it will not send the value
    //in batch. 1st it will resolve the callback and than it will move to next.
    setCount((prev)=> prev-1);
    setCount(prev=>prev-1);
    setCount(prev=>prev-1);
    setCount(prev=>prev-1);
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

export default Counter2;
