"use client";

import { usePathname } from "next/navigation";

type Course = { name: string } | undefined;

export default function Breadcrumb({ course }: { course: Course }) {
  const pathname = usePathname();
  const section = pathname.split("/").pop() || "";

  return (
    <span className="text-muted">
      {course?.name} &gt; {section}
    </span>
  );
}
