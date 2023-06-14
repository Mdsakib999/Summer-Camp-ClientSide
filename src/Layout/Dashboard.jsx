import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../shared/Header";
import {
  FaAddressBook,
  FaAddressCard,
  FaClock,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { AuthContext } from "../AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (user?.email) {
      fetch(`https://summer-camp-server-coral.vercel.app/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentUser(data);
        });
    }
  }, [user?.email]);

  return (
    <div>
      <Header></Header>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-10 flex-col items-center ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu px-4 pt-10 w-80 h-full bg-slate-100 text-base-content mt-5 text-xl">
            {/* Sidebar content here */}

            {currentUser.role == "admin" ? (
              <>
                <li>
              <Link to="/dashboard/allUsers">
                {" "}
                <FaUsers /> All Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allClass">
                {" "}
                <FaHome /> All classes
              </Link>
            </li>
              </>
            ) : (
              <></>
            )}

            {currentUser.role === "Instructor" ? (
              <>
                <li>
                  <Link to='/dashboard/singleInsClass'>
                    <FaAddressCard /> My Classes
                  </Link>
                </li>
                <li>
                  <Link to='/dashboard/addClasses'>
                    
                    <FaAddressBook /> Add Classes
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}

            {
              currentUser.role == "student" ? <> <li>
              <Link to='/dashboard/studentSelectedClass'>
                
                <i className="fa-solid fa-circle-check"></i>
                My selected class
              </Link>
            </li>
            <li>
                  <Link to="/dashboard/studentEnrolledClass">
                   
                    <i className="fa-solid fa-pen-to-square"></i>
                    My enrolled class details
                  </Link>
                </li>

            <li>
              {/* <Link>
                <i className="fa-solid fa-money-check-dollar"></i> Payment Student
              </Link> */}
            </li></> : <></>
            }

            {/* extra for check */}
            <hr /> <hr /><hr /><hr />
           

                
            {/* --------^^ */}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
