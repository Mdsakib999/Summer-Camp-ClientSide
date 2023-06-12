import React, { useEffect, useState } from "react";

const StudentSelectedClass = () => {
  const [selects, setSelects] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-coral.vercel.app/studentSelectedClasses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelects(data)
      });
  }, []);

  return (
    <div>
      <h1>All selected classes</h1>

      <table className="table w-full ">
        {/* head*/}
        <thead className="font-semibold text-black text-base">
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Price</th>
            <th>Pay</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {selects.map((select, index) => (

            
            <tr className="font-semibold" key={select._id}>
              <td>{index + 1}</td>
              
              <td>{select.className}</td>
              <td>{select.instructorName}</td>
              <td>$ {select.price}</td>
              <td>
                <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay</button>
              </td>
              <td className="">
                
                <button onClick={() => handelDelete(allUser._id)}>
                  <i className="text-2xl fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentSelectedClass;
