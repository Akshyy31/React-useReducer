import React, { useEffect, useReducer } from "react";

function setReduce(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      break;
  }
}

function Count() {
  const [count, dispatch] = useReducer(setReduce, 0);

  const increment = () => {
    dispatch("increment");
  };

  const decrement = () => {
    if (count > 0) {
      dispatch("decrement");
    }
  };

  const reset = () => {
    dispatch("reset");
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button style={{ margin: "10px" }} onClick={increment}>
        Increment
      </button>
       <button style={{ margin: "10px" }} onClick={reset}>
        Reset
      </button>
      <button style={{ margin: "10px" }} onClick={decrement}>
        Decrement
      </button>
     
    </div>
  );
}

export default Count;
