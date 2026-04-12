"use client";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  return (
    <Nav variant="pills" className="flex-column">
      <NavItem>
        <NavLink as={Link} href="/labs" id="wd-home-link" active={pathname.endsWith("labs")}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/labs/lab1" id="wd-lab1-link" active={pathname.endsWith("lab1")}>
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/labs/lab2" id="wd-lab2-link" active={pathname.endsWith("lab2")}>
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/labs/lab3" id="wd-lab3-link" active={pathname.endsWith("lab3")}>
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/labs/lab4" id="wd-lab4-link" active={pathname.endsWith("lab4")}>
          Lab 4
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/labs/lab5" id="wd-lab5-link" active={pathname.endsWith("lab5")}>
          Lab 5
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={Link} href="/" id="wd-kambaz-link">
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/NicLagr/kambaz-next-js/tree/a6" id="wd-github">
          React GitHub
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/NicLagr/kambaz-node-server-app/tree/a6" id="wd-server-github">
          Server GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
