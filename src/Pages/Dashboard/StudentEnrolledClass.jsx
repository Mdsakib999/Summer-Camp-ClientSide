import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";

const StudentEnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://summer-camp-server-coral.vercel.app/enrolledDetails/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center mx-auto w-[50%] text-4xl font-bold border-b-4 pb-3 mb-8">
        All Enrolled class Payment details
      </h1>

      <table className="table w-full ">
        {/* head*/}
        <thead className="font-semibold text-black text-base">
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>transaction Id</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr className="" key={detail._id}>
              <td>{index + 1}</td>

              <td>{detail.email}</td>
              <td>{detail.transactionId}</td>
              <td>$ {detail.price}</td>
              <td>{detail.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentEnrolledClass;
