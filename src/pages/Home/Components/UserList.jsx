import { useEffect, useState } from "react";
import { loadUsers } from "./api";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await loadUsers();
      setUsers(response?.data);
    };
    getUsers();
  }, []);
  return (
    <>
      <div>User List</div>
      {users.map((user) => {
        return <div>{user.username}</div>;
      })}
    </>
  );
};
