import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

const ClassHome = () => {
  const [homeClasses, setHomeClasses] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-server-coral.vercel.app/homeClasses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHomeClasses(data);
      });
  }, []);

  return (
    <div>
      <Title
        heading={"Popular Classes"}
        subHeading={"Best Enrolled Classes"}
      ></Title>
      
      <div className="mx-auto grid lg:grid-cols-3 gap-8">
        {homeClasses.map((homeClass) => (
          <div key={homeClass._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[300px]"
                src={homeClass.classImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl">Class Name: {homeClass.className}</h2>
              <p className="font-semibold text-xl">Instructor: {homeClass.instructorName}</p>
              

              <div className='mb-5 flex justify-between text-center'>
                    <div className='px-5 py-2 rounded-xl bg-slate-50 shadow-lg hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-white'>
                        <p className='font-semibold text-2xl'>{homeClass.availableSeats}</p>
                        <p className='font-bold'>Available Seats</p>
                    </div>
                    <div className='px-5 py-2 rounded-xl bg-slate-50 shadow-lg hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-white'>
                        <p className='font-semibold text-2xl'>$ {homeClass.price}</p>
                    <p className='font-bold'>Price</p>
                    </div>
                  </div>

              <div className="card-actions justify-center">
                <Link to="/classes">
                  <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    See All Classes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassHome;
