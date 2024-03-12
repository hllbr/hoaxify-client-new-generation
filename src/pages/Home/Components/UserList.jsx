import { useCallback, useEffect, useState } from "react";
import { loadUsers } from "./api";
import Spinner from "@/shared/components/Spinner";

export const UserList = () => {
  const [userPage, setUserPage] = useState({
    content: [{ username: "loading..." }],
    last: false,
    first: false,
    number: 0,
  });
  const [apiProgress, setApiProgress] = useState(false);

  const getUsers = useCallback(async (page) => {
    setApiProgress(true);
    try {
      const response = await loadUsers(page);
      setUserPage(response?.data);
    } catch {
    } finally {
      setApiProgress(false);
    }
  }, []);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="card">
      <div className="card-header text-center fs-4">User List</div>
      <ul className="list-group list-group-flush ">
        {userPage.content.map((user) => {
          return (
            <li className="list-group-item list-group-item-action">
              {user.username}
            </li>
          );
        })}
      </ul>
      <div className="card-footer">
        {apiProgress && <Spinner />}
        {!userPage.first && (
          <button
            disabled={apiProgress}
            className="btn btn-outline-info btn-sm flaot-start"
            onClick={() => getUsers(userPage.number - 1)}
          >
            Load Previous
          </button>
        )}
        {!userPage.last && (
          <button
            disabled={apiProgress}
            className="btn btn-outline-info btn-sm float-end"
            onClick={() => getUsers(userPage.number + 1)}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
