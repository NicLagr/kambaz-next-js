"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { add } from "./addReducer";
import { RootState } from "../../store";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: RootState) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-25" id="wd-add-redux">
      <h2>Add Redux</h2>
      <h3>{a} + {b} = {sum}</h3>
      <FormControl type="number" value={a} className="mb-2"
        onChange={(e) => setA(parseInt(e.target.value, 10) || 0)} />
      <FormControl type="number" value={b} className="mb-2"
        onChange={(e) => setB(parseInt(e.target.value, 10) || 0)} />
      <Button id="wd-add-redux-click" onClick={() => dispatch(add({ a, b }))}>
        Add Redux
      </Button>
      <hr />
    </div>
  );
}
