"use client";

import { useCounter } from "./context";

export default function CounterContext() {
  const counter = useCounter();
  if (!counter) return null;
  const { count, increment, decrement } = counter;

  return (
    <div id="wd-counter-context">
      <h2>Counter Context</h2>
      <h3>{count}</h3>
      <button onClick={increment} id="wd-counter-context-increment-click" className="btn btn-success me-2">
        Increment
      </button>
      <button onClick={decrement} id="wd-counter-context-decrement-click" className="btn btn-danger">
        Decrement
      </button>
      <hr />
    </div>
  );
}
