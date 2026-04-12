"use client";

import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { FaUserCircle, FaPencilAlt, FaCheck } from "react-icons/fa";
import * as accountClient from "../../../account/client";

export default function PeopleDetails({
  user,
  onClose,
  onDelete,
  onUpdate,
}: {
  user: any;
  onClose: () => void;
  onDelete: (userId: string) => void;
  onUpdate: (user: any) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const saveUser = async () => {
    const updatedUser = { ...user, firstName, lastName };
    await accountClient.updateUser(updatedUser);
    onUpdate(updatedUser);
    setEditing(false);
  };

  const handleDelete = async () => {
    await accountClient.deleteUser(user._id);
    onDelete(user._id);
  };

  return (
    <div className="position-fixed end-0 top-0 bottom-0 bg-white p-4 shadow"
      style={{ width: "320px", zIndex: 1050 }}>
      <Button variant="close" onClick={onClose} className="float-end" />
      <div className="text-center mt-4 mb-3">
        <FaUserCircle className="text-secondary" size={60} />
      </div>
      <hr />
      {!editing ? (
        <div className="text-center">
          <h4>
            {firstName} {lastName}
            <FaPencilAlt className="ms-2 fs-6 text-muted"
              style={{ cursor: "pointer" }} onClick={() => setEditing(true)} />
          </h4>
        </div>
      ) : (
        <div>
          <FormControl className="mb-2" value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name" />
          <FormControl className="mb-2" value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name" />
          <Button variant="success" size="sm" onClick={saveUser}>
            <FaCheck className="me-1" /> Save
          </Button>
        </div>
      )}
      <div className="mt-2 text-center">
        <b>Role:</b> {user.role}
      </div>
      <div className="text-center">
        <b>Login ID:</b> {user.loginId}
      </div>
      <div className="text-center">
        <b>Section:</b> {user.section}
      </div>
      <div className="text-center">
        <b>Email:</b> {user.email}
      </div>
      <hr />
      <div className="d-flex gap-2">
        <Button variant="danger" className="flex-fill" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="secondary" className="flex-fill" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
