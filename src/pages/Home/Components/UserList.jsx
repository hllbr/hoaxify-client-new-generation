import { useCallback, useEffect, useState } from "react";
import { loadUsers } from "./api";
import Spinner from "@/shared/components/Spinner";
import { UserListItem } from "./UserListItem";
import { Button } from "@/shared/components/Button";
import { useTranslation } from "react-i18next";

export const UserList = () => {
  const [userPage, setUserPage] = useState({
    content: [],
    last: false,
    first: false,
    number: 0,
  });
  const [apiProgress, setApiProgress] = useState(false);
  const { t } = useTranslation();
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
          return <UserListItem key={user.id} user={user} />;
        })}
      </ul>
      <div className="card-footer">
        {apiProgress && <Spinner />}
        {!userPage.first && (
          <Button
            disabled={apiProgress}
            className="btn btn-outline-info btn-sm flaot-start"
            onClick={() => getUsers(userPage.number - 1)}
            text={t("UserList.Previous")}
          >
          </Button>
        )}
        {!userPage.last && (
          <Button
            disabled={apiProgress}
            className="btn btn-outline-info btn-sm float-end"
            onClick={() => getUsers(userPage.number + 1)}
            text={t("UserList.Next")}
          >
          </Button>
        )}
      </div>
    </div>
  );
};
