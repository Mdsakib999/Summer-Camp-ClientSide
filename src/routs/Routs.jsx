import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Error from "../components/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PopularClass from "../components/PopularClass";
import PopurarInstructors from "../components/PopurarInstructors";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "./PrivateRoute";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: "/classes",
            element: <PopularClass></PopularClass>
        },
        {
            path: "/instructors",
            element: <PopurarInstructors></PopurarInstructors>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        }
      ]
    },
  ]);