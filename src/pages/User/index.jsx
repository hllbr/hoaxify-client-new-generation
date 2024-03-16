import { getUser } from "./api";
import Spinner from "@/shared/components/Spinner";
import { Alert } from "@/shared/components/Alert";
import { useRouteParamRequest } from "@/shared/hooks/useRouteParamRequest";
import { ProfileCard } from "./components/ProfileCard";

export const User = () => {
  const {
    apiProgress,
    data: user,
    error,
  } = useRouteParamRequest("id", getUser);

  return (
    <>
      {apiProgress && <Spinner styleType={"secondary"} />}
      {user && <ProfileCard user={user}/>}
      {error && <Alert message={error} styleType="danger" />}
    </>
  );
};
