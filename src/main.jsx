import React from "react";
import ReactDOM from "react-dom/client";
import { SingUp } from "./pages/SignUp/index.jsx";
import "./styles.scss";
import "./local/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { Unexpected } from "./pages/unexpected/unexpceted.jsx";
import App from "./App.jsx";
import { Activation } from "./pages/activation/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "*",
        Component: Home,
        errorElement: <Unexpected />,
      },
      {
        path: "/signup",
        Component: SingUp,
        errorElement: <Unexpected />,
      },
      {
        path: "/activation/:token",
        Component: Activation,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  // strictMode is a structure that allows to render useEffect twice and works in development mode.Producta usage is not very preferred
  //  <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
