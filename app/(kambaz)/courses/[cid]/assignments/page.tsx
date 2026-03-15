"use client";

import Link from "next/link";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaPlus, FaMagnifyingGlass } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { deleteAssignment } from "../../assignments/reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  const isFaculty = currentUser?.role === "FACULTY";
  const assignList = assignments.filter((a: any) => a.course === cid);

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-end mb-3">
        {isFaculty && (
          <>
            <Link href={`/courses/${cid}/assignments/new`} className="btn btn-danger btn-lg me-2" id="wd-add-assignment">
              <FaPlus className="me-2" /> Assignment
            </Link>
            <Button variant="secondary" size="lg" id="wd-add-assignment-group">
              <FaPlus className="me-2" /> Group
            </Button>
          </>
        )}
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
            key={a._id as string}
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
            {isFaculty && (
              <Button
                className="btn btn-danger btn-sm float-end"
                onClick={(e) => {
                  e.preventDefault();
                  const confirmed = window.confirm("Are you sure you want to delete this assignment?");
                  if (confirmed) dispatch(deleteAssignment(a._id));
                }}
              >
                Delete
              </Button>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
