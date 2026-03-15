"use client";

import { useCounterStore } from "./store";

export default function ZustandCounter() {
  const { count, increase, decrease, setCount, reset } = useCounterStore((state) => state);

  return (
    <div className="m-2" id="wd-zustand-counter">
      <h2>Zustand Counter</h2>
      Count: {count}
      <br />
      <button onClick={() => increase(1)} className="btn btn-success me-2 mt-2">Increase</button>
      <button onClick={() => decrease(1)} className="btn btn-danger me-2 mt-2">Decrease</button>
      <button onClick={() => setCount(10)} className="btn btn-secondary me-2 mt-2">Set to 10</button>
      <button onClick={() => reset()} className="btn btn-warning mt-2">Reset</button>
    </div>
  );
}
