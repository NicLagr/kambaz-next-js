"use client";

import { ReactNode, useEffect, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const router = useRouter();
  const [showNavigation, setShowNavigation] = useState(true);
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const course = courses.find((c: any) => c._id === cid);

  useEffect(() => {
    if (!currentUser) {
      router.replace("/account/signin");
    }
  }, [cid, currentUser, router]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={() => setShowNavigation(!showNavigation)}
          style={{ cursor: "pointer" }}
        />
        {course?.name ?? `Course ${cid}`}
      </h2>
      <Breadcrumb course={course} />
      <hr />
      <div className="d-flex">
        {showNavigation && <div className="d-none d-md-block"><CourseNavigation /></div>}
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}
