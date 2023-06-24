import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/Main/MainLayout/MainLayout";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
