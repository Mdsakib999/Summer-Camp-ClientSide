import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Error from "../components/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PopularClass from "../components/PopularClass";
import PopurarInstructors from "../components/PopurarInstructors";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass";
import WonClasses from "../Pages/Dashboard/WonClasses";
import AdminRout from "./AdminRout";
import AllClasses from "../Pages/Dashboard/AllClasses";
import StudentEnrolledClass from "../Pages/Dashboard/StudentEnrolledClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <PopularClass></PopularClass>,
      },
      {
        path: "/instructors",
        element: <PopurarInstructors></PopurarInstructors>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // {
      //   path: "/dashboard",
      //   element: (
      //     <PrivateRoute>
      //       <Dashboard></Dashboard>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute> 
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "addClasses",
        element: <AddClass></AddClass>,
      },
      {
        path: "singleInsClass",
        element: <WonClasses></WonClasses>,
      },
      {
        path: "studentSelectedClass",
        element: <StudentEnrolledClass></StudentEnrolledClass>,
      },
      {
        path: "allClass",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>
        // element: <AdminRout><AllUsers></AllUsers></AdminRout>,
      }
    ],
  },
]);
