import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "./Title";

const InstructorIndividualClass = () => {
  const selectClasses = useLoaderData();
  console.log(selectClasses);
  return (
    <div>
      <div className="mt-[-50px]">
        <Title
          heading={"Individual Class"}
          subHeading={"All classes of An Instructor"}
        ></Title>
        <div className="grid lg:grid-cols-3 gap-6 my-10">
        {
          selectClasses.map(selectClass => <div key={selectClass._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="rounded-xl h-[250px] w-[300px]"
              src={selectClass.classImage}
              alt="Class picture"
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center gap-2">
              
              <div className="avatar">
                <div className="w-20 h-20  rounded-full ">
                  <img src={selectClass.instructorImage} />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-2xl">
                  Class Name: {selectClass.className}
                </h2>
                <h2 className="font-bold text-xl">
                  Instructor: {selectClass.instructorName}
                </h2>
                <p>Email: {selectClass.instructorEmail}</p>
                
              </div>
            </div>
            <div className="flex justify-between text-center">
              <div className="px-5 py-2 rounded-xl bg-slate-50 shadow-lg hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-white">
                <p className="font-semibold text-2xl">
                  {selectClass.availableSeats}
                </p>
                <p className="font-bold">Available Seats</p>
              </div>
              <div className="px-5 py-2 rounded-xl bg-slate-50 shadow-lg hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-white">
                <p className="font-semibold text-2xl">$ {selectClass.price}</p>
                <p className="font-bold">Price</p>
              </div>
            </div>

          </div>
        </div>)
        }
        </div>

        
      </div>
    </div>
  );
};

export default InstructorIndividualClass;
