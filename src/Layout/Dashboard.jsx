import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../shared/Header";
import {
  FaClock,
  FaHome,
  FaShoppingCart,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { AuthContext } from "../AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users/${user?.email}`)
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
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {currentUser.role == "admin" ? (
              <>
                <li>
              <Link to="/dashboard/allUsers">
                {" "}
                <FaUser /> All Users amdin
              </Link>
            </li>
            <li>
              <Link to="/dashboard/mycart">
                {" "}
                <FaHome /> All classes admin
              </Link>
            </li>
              </>
            ) : (
              <></>
            )}

            {currentUser.role == "Instructor" ? (
              <>
                <li>
                  <Link to='/dashboard/singleInsClass'>
                    <FaClock /> My Classes ins
                  </Link>
                </li>
                <li>
                  <Link to='/dashboard/addClasses'>
                    
                    <FaClock /> Add Classes ins
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}

            {
              currentUser.role == "student" ? <> <li>
              <Link>
                {" "}
                <FaClock />
                My selected class stu{" "}
              </Link>
            </li>
            <li>
                  <Link>
                    
                    <FaClock />
                    My enrolled class stu
                  </Link>
                </li>

            <li>
              <Link>
                {" "}
                <FaWallet /> Payment Student
              </Link>
            </li></> : <></>
            }

            {/* extra for check */}
            <hr /> <hr /><hr /><hr />
            <li>
                  <Link to='/dashboard/addClasses'>
                    
                    <FaClock /> Add Classes ins
                  </Link>
                </li>

                <li>
              <Link to="/dashboard/allUsers">
                {" "}
                <FaUser /> All Users amdin
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
