import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorAni from "../assets/98488-bot-error-404.json";
import Lottie from "lottie-react";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div className="w-[50%] mx-auto mt-6">
        <Link to="/"><button
            className="px-4 py-2 border rounded-md
            lg:ml-32
            lg:w-[50%]
          text-white font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          >
            Back to Home
          </button></Link>
      <div className="w-[90%]">
        <Lottie animationData={errorAni} loop={true}></Lottie>
      </div>
      
      <h1 className="text-4xl text-center font-bold">{status}</h1>
    </div>
  );
};

export default Error;
