"use client";

import Link from "next/link";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus, FaMagnifyingGlass } from "react-icons/fa6";

export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-end mb-3">
        <Button variant="danger" size="lg" className="me-2" id="wd-add-assignment">
          <FaPlus className="me-2" /> Assignment
        </Button>
        <Button variant="secondary" size="lg" id="wd-add-assignment-group">
          <FaPlus className="me-2" /> Group
        </Button>
      </div>
      <div className="mb-3">
        <div className="position-relative">
          <FaMagnifyingGlass className="position-absolute top-50 start-0 translate-middle-y ms-3" />
          <FormControl
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="ps-5"
          />
        </div>
      </div>
      <h3 id="wd-assignments-title" className="mt-4">
        ASSIGNMENTS 40% of Total <Button variant="secondary" size="sm" className="float-end">+</Button>
      </h3>
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/assignments/123`}
                className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">A1 - ENV + HTML</div>
            <div className="text-muted">Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</div>
          </Link>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/assignments/124`}
                className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">A2 - CSS + BOOTSTRAP</div>
            <div className="text-muted">Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</div>
          </Link>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/assignments/125`}
                className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">A3 - JAVASCRIPT + REACT</div>
            <div className="text-muted">Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</div>
          </Link>
        </ListGroupItem>
      </ListGroup>
      <h3 id="wd-quizzes-title" className="mt-4">
        QUIZZES 10% of Total <Button variant="secondary" size="sm" className="float-end">+</Button>
      </h3>
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/quizzes/q1`}
                className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">Q1 - HTML</div>
            <div className="text-muted">Quiz | Due May 15 at 11:59pm | 50 pts</div>
          </Link>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/quizzes/q2`}
                className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">Q2 - CSS</div>
            <div className="text-muted">Quiz | Due May 22 at 11:59pm | 50 pts</div>
          </Link>
        </ListGroupItem>
      </ListGroup>
      <h3 id="wd-exams-title" className="mt-4">
        EXAMS 20% of Total <Button variant="secondary" size="sm" className="float-end">+</Button>
      </h3>
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/exams/midterm`}
                className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">Midterm</div>
            <div className="text-muted">Exam | Due June 1 at 11:59pm | 200 pts</div>
          </Link>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/exams/final`}
                className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">Final</div>
            <div className="text-muted">Exam | Due June 15 at 11:59pm | 200 pts</div>
          </Link>
        </ListGroupItem>
      </ListGroup>
      <h3 id="wd-project-title" className="mt-4">
        PROJECT 30% of Total <Button variant="secondary" size="sm" className="float-end">+</Button>
      </h3>
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/projects/p1`}
                className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">Project - Kambaz</div>
            <div className="text-muted">Project | Due June 10 at 11:59pm | 300 pts</div>
          </Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

