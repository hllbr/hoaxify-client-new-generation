import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useRouteParamRequest = (param, httpFunction) => {
  const params = useParams();
  const pathParam = params[param];

  const [apiProgress, setApiProgress] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const sendRequest = async () => {
      setApiProgress(true);
      try {
        const response = await httpFunction(pathParam);
        setData(response.data);
      } catch (axiosError) {
        setError(axiosError.response.data.message);
      } finally {
        setApiProgress(false);
      }
    };
    sendRequest();
  }, [pathParam]);

  return { apiProgress, data, error };
};
