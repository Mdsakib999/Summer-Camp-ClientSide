import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

const InstructorHome = () => {
  const [teachers, setTeacher] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-coral.vercel.app/instractorHome")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeacher(data);
      });
  }, []);

  return (
    <div className="mb-16">
      <Title heading={"Popular Instructors"} subHeading={"Meet With Our Best Instructor"}></Title>

      <div className='mx-auto grid lg:grid-cols-3 gap-8'>
            {
                teachers.map(teacher => <div key={teacher._id} className="card bg-base-100 shadow-xl">
                <figure><img className='h-[300px]' src={teacher.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="font-bold text-2xl">{teacher.name}</h2>
                  <p>Email: {teacher.email}</p>
                  
                  {/* <p className="font-semibold">Instructor: {teacher.sports}</p> */}
                  <div className="card-actions justify-center">
                    <Link to="/">
                    <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">See All Instructor</button>
                    </Link>
                  </div>
                </div>
              </div> )
            }
            </div>
    </div>
  );
};

export default InstructorHome;
