import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider";

const StudentSelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [selects, setSelects] = useState([]);



  useEffect(() => {
    fetch(`https://summer-camp-server-coral.vercel.app/studentSelectedClasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelects(data)
      });
  }, []);



  const handelDelete =(id) =>{
    console.log(id);
    const yes = confirm('Do you want to delete??')

    if(yes) {
      fetch(`https://summer-camp-server-coral.vercel.app/selectClass/${id}`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.deletedCount > 0) {
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Deleted Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                  const remain = selects.filter(remainUser => remainUser._id !== id);
                  setSelects(remain);

          }
      });
  }

  }

  return (
    <div>
      <h1 className="text-center mx-auto w-[50%] text-4xl font-bold border-b-4 pb-3 my-8">All selected classes {selects.length}</h1>

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
              <Link to={`/dashboard/payment/${select.price}`}>
                <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay</button>
                </Link>
              </td>
              <td className="">
                <button onClick={() => handelDelete(select._id)}>
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
