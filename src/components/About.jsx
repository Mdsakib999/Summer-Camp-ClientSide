import React from "react";
import animation from "../assets/64644-fun-with-sports-box.json";
import Lottie from "lottie-react";
import Title from "./Title";

const About = () => {
  return (
    <section>
      <Title
      heading={"About US"}
      subHeading={"why should join us"}
      ></Title>
      <div className="rounded-lg shadow-md py-10 mb-10 lg:flex justify-evenly items-center bg-[url('https://i.ibb.co/rFWpkdj/gradient-background-png-transparent-png-100-1050x500.png')] bg-cover bg-no-repeat">
        <div>
          <Lottie animationData={animation} loop={true}></Lottie>
        </div>
        <div className="lg:w-[50%] p-10 lg:p-0">
          <h1 className="lg:text-5xl font-semibold mb-4 leading-tight">
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
              RoboKingdom,
            </span>
            The Ultimate Robot Emporium!!!
          </h1>
          <p className="text-4xl mb-4">
            {" "}
            Discover the Perfect Toy & Shop Now!!
          </p>
          <p className="text-slate-500 hover:text-black">
            "Welcome to the Ultimate Robot Emporium! Unleash Boundless
            Excitement with Our Spectacular Collection of Robotic Marvels.
            Explore, Play, and Bring Home Your Perfect Mechanical Companion at
            RoboKingdom!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
