import { useState } from "react";
import React from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    console.log(count);
    return setCount((prev) => prev + 1);
  };
  const handleSubtract = () => {
    console.log(count);
    return setCount((prev) => prev - 1);
  };
  return (
    <div className="main flex">
      <div className="counter-wrapper flex">
        <div className="counter">{count}</div>
        <div className="btn flex">
          <button onClick={handleAdd} className="btn add">
            +
          </button>
          <button onClick={handleSubtract} className="btn subtract">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
