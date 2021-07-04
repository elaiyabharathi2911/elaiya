import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter:0
};

//state -> initialState
//action -> dipatch method parameter
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        firstCounter: state.firstCounter + action.value,
      };
    case "decrement":
      return {
        firstCounter: state.firstCounter - action.value,
      };
    case "increment5":
      return {
        secondCounter: state.secondCounter + action.value,
      };
    case "decrement5":
      return {
        secondCounter: state.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count : {count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <h1>Count2 : {countTwo.secondCounter}</h1>
      <button onClick={() => dispatchTwo({ type: "increment5", value: 5 })}>
        increment
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement5", value: 5 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset"})}>
        reset
      </button>
    </div>
  );
}

export default Counter3;