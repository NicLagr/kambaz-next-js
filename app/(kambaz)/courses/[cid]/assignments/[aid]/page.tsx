"use client";

import { Form, FormLabel, FormControl, FormSelect, FormCheck, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { setAssignments } from "../../../assignments/reducer";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as client from "../../../client";

type Assignment = {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
};

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { cid, aid } = useParams();
  const assignment = (assignments as Assignment[]).find((a) => a._id === aid);
  const isNew = aid === "new";
  const isFaculty = currentUser?.role === "FACULTY";
  const router = useRouter();
  const [edited, setEdited] = useState<any>({
    _id: "new",
    title: "New Assignment",
    course: cid,
    description: "",
    points: 100,
    dueDate: "2026-03-01",
    availableFrom: "2026-02-22",
    availableUntil: "2026-03-15",
  });

  useEffect(() => {
    if (!isNew && assignment) {
      setEdited({
        ...assignment,
        availableUntil: (assignment as any).availableUntil || "2026-12-31",
      });
    }
  }, [assignment, isNew]);

  const assignToLink = `/courses/${cid}/assignments`;

  const handleSave = async () => {
    const payload = { ...edited, course: cid };
    if (isNew) {
      const newAssignment = await client.createAssignmentForCourse(cid as string, payload);
      dispatch(setAssignments([...assignments, newAssignment]));
    } else {
      await client.updateAssignment(payload);
      dispatch(setAssignments(
        assignments.map((a: any) => (a._id === payload._id ? payload : a))
      ));
    }
    router.push(assignToLink);
  };

  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        <FormControl id="wd-name" value={edited.title || ""} className="mb-3"
          readOnly={!isFaculty}
          onChange={(e) => setEdited({ ...edited, title: e.target.value })} />

        <FormLabel htmlFor="wd-description">Description</FormLabel>
        <FormControl as="textarea" id="wd-description" rows={10} className="mb-3"
          value={edited.description || ""} readOnly={!isFaculty}
          onChange={(e) => setEdited({ ...edited, description: e.target.value })} />

        <Row className="mb-3">
          <Col sm={2}><FormLabel column htmlFor="wd-points">Points</FormLabel></Col>
          <Col sm={10}>
            <FormControl id="wd-points" type="number" value={edited.points || 0}
              readOnly={!isFaculty}
              onChange={(e) => setEdited({ ...edited, points: parseInt(e.target.value, 10) || 0 })} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}><FormLabel column htmlFor="wd-assignment-group">Assignment Group</FormLabel></Col>
          <Col sm={10}>
            <FormSelect id="wd-assignment-group" defaultValue="ASSIGNMENTS" disabled={!isFaculty}>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}><FormLabel column htmlFor="wd-display-grade-as">Display Grade As</FormLabel></Col>
          <Col sm={10}>
            <FormSelect id="wd-display-grade-as" defaultValue="Percentage" disabled={!isFaculty}>
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter">Letter</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}><FormLabel column htmlFor="wd-submission-type">Submission Type</FormLabel></Col>
          <Col sm={10}>
            <FormSelect id="wd-submission-type" defaultValue="Online" disabled={!isFaculty}>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}><FormLabel column>Online Entry Options</FormLabel></Col>
          <Col sm={10}>
            <FormCheck type="checkbox" id="wd-text-entry" defaultChecked label="Text Entry" disabled={!isFaculty} />
            <FormCheck type="checkbox" id="wd-website-url" defaultChecked label="Website URL" disabled={!isFaculty} />
            <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" disabled={!isFaculty} />
            <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" disabled={!isFaculty} />
            <FormCheck type="checkbox" id="wd-file-uploads" defaultChecked label="File Uploads" disabled={!isFaculty} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}><FormLabel column htmlFor="wd-assign-to">Assign To</FormLabel></Col>
          <Col sm={10}><FormControl id="wd-assign-to" defaultValue="Everyone" readOnly={!isFaculty} /></Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}><FormLabel column htmlFor="wd-due-date">Due</FormLabel></Col>
          <Col sm={10}>
            <FormControl type="date" id="wd-due-date" value={edited.dueDate || ""}
              readOnly={!isFaculty}
              onChange={(e) => setEdited({ ...edited, dueDate: e.target.value })} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}><FormLabel column htmlFor="wd-available-from">Available From</FormLabel></Col>
          <Col sm={10}>
            <FormControl type="date" id="wd-available-from" value={edited.availableFrom || ""}
              readOnly={!isFaculty}
              onChange={(e) => setEdited({ ...edited, availableFrom: e.target.value })} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}><FormLabel column htmlFor="wd-until">Until</FormLabel></Col>
          <Col sm={10}>
            <FormControl type="date" id="wd-until" value={edited.availableUntil || ""}
              readOnly={!isFaculty}
              onChange={(e) => setEdited({ ...edited, availableUntil: e.target.value })} />
          </Col>
        </Row>

        <div className="mt-3">
          <Link href={assignToLink}>
            <Button variant="secondary" className="me-2">Cancel</Button>
          </Link>
          {isFaculty && (
            <Button variant="danger" onClick={handleSave}>Save</Button>
          )}
        </div>
      </Form>
    </div>
  );
}
