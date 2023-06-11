import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";

const WonClasses = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/classes/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentUser(data);
        });
    }
  }, []);
  return (
    <div>
      <h1>All classes of single teacher</h1>
      <div>
        {currentUser.map((singleUser) => (
          <p>{singleUser.className}</p>
        ))}
      </div>
    </div>
  );
};

export default WonClasses;
