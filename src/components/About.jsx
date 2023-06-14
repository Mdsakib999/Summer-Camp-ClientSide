import React from "react";
import animation from "../assets/64644-fun-with-sports-box.json";
import Lottie from "lottie-react";
import Title from "./Title";

const About = () => {
  return (
    <section >
      <Title
      heading={"About US"}
      subHeading={"Why Should Join US"}
      ></Title>
      <div className="rounded-lg shadow-md py-10 mb-10 lg:flex justify-evenly items-center bg-[url('https://i.ibb.co/rFWpkdj/gradient-background-png-transparent-png-100-1050x500.png')] bg-cover bg-no-repeat">
        <div>
          <Lottie animationData={animation} loop={true}></Lottie>
        </div>
        <div className="lg:w-[50%] p-10 lg:p-0">
          <h1 className="lg:text-5xl font-semibold mb-4 leading-tight">
            Welcome to <br />
            <span className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
              The SUMMER SPORT CAMP.
            </span>
          </h1>
          <p className="text-4xl mb-4">
          We provide best quality of training in the camp!!
          </p>
          <p className="text-slate-200 hover:text-black">
            "A sports camp is an establishment that provides lodging, meals, and guide services for hunting, fishing, and outdoor recreation and usually consists of a set of "camps" or cabins with a main lodge."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
