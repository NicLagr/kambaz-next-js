"use client";

import { Form, FormLabel, FormControl, FormSelect, FormCheck, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        <FormControl id="wd-name" defaultValue="A1 - ENV + HTML" className="mb-3" />
        
        <FormLabel htmlFor="wd-description">Description</FormLabel>
        <FormControl as="textarea" id="wd-description" rows={10} className="mb-3">
          The assignment is available online Submit a link to the landing page of
          your Web application running on Vercel. The landing page should
          include the following: - Your full name - Links to all the lab
          assignments - Link to the Kambaz application - Links to all relevant
          source code repositories The landing page may include other optional
          content such as an introduction to you personally and professionally,
          your interests, etc.
        </FormControl>

        <Row className="mb-3">
          <Col sm={2}>
            <FormLabel column htmlFor="wd-points">Points</FormLabel>
          </Col>
          <Col sm={10}>
            <FormControl id="wd-points" type="number" defaultValue={100} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}>
            <FormLabel column htmlFor="wd-assignment-group">Assignment Group</FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect id="wd-assignment-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}>
            <FormLabel column htmlFor="wd-display-grade-as">Display Grade As</FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect id="wd-display-grade-as" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter">Letter</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}>
            <FormLabel column htmlFor="wd-submission-type">Submission Type</FormLabel>
          </Col>
          <Col sm={10}>
            <FormSelect id="wd-submission-type" defaultValue="Online">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </FormSelect>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}>
            <FormLabel column>Online Entry Options</FormLabel>
          </Col>
          <Col sm={10}>
            <FormCheck type="checkbox" id="wd-text-entry" defaultChecked label="Text Entry" />
            <FormCheck type="checkbox" id="wd-website-url" defaultChecked label="Website URL" />
            <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" />
            <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" />
            <FormCheck type="checkbox" id="wd-file-uploads" defaultChecked label="File Uploads" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}>
            <FormLabel column htmlFor="wd-assign-to">Assign To</FormLabel>
          </Col>
          <Col sm={10}>
            <FormControl id="wd-assign-to" defaultValue="Everyone" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}>
            <FormLabel column htmlFor="wd-due-date">Due</FormLabel>
          </Col>
          <Col sm={10}>
            <FormControl type="date" id="wd-due-date" defaultValue="2024-01-01" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}>
            <FormLabel column htmlFor="wd-available-from">Available From</FormLabel>
          </Col>
          <Col sm={10}>
            <FormControl type="date" id="wd-available-from" defaultValue="2024-01-01" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={2}>
            <FormLabel column htmlFor="wd-until">Until</FormLabel>
          </Col>
          <Col sm={10}>
            <FormControl type="date" id="wd-until" defaultValue="2024-12-31" />
          </Col>
        </Row>

        <div className="mt-3">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}

