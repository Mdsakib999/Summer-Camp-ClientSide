import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const[isDisable, setDisable] = useState(false);

  useEffect(() => {
    fetch("https://summer-camp-server-coral.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(allUsers);
        setAllUsers(data);
      });
  }, []);

  const [remainUsers, setRemainUser] = useState([]);


  const handelDelete = (id) =>{

    const yes = confirm('Are you sure?');
    if(yes) {
        fetch(`https://summer-camp-server-coral.vercel.app/users/${id}`, {
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
                    const remain = remainUsers.filter(remainUser => remainUser._id !== id);
                    setRemainUser(remain);

            }
        });
    }
    console.log(id);
  };


  const makeAdmin = (id) =>{

    fetch(`https://summer-camp-server-coral.vercel.app/users/admin/${id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Made Admin Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            //   const remain = remainUsers.filter(remainUser => remainUser._id !== id);
            //     setRemainUser(remain);
            setDisable(true);
        }
    })
    

  };


  const makeTeacher = (id) =>{

    fetch(`https://summer-camp-server-coral.vercel.app/users/instructor/${id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Made Instructor Successfully",
                showConfirmButton: false,
                timer: 2000,
              });
            
            setDisable(true);
        }
        
    })
    

  };

  return (
    <div className="">
      <Title heading={"ALL USERS"} subHeading={"All Our Users"}></Title>
      
      <table className="table w-full mt-[-50px]">
        {/* head*/}
        <thead className="font-semibold text-black text-base">
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>User Name</th>
            <th>Category</th>
            <th>Change Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
          {/* row 1 */}
          {allUsers.map((allUser, index) => (
            <tr key={allUser._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={allUser.image} />
                  </div>
                </div>
              </td>
              <td>{allUser.name}</td>
              <td>{allUser.role}</td>
              <td>
                <div>
                    <button disabled={allUser.role == 'admin'} onClick={() => makeAdmin(allUser._id)} className="p-2 rounded-lg font-semibold shadow-lg bg-slate-200 mr-3 hover:bg-slate-100 ">Admin</button>

                    <button disabled={allUser.role == 'Instructor'} onClick={() => makeTeacher(allUser._id)} className="p-2 rounded-lg font-semibold shadow-lg bg-slate-200 hover:bg-slate-100">Teacher</button>

                </div>
              </td>
              <td className="text-center"> <button onClick={()=> handelDelete(allUser._id)}><i className="text-2xl fa-solid fa-trash"></i></button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
