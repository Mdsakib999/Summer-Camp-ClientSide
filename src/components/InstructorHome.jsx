import React, { useEffect, useState } from "react";
import Title from "./Title";

const InstructorHome = () => {
  const [teachers, setTeacher] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instractorHome")
      .then((res) => res.json())
      .then((data) => {
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
                  <h2 className="font-bold text-2xl">{teacher.teacherName}</h2>
                  <p>Email: {teacher.teacherEmail}</p>
                  <p>Number of Class Taken: {teacher.numberOfClass}</p>
                  <p className="font-semibold">Instructor: {teacher.sports}</p>
                  {/* <div className="card-actions justify-center">
                    <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">See Classes</button>
                  </div> */}
                </div>
              </div> )
            }
            </div>
    </div>
  );
};

export default InstructorHome;
