import { useEffect, useMemo, useState } from "react";
import { signUp } from "./api";
import { Input } from "./components/Input";
import { useTranslation } from "react-i18next";
import { Alert } from "../../shared/components/Alert";
import Spinner from "../../shared/components/Spinner";
export const SingUp = () => {
  //#region States
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  //#endregion

  const { t } = useTranslation();

  useEffect(() => {
    setErrors((lastErrors) => {
      return { ...lastErrors, username: undefined };
    });
  }, [username]);

  useEffect(() => {
    setErrors((lastErrors) => {
      return { ...lastErrors, email: undefined };
    });
  }, [email]);
  useEffect(() => {
    setErrors((lastErrors) => {
      return { ...lastErrors, password: undefined };
    });
  }, [password]);
  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage();
    setGeneralError();
    setApiProgress(true);
    try {
      const response = await signUp({
        username,
        email,
        password,
      });
      setSuccessMessage(response?.data?.message);
    } catch (axiosError) {
      if (axiosError?.response?.data) {
        if (axiosError?.response?.data?.status === 400) {
          setErrors(axiosError?.response?.data?.validationErrors);
        } else {
          setGeneralError(axiosError?.response?.data?.message);
        }
      } else {
        setGeneralError(t("Unexpected error occured. Please try again"));
      }
    } finally {
      setApiProgress(false);
    }
  };

  const passwordRepeatError = useMemo(() => {
    if (password && password != passwordRepeat) {
      return t("Password mismatch");
    }
    return "";
  }, [password, passwordRepeat]);

  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>{t("signupPage.title")}</h1>
          </div>
          <div className="card-body">
            <Input
              id="username"
              label={t("signupPage.username")}
              error={errors.username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <Input
              id="email"
              label={t("signupPage.email")}
              error={errors.email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Input
              id="password"
              label={t("signupPage.password")}
              error={errors.password}
              type={"password"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Input
              id="passwordRepeat"
              label={t("signupPage.passwordRepeat")}
              error={passwordRepeatError}
              type={"password"}
              onChange={(event) => {
                setPasswordRepeat(event.target.value);
              }}
            />
            {successMessage && (
              <Alert message={successMessage} styleType="success" />
            )}
            {generalError && (
              <Alert message={generalError} styleType="danger" />
            )}
            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={
                  apiProgress || !password || password != passwordRepeat
                }
              >
                {apiProgress && <Spinner size={true} styleType={"secondary"} />}{" "}
                {t("signupPage.login")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
