import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/Main/MainLayout/MainLayout";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import AllToy from "../AllToy/AllToy";
import MyToy from "../MyToy/MyToy";
import AddToy from "../AddToy/AddToy";
import Login from "../../Layout/Login/Login";
import Signup from "../../Layout/Signup/Signup";
import SingleToy from "../SingleToy/SingleToy";
import UpdateToy from "../UpdateToy/UpdateToy";
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/alltoy",
        element: <AllToy/>,
      },
      {
        path: "/mytoy",
        element: <MyToy/>,
      },
      {
        path: "/singleToyDetails/:id",
        element: <SingleToy/>,
        loader: ({params}) => fetch(`http://localhost:5000/singleToyDetails/${params.id}`)

      },
      {
        path: "/AddedNewToy",
        element: <AddToy />,
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy />,
        loader: ({params}) => fetch(`http://localhost:5000/updateToy/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
