import App from "@/App";
import { Home } from "@/pages/Home";
import { SingUp } from "@/pages/SignUp";
import { Activation } from "@/pages/activation";
import { Unexpected } from "@/pages/unexpected/unexpceted";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "*",
        Component: Home,
        errorElement: Unexpected,
      },
      {
        path: "/signup",
        Component: SingUp,
        errorElement: Unexpected,
      },
      {
        path: "/activation/:token",
        Component: Activation,
        errorElement: Unexpected,
      },
    ],
  },
]);

export default router;
