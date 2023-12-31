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
import StudentSelectedClass from "../Pages/Dashboard/StudentSelectedClass";
import InstructorIndividualClass from "../components/InstructorIndividualClass";
import Payment from "../Pages/Dashboard/Payment";

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
        path: "/mySelectedClass/:email",
        element: <PrivateRoute><InstructorIndividualClass></InstructorIndividualClass></PrivateRoute>,
        loader:({params}) => fetch(`https://summer-camp-server-coral.vercel.app/teacherClass/${params.email}`)
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
        element: <StudentSelectedClass></StudentSelectedClass>,
      },
      {
        path: "studentEnrolledClass",
        element: <StudentEnrolledClass></StudentEnrolledClass>,
      },
      {
        path: "payment/:price",
        element: <Payment></Payment>,
      },
      {
        path: "allClass",
        element: <AdminRout><AllClasses></AllClasses></AdminRout>,
      },
      {
        path: "allUsers",
        element: <AdminRout><AllUsers></AllUsers></AdminRout>,
        // element: <AdminRout><AllUsers></AllUsers></AdminRout>,
      }
    ],
  },
]);
