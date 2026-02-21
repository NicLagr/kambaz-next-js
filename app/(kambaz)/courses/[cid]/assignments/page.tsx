import Link from "next/link";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus, FaMagnifyingGlass } from "react-icons/fa6";
import * as db from "../../../database";

type Assignment = {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
};

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const allAssignments = (db.assignments as Assignment[]).filter((a) => a.course === cid);

  const assignList = allAssignments.filter((a) => a.title.startsWith("A") || a.title.startsWith("Problem"));

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
        {assignList.map((a) => (
          <ListGroupItem
            key={a._id}
            className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5"
          >
            <Link
              href={`/courses/${cid}/assignments/${a._id}`}
              className="wd-assignment-link text-decoration-none"
            >
              <div className="fw-bold">{a.title}</div>
              <div className="text-muted">
                Not available until {a.availableFrom} | Due {a.dueDate} | {a.points} pts
              </div>
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
      <h3 id="wd-quizzes-title" className="mt-4">
        QUIZZES 10% of Total <Button variant="secondary" size="sm" className="float-end">+</Button>
      </h3>
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/quizzes/q1`} className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">Q1 - HTML</div>
            <div className="text-muted">Quiz | Due May 15 at 11:59pm | 50 pts</div>
          </Link>
        </ListGroupItem>
      </ListGroup>
      <h3 id="wd-exams-title" className="mt-4">
        EXAMS 20% of Total <Button variant="secondary" size="sm" className="float-end">+</Button>
      </h3>
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/exams/midterm`} className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">Midterm</div>
            <div className="text-muted">Exam | Due June 1 at 11:59pm | 200 pts</div>
          </Link>
        </ListGroupItem>
      </ListGroup>
      <h3 id="wd-project-title" className="mt-4">
        PROJECT 30% of Total <Button variant="secondary" size="sm" className="float-end">+</Button>
      </h3>
      <ListGroup className="rounded-0">
        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 border-start border-success border-5">
          <Link href={`/courses/${cid}/projects/p1`} className="wd-assignment-link text-decoration-none">
            <div className="fw-bold">Project - Kambaz</div>
            <div className="text-muted">Project | Due June 10 at 11:59pm | 300 pts</div>
          </Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
