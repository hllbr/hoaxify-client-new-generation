import { activateUser } from "./api";
import { Alert } from "@/shared/components/Alert";
import Spinner from "@/shared/components/Spinner";
import { useRouteParamRequest } from "@/shared/hooks/useRouteParamRequest";

export const Activation = () => {
  const { apiProgress, data, error } = useRouteParamRequest(
    "token",
    activateUser
  );

  return (
    <>
      {apiProgress && <Spinner styleType={"secondary"} />}
      {data?.message && <Alert message={data.message} styleType="success" />}
      {error && <Alert message={error} styleType="danger" />}
    </>
  );
};
