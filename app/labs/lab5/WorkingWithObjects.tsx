"use client";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "M101", name: "Introduction to Node",
    description: "Building servers with Express", course: "CS4550",
  });

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-module" className="btn btn-primary me-2"
        href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary me-2"
        href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-primary me-2"
        href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <label className="form-label fw-bold">Assignment Title</label>
      <a id="wd-update-assignment-title" className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75 mb-2" id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />

      <label className="form-label fw-bold">Assignment Score</label>
      <a id="wd-update-assignment-score" className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <FormControl className="w-75 mb-2" id="wd-assignment-score" type="number"
        defaultValue={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} />

      <label className="form-label fw-bold">Assignment Completed</label>
      <a id="wd-update-assignment-completed" className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <FormControl className="w-75 mb-2" as="select" id="wd-assignment-completed"
        defaultValue={assignment.completed.toString()}
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.value === "true" })}>
        <option value="true">true</option>
        <option value="false">false</option>
      </FormControl>

      <label className="form-label fw-bold">Module Name</label>
      <a id="wd-update-module-name" className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Name
      </a>
      <FormControl className="w-75 mb-2" id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })} />

      <label className="form-label fw-bold">Module Description</label>
      <a id="wd-update-module-description" className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Description
      </a>
      <FormControl className="w-75 mb-2" id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })} />
      <hr />
    </div>
  );
}
