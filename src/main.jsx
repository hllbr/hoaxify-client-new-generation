import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SingUp } from "./pages/SignUp/index.jsx";
import "./styles.scss";
import "./local/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
