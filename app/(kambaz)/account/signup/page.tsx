"use client";

import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    verify: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });
  const [error, setError] = useState("");

  const createUser = async () => {
    if (!user.username || !user.password) {
      setError("Username and password are required");
      return;
    }
    if (user.password !== user.verify) {
      setError("Passwords do not match");
      return;
    }
    try {
      const currentUser = await client.signup({
        username: user.username,
        password: user.password,
        firstName: user.firstName || "New",
        lastName: user.lastName || "User",
        email: user.email || `${user.username}@example.com`,
        dob: user.dob || "2000-01-01",
        role: "STUDENT",
        section: "S101",
      });
      dispatch(setCurrentUser(currentUser));
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Error signing up");
    }
  };

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl placeholder="username" className="wd-username mb-2"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <FormControl placeholder="password" type="password" className="wd-password mb-2"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <FormControl placeholder="verify password" type="password" className="wd-password-verify mb-2"
        value={user.verify}
        onChange={(e) => setUser({ ...user, verify: e.target.value })} />
      <FormControl placeholder="first name" className="mb-2"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
      <FormControl placeholder="last name" className="mb-2"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
      <FormControl placeholder="email" type="email" className="mb-2"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <FormControl type="date" className="mb-2"
        value={user.dob}
        onChange={(e) => setUser({ ...user, dob: e.target.value })} />
      <Button onClick={createUser} className="btn btn-primary w-100 mb-2">
        Sign up
      </Button>
      {error && <div className="text-danger mb-2">{error}</div>}
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}
