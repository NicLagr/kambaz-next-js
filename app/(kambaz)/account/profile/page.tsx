"use client";

import Link from "next/link";
import { FormControl, FormSelect, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl defaultValue="alice" placeholder="username" className="wd-username mb-2" />
      <br />
      <FormControl defaultValue="123" placeholder="password" type="password"
             className="wd-password mb-2" />
      <br />
      <FormControl defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="mb-2" />
      <br />
      <FormControl defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="mb-2" />
      <br />
      <FormControl defaultValue="2000-01-01" type="date" id="wd-dob" className="mb-2" />
      <br />
      <FormControl defaultValue="alice@wonderland" type="email" id="wd-email" className="mb-2" />
      <br />
      <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>
      <br />
      <Link href="/account/signin" className="btn btn-primary w-100 mb-2">
        Sign out
      </Link>
    </div>
  );
}

