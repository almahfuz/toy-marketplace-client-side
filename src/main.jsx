import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./pages/Provider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./pages/Provider/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
