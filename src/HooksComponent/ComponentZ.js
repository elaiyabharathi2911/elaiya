import React, { useContext } from "react";
import { CounterContext } from "../App";

function ComponentZ() {
  const countContext = useContext(CounterContext);

  return (
    <div>
      <h1>This is component Z</h1>
      <h1>Count : {countContext.countState}</h1>
      <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
    </div>
  );
}

export default ComponentZ;