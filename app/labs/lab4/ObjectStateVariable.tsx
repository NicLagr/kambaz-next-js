"use client";

import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div id="wd-object-state-variable">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <FormControl
        className="mb-2"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <FormControl
        type="number"
        value={person.age}
        onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value, 10) || 0 })}
      />
      <hr />
    </div>
  );
}
