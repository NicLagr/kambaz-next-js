"use client";

import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid username or password");
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl
        value={credentials.username || ""}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        id="wd-username"
        placeholder="username"
        className="mb-2"
      />
      <FormControl
        value={credentials.password || ""}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <Button onClick={signin} id="wd-signin-btn" className="w-100 mb-2">Sign in</Button>
      {error && <div className="text-danger mb-2">{error}</div>}
      <Link id="wd-signup-link" href="/account/signup">Sign up</Link>
    </div>
  );
}
