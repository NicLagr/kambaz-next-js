"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import * as client from "../../../client";
import PeopleTable from "../PeopleTable";
import PeopleDetails from "../PeopleDetails";

export default function PeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const fetchUsers = async () => {
    const data = await client.findUsersForCourse(cid as string);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  const handleDelete = (userId: string) => {
    setUsers(users.filter((u) => u._id !== userId));
    setSelectedUser(null);
  };

  const handleUpdate = (updated: any) => {
    setUsers(users.map((u) => (u._id === updated._id ? updated : u)));
    setSelectedUser(updated);
  };

  return (
    <div>
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
