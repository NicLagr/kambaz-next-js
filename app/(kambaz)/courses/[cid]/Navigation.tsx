"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
  "People",
];

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();

  const getPath = (label: string) => {
    if (label === "Home") return `/courses/${cid}/home`;
    if (label === "Modules") return `/courses/${cid}/modules`;
    if (label === "Piazza") return `/courses/${cid}/piazza`;
    if (label === "Zoom") return `/courses/${cid}/zoom`;
    if (label === "Assignments") return `/courses/${cid}/assignments`;
    if (label === "Quizzes") return `/courses/${cid}/quizzes`;
    if (label === "Grades") return `/courses/${cid}/grades`;
    if (label === "People") return `/courses/${cid}/people/table`;
    return "#";
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((label) => {
        const path = getPath(label);
        const active = pathname.startsWith(path);
        return (
          <Link
            key={label}
            href={path}
            className={`list-group-item border-0 ${active ? "active" : "text-danger"}`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
