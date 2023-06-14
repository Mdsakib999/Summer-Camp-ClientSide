import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";

const WonClasses = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://summer-camp-server-coral.vercel.app/classes/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentUser(data);
        });
    }
  }, []);
  return (
    <div>
      <h1 className="text-center mx-auto w-[50%] text-4xl font-bold border-b-4 pb-3 mb-8">
        All classes By An Instructor
      </h1>
      <div className="grid lg:grid-cols-2 gap-6 my-10">
      {currentUser.map((singleUser) => (
          <div key={singleUser._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="rounded-xl h-[250px] w-[300px]"
                src={singleUser.classImage}
                alt="Class picture"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2">
                
                <div className="avatar">
                  <div className="w-20 h-20  rounded-full ">
                    <img src={singleUser.instructorImage} />
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-2xl">
                    Class Name: {singleUser.className}
                  </h2>
                  <h2 className="font-bold text-xl">
                    Instructor: {singleUser.instructorName}
                  </h2>
                  <p>Email: {singleUser.instructorEmail}</p>
                  
                </div>
              </div>
              <div className="flex justify-between text-center">
                <div className="px-5 py-2 rounded-xl bg-slate-50 shadow-lg hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-white">
                  <p className="font-semibold text-2xl">
                    {singleUser.availableSeats}
                  </p>
                  <p className="font-bold">Available Seats</p>
                </div>
                <div className="px-5 py-2 rounded-xl bg-slate-50 shadow-lg hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-white">
                  <p className="font-semibold text-2xl">$ {singleUser.price}</p>
                  <p className="font-bold">Price</p>
                </div>
              </div>

              {/* <div className="card-actions justify-center mt-6">
                    <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Select Class</button>
                  </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WonClasses;
