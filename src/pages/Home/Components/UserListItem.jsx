import { useState } from "react";
import defaultProfileImage from "@/assets/profile.png";
export const UserListItem = ({ user }) => {
  //   const [selectedUser, setSelectedUser] = useState(false);
  return (
    <li
      className="list-group-item list-group-item-action"
      // className={`list-group-item list-group-item-action ${selectedUser ? "active" : ""}`}
      // onClick={() => setSelectedUser(!selectedUser)}
    >
      <img
        src={defaultProfileImage}
        width={30}
        className="img-fluid rounded-circle shadow-sm me-2"
      />
      <span className="ms-2">{user.username}</span>
    </li>
  );
};
