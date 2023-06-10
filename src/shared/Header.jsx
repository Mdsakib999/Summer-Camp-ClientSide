import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/dashboard ">Dashboard </Link>
              </li>

            </>
          )}
          </ul>
        </div>
        <div className="w-8 rounded-full mr-2 cursor-pointer">
          <img
            className="rounded-full"
            src="https://i.ibb.co/cCyNzx3/summer-camp-logo.png"
          />
        </div>

        <p className="font-bold text-2xl cursor-pointer">
          Sports
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
            Summer
          </span>
          Camp
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-lg font-bold menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          {/* <li>
            <Link to="/login">login</Link>
          </li> */}
          {user && (
            <>
              <li>
              <Link to="/dashboard/mycart ">Dashboard </Link>
              </li>

            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <Link>
            <div className="avatar">
              <div title={user?.displayName} className="w-12 mr-5 mt- rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            
          </Link>
        )}

        {user ? (
          <Link to="/">
            <button
              onClick={handelLogout}
              className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button
              className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
