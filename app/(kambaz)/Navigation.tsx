"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();

  // nav links config - courses goes to dashboard since you pick course there
  const links = [
    { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/inbox", icon: FaInbox },
    { label: "Labs", path: "/labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.svg" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <ListGroupItem
        as={Link}
        href="/account"
        className={`text-center border-0 ${pathname.includes("account") ? "bg-white text-danger" : "bg-black text-white"}`}
      >
        <FaRegCircleUser
          className={`fs-1 ${pathname.includes("account") ? "text-danger" : "text-white"}`}
        />
        <br />
        Account
      </ListGroupItem>
      {links.map((link) => (
        <ListGroupItem
          key={link.path + link.label}
          as={Link}
          href={link.path}
          className={`bg-black text-center border-0 ${
            pathname.includes(link.label.toLowerCase()) ? "text-danger bg-white" : "text-white bg-black"
          }`}
        >
          <link.icon className={`fs-1 ${pathname.includes(link.label.toLowerCase()) ? "text-danger" : "text-danger"}`} />
          <br />
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
