"use client";

import { useState, useEffect } from "react";
import { Button, FormControl, FormSelect } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "../../store";
import * as accountClient from "../client";
import PeopleTable from "../../courses/[cid]/people/PeopleTable";
import PeopleDetails from "../../courses/[cid]/people/PeopleDetails";

export default function UsersPage() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const fetchUsers = async () => {
    if (role) {
      const data = await accountClient.findUsersByRole(role);
      setUsers(data);
    } else if (name) {
      const data = await accountClient.findUsersByPartialName(name);
      setUsers(data);
    } else {
      const data = await accountClient.findAllUsers();
      setUsers(data);
    }
  };

  useEffect(() => {
    if (currentUser?.role !== "ADMIN") {
      router.replace("/account/profile");
      return;
    }
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  useEffect(() => {
    if (currentUser?.role === "ADMIN") fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, name]);

  const handleCreateUser = async () => {
    const newUser = await accountClient.createUser({
      username: `newuser${Date.now()}`,
      password: "123",
      firstName: "New",
      lastName: "User",
      role: "STUDENT",
      email: "",
      section: "",
      loginId: "",
    });
    setUsers([...users, newUser]);
  };

  const handleDelete = (userId: string) => {
    setUsers(users.filter((u) => u._id !== userId));
    setSelectedUser(null);
  };

  const handleUpdate = (updated: any) => {
    setUsers(users.map((u) => (u._id === updated._id ? updated : u)));
    setSelectedUser(updated);
  };

  if (currentUser?.role !== "ADMIN") return null;

  return (
    <div>
      <h3>
        Users
        <Button className="float-end" variant="danger" onClick={handleCreateUser}>
          <FaPlus className="me-1" /> People
        </Button>
      </h3>
      <div className="d-flex gap-2 mb-3">
        <FormControl placeholder="Search by name..." value={name}
          onChange={(e) => { setName(e.target.value); setRole(""); }} />
        <FormSelect value={role} onChange={(e) => { setRole(e.target.value); setName(""); }}
          style={{ width: "200px" }}>
          <option value="">All Roles</option>
          <option value="STUDENT">Student</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Admin</option>
          <option value="TA">TA</option>
          <option value="USER">User</option>
        </FormSelect>
      </div>
      <PeopleTable users={users} onSelectUser={setSelectedUser} />
      {selectedUser && (
        <PeopleDetails
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
