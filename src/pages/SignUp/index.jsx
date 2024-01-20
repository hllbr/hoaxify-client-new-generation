import { useEffect, useMemo, useState } from "react";
import { signUp } from "./api";
import { Input } from "./components/Input";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./../../shared/components/LanguageSelector";
export const SingUp = () => {
  //#region States
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();
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
            <h1>{t("Sign Up")}</h1>
          </div>
          <div className="card-body">
            <Input
              id="username"
              label={t("Username")}
              error={errors.username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <Input
              id="email"
              label={t("E-mail")}
              error={errors.email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <Input
              id="password"
              label={t("Password")}
              error={errors.password}
              type={"password"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Input
              id="passwordRepeat"
              label={t("Password Repeat")}
              error={passwordRepeatError}
              type={"password"}
              onChange={(event) => {
                setPasswordRepeat(event.target.value);
              }}
            />
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            {generalError && (
              <div className="alert alert-danger">{generalError}</div>
            )}
            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={
                  apiProgress || !password || password != passwordRepeat
                }
              >
                {apiProgress && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}{" "}
                {t("Sign Up")}
              </button>
            </div>
          </div>
        </form>
        <LanguageSelector />
      </div>
    </div>
  );
};
