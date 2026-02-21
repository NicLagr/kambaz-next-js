"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  return (
    <ul>
      <li>
        <Link
          href="/labs"
          id="wd-home-link"
          className={pathname.endsWith("labs") ? "active" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/labs/lab1"
          id="wd-lab1-link"
          className={pathname.endsWith("lab1") ? "active" : ""}
        >
          Lab 1
        </Link>
      </li>
      <li>
        <Link
          href="/labs/lab2"
          id="wd-lab2-link"
          className={pathname.endsWith("lab2") ? "active" : ""}
        >
          Lab 2
        </Link>
      </li>
      <li>
        <Link
          href="/labs/lab3"
          id="wd-lab3-link"
          className={pathname.endsWith("lab3") ? "active" : ""}
        >
          Lab 3
        </Link>
      </li>
      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      <li>
        <Link href="https://github.com/NicLagr/kambaz-next-js/tree/a3" id="wd-github">
          My GitHub
        </Link>
      </li>
    </ul>
  );
}
