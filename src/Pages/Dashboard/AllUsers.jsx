import React, { useEffect, useState } from "react";
import Title from "../../components/Title";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(allUsers);
        setAllUsers(data);
      });
  }, []);

  return (
    <div className="b">
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
        <tbody >
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
                    <button className="p-2 rounded-lg font-semibold shadow-lg bg-slate-200 mr-3 hover:bg-slate-100 ">Admin</button>
                    <button className="p-2 rounded-lg font-semibold shadow-lg bg-slate-200 hover:bg-slate-100">Teacher</button>

                </div>
              </td>
              <td className=""> <i class="text-2xl fa-solid fa-trash"></i> {}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
