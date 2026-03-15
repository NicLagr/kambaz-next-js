"use client";

import { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function EventObject() {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <div id="wd-event-object">
      <h2>The Event Object</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(value);
        }}
      >
        <FormControl
          className="mb-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something and submit"
        />
        <button className="btn btn-secondary" id="wd-event-object-submit">
          Submit
        </button>
      </form>
      <p className="mt-2">Submitted value: {submitted}</p>
      <hr />
    </div>
  );
}
