import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import "./local/index.js";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
