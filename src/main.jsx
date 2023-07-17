import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./pages/Provider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./pages/Provider/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </HelmetProvider>
);
