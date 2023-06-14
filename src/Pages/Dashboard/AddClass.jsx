import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch('https://summer-camp-server-coral.vercel.app/classes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    });

    reset();
    console.log(data);
    console.log(user);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold underline my-6 text-center">
        Add A New Class
      </h1>

      <div className="bg-slate-50 py-10">
      <form className="lg:ml-32 my-5" onSubmit={handleSubmit(onSubmit)}>
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <label className="text-lg font-medium ">Class Name:</label> <br />
        <input
          className="text-input w-[50%] outline outline-offset-2 outline-cyan-200 p-2 rounded-lg m-3"
          {...register("className", { required: true })}
          placeholder="Enter Class Name"

          //   defaultValue="Web developer"
        /> <br />
        <label className="text-lg font-medium ml-">Price:</label> <br />
        <input
          className="text-input w-[50%]  outline outline-offset-2 outline-cyan-200 p-2 rounded-lg m-3"
          {...register("price", { required: true })}
          placeholder="Price"
          type="number"
        />
        <br />
        <label className="text-lg font-medium ">Instructor Name:</label> <br />
        <input
          className="text-input w-[50%]  outline outline-offset-2 outline-cyan-200 p-2 rounded-lg m-3 "
          value={user?.displayName}
          {...register("instructorName")}
          // placeholder="Seller Name"
          type="text"
        /> <br />
        <label className="text-lg font-medium ">Instructor Email:</label> <br />
        <input
          className="text-input outline w-[50%]  outline-offset-2 outline-cyan-200 p-2 rounded-lg m-3"
          value={user?.email}
          {...register("instructorEmail")}
          type="email"
        />
        <br />
        <label className="text-lg font-medium ">Available Seats:</label> <br />
        <input
          className="text-input outline outline-offset-2 w-[50%]  outline-cyan-200 p-2 rounded-lg m-3"
          {...register("availableSeats", { required: true })}
          placeholder="Available Seats"
          type="number"
        />
        <br></br>
        <label className="text-lg font-medium ">Class Image Url:</label> <br />
        <input
          className="text-input w-[65%] outline outline-offset-2 outline-cyan-200 p-2 rounded-lg m-5"
          {...register("classImage", { required: true })}
          placeholder="Enter Class image link"
          type="url"
        />
        <br />
        <label className="text-lg font-medium ">
          Instructor Image Url:
        </label>
        <br />
        <input
          className="text-input w-[65%] outline outline-offset-2 outline-cyan-200 p-2 rounded-lg m-5"
          value={user?.photoURL}
          {...register("instructorImage", { required: true })}
          type="url"
        /> <br />
        
        <label className="text-lg font-medium ">Status:</label> <br />
        <input
          className="text-input outline outline-offset-2 outline-cyan-200 p-2 rounded-lg m-5"
          {...register("status", { required: true })}
          value="Pending"
          type="text"
        />
        <br></br>
        <label className="text-lg font-medium hidden">Enrolled:</label> <br />
        <input
          className="text-input outline outline-offset-2 outline-cyan-200 p-2 rounded-lg m-5 hidden"
          {...register("enrolled", { required: true })}
          value={0}
          type="number"
        /> <br />

        <div className="lg:w-[30%] mx-auto ">
          <input
            className="submit-btn px-4 py-2 rounded-md
          text-white font-semibold text-base bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 ... w-[100%] mt-5 "
            value="Add Class"
            type="submit"
          />
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddClass;
