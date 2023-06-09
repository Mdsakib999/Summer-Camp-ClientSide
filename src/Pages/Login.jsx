import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
        setError(error.message);
      });
  };


  const handelGoogleSignIn = ()=>{
    googleSignIn()
    .then((result) => {
      const loggedUser = result.user;
      
      console.log(loggedUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.log(error.message);
      setError(error.message);
    });
  }

  return (
    <div className="lg:w-[40%] mx-auto">
      <h1 className="text-4xl font-semibold my-12 text-center">Login Page</h1>
      <form
        className="bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="Your Email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs italic">
              Email is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-xs italic">
              Password is required
            </span>
          )}
        </div>
        <p className="text-red-600 text-center font-bold">{error}</p>
        <div className="flex items-center justify-between">
          <button
            className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
        <p className="mt-4">
          New to Summer Camp?
          <Link
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold ml-2"
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>

      <div className="text-center">
      <button
      onClick={handelGoogleSignIn}
        className="shadow-xl bg-slate-100 rounded-lg ml-6 py-2 px-5 font-bold mb-12"
      >
        <img className="inline mr-2 w-[25px]" src="https://i.ibb.co/TBGwKQw/search.png" alt="fff" /> Login with Google
      </button>
      </div>
    </div>
  );
};

export default Login;
