import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const AllClasses = () => {

    const [allClasses, setAllClasses] = useState([]);
    const[isDisable, setDisable] = useState(false);

    useEffect( () => {
        fetch("https://summer-camp-server-coral.vercel.app/classes")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllClasses(data);
        })
    }, []);

    const handelApprove = (id) =>{
        fetch(`https://summer-camp-server-coral.vercel.app/classes/approve/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Class Approved",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        })

    };

    const handelDenied = (id) => {
        fetch(`https://summer-camp-server-coral.vercel.app/classes/denied/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Class Denied",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        })

    };

    return (
        <div>
            <h1>All classes of All Instructor</h1>


            <table className="table w-full">
        {/* head*/}
        <thead className="font-semibold text-black text-base">
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Instructor Name</th>
            <th>Class Name</th>
            <th>Status</th>
            <th>Set Status</th>
          </tr>
        </thead>
        <tbody >
          {/* row 1 */}
          {allClasses.map((allClass, index) => (
            <tr key={allClass._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src={allClass.instructorImage} />
                  </div>
                </div>
              </td>
              <td>{allClass.instructorName}</td>
              <td>{allClass.className}</td>
              <td>{allClass.status}</td>

              <td>
                <div>
                    {/* <button disabled={allClass.status == 'Approved' || 'Denied'} onClick={() => handelApprove(allClass._id)} className="p-2 rounded-lg font-semibold shadow-lg bg-slate-200 mr-3 hover:bg-slate-100 ">Approve</button> */}

                    <button disabled={allClass.status == 'Approved'} onClick={() => handelApprove(allClass._id)} className="p-2 rounded-lg font-semibold shadow-lg bg-slate-200 mr-3 hover:bg-slate-100 ">Approve</button>

                    <button disabled={allClass.status == 'Denied'} onClick={() => handelDenied(allClass._id)} className="p-2 rounded-lg font-semibold shadow-lg bg-slate-200 hover:bg-slate-100">Denied</button>

                </div>
              </td>

              {/* <td className=""> <button onClick={()=> handelDelete(allClass._id)}><i className="text-2xl fa-solid fa-trash"></i></button> </td> */}
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default AllClasses;