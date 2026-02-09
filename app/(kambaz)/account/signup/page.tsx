"use client";

import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl placeholder="username" className="wd-username mb-2" />
      <br />
      <FormControl placeholder="password" type="password" className="wd-password mb-2" />
      <br />
      <FormControl placeholder="verify password"
             type="password" className="wd-password-verify mb-2" />
      <br />
      <Link href="/account/profile" className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>
      <br />
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}

