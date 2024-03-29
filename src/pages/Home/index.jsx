import { useTranslation } from "react-i18next";
import { UserList } from "./Components/UserList";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("home.title")}</h1>
      <h2>{t("home.welcome")}</h2>
      <UserList />
    </>
  );
};
