import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import "./local/index.js";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // strictMode is a structure that allows to render useEffect twice and works in development mode.Producta usage is not very preferred
  //  <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
