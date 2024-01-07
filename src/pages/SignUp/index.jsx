//HOOKS
import axios from "axios";
import { useState } from "react";
import { signUp } from "./api";

export const SingUp = () => {
  //#region State
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  //#endregion

  const onSubmit = async (event) => {
    event.preventDefault(); //The Browser declined reload operation
    setSuccessMessage();
    setApiProgress(true);
    try {
      const response = await signUp({
        username,
        email,
        password,
      });
      setSuccessMessage(response?.data?.message);
    } catch {
    } finally {
      setApiProgress(false);
    }
  };

  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>Sign Up</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label for="username" className="form-label">
                Username
              </label>
              <input
                className="form-control"
                id="username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                className="form-control"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                className="form-control"
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="passwordRepeat" className="form-label">
                Password Repeat
              </label>
              <input
                className="form-control"
                id="passwordRepeat"
                type="password"
                onChange={(event) => {
                  setPasswordRepeat(event.target.value);
                }}
              />
            </div>
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={
                  apiProgress || (!password || password != passwordRepeat)
                }
              >
                {apiProgress && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}{" "}
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
