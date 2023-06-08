import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);

    const onSubmit = (data) => {
      console.log(data);
      createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
    };

    return (
        <div className="lg:w-[40%] mx-auto">
        <h1 className="text-4xl font-semibold my-12 text-center">Register Page</h1>
      <form
        className="bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            placeholder="Your Name"
            {...register("username", { required: true })}
          />
          {errors.username && <span className="text-red-500 text-xs italic">Name is required</span>}
          
        </div>

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
          {errors.email && <span className="text-red-500 text-xs italic">Email is required</span>}
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
            placeholder="Enter Your Password"
            id="password"
            {...register("password", { 
                required: true, 
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])(?=.*[0-9])/
             })}
          />
          {errors.password?.type === "required" && <span className="text-red-500 text-xs italic">Password is required</span>}
          {errors.password?.type === "minLength" && <span className="text-red-500 text-xs italic">Password should be 6 character or more</span>}
          {errors.password?.type === "pattern" && <span className="text-red-500 text-xs italic">Should have one upper case, one lower case, one special character and one number</span>}
        </div>

        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ConfirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="ConfirmPassword"
            id="ConfirmPassword"
            {...register("ConfirmPassword", { required: true })}
          />
          {errors.ConfirmPassword !== errors.password && <span className="text-red-500 text-xs italic">Password doesn't match</span>}
        </div> */}

        <div className="mb-4">
        <label className="text-lg font-medium ">Photo Url:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("image", { required: true })}
            placeholder="Enter toys image link"
            type="url"
            // defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          {errors.image && <span className="text-red-500 text-xs italic"> is required</span>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="number"
          >
            Contact Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="number"
            placeholder="Enter your Phone Number"
            id="number"
          />
          
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="text"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="text"
            placeholder="Enter your Address"
          />
        </div>

        <div className="mb-4">
        <label className="text-lg font-medium ">Gender:</label>
          <select
            className="text-input focus:outline-none focus:shadow-outline border p-2 rounded-lg m-5"
            {...register("gender", { required: true })}
          >
            <option value="male">Male</option>
            <option value="Female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <p className="mt-4">
          Already have an account?
           <Link className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold ml-2" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
    );
};

export default Register;