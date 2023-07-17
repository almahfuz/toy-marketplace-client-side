import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/Main/MainLayout/MainLayout";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import AllToy from "../AllToyEx/AllToy";
import MyToy from "../MyToy/MyToy";
import AddToy from "../AddToy/AddToy";
import Login from "../../Layout/Login/Login";
import Signup from "../../Layout/Signup/Signup";
import SingleToy from "../SingleToy/SingleToy";
import UpdateToy from "../UpdateToy/UpdateToy";
import ErrorPage from "../../Layout/Error/ErrorPage";
import AllOfToy from "../../Layout/AllOfToy/AllOfToy";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement:<ErrorPage></ErrorPage>,
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
        path: "/allOfToy",
        element: <AllOfToy/>,
      },
      {
        path: "/mytoy",
        element: <PrivateRoute> <MyToy/></PrivateRoute>,
      },
      {
        path: "/singleToyDetails/:id",
        element: <PrivateRoute><SingleToy/></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-market-sever-omega.vercel.app/singleToyDetails/${params.id}`)

      },
      {
        path: "/AddedNewToy",
        element: <PrivateRoute><AddToy /></PrivateRoute>,
      },
      {
        path: "/toyData/:id",
        element: <PrivateRoute><UpdateToy /></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-market-sever-omega.vercel.app/toyData/${params.id}`)
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
