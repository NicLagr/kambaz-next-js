"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { RootState } from "../store";
import { setCourses } from "../courses/reducer";
import * as client from "../courses/client";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [enrolledIds, setEnrolledIds] = useState<Set<string>>(new Set());

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const isFaculty = currentUser?.role === "FACULTY";

  const fetchCourses = async () => {
    try {
      const myCourses = await client.findMyCourses();
      const safeCourses = (myCourses ?? []).filter(Boolean);
      dispatch(setCourses(safeCourses));
      setEnrolledIds(new Set(safeCourses.map((c: any) => c._id)));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAllCourses = async () => {
    try {
      const all = await client.fetchAllCourses();
      setAllCourses((all ?? []).filter(Boolean));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
    fetchAllCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
    setAllCourses([...allCourses, newCourse]);
    setEnrolledIds(new Set([...enrolledIds, newCourse._id]));
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
    setAllCourses(allCourses.filter((c: any) => c._id !== courseId));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) => (c._id === course._id ? course : c))));
    setAllCourses(allCourses.map((c: any) => (c._id === course._id ? course : c)));
  };
  const onEnroll = async (courseId: string) => {
    await client.enrollInCourse(courseId);
    setEnrolledIds(new Set([...enrolledIds, courseId]));
    fetchCourses();
  };
  const onUnenroll = async (courseId: string) => {
    await client.unenrollFromCourse(courseId);
    const next = new Set(enrolledIds);
    next.delete(courseId);
    setEnrolledIds(next);
    fetchCourses();
  };

  const visibleCourses = showAllCourses ? allCourses : courses;

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty && (
        <>
          <h5>
            New Course
            <Button className="btn btn-primary float-end" id="wd-add-new-course-click"
              onClick={onAddNewCourse}>Add</Button>
            <Button className="btn btn-warning float-end me-2" id="wd-update-course-click"
              onClick={onUpdateCourse}>Update</Button>
          </h5>
          <FormControl value={course.name} className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description} as="textarea" rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}
      {!isFaculty && currentUser && (
        <Button className="btn btn-primary float-end mb-2"
          onClick={() => { setShowAllCourses(!showAllCourses); }}>
          Enrollments
        </Button>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.filter(Boolean).map((c: any) => (
            <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/courses/${c._id}/home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg variant="top" src={c.image || "/images/reactjs.jpg"}
                    width="100%" height={160} alt={c.name} />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}>
                      {c.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    {isFaculty && (
                      <>
                        <Button id="wd-edit-course-click"
                          onClick={(event) => { event.preventDefault(); setCourse(c); }}
                          className="btn btn-warning me-2 float-end">Edit</Button>
                        <Button
                          onClick={(event) => { event.preventDefault(); onDeleteCourse(c._id); }}
                          className="btn btn-danger float-end" id="wd-delete-course-click">
                          Delete
                        </Button>
                      </>
                    )}
                    {!isFaculty && currentUser && showAllCourses && (
                      enrolledIds.has(c._id) ? (
                        <Button className="btn btn-danger float-end"
                          onClick={(event) => { event.preventDefault(); onUnenroll(c._id); }}>
                          Unenroll
                        </Button>
                      ) : (
                        <Button className="btn btn-success float-end"
                          onClick={(event) => { event.preventDefault(); onEnroll(c._id); }}>
                          Enroll
                        </Button>
                      )
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
