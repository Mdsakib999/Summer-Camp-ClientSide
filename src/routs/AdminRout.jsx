import React, { Children, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRout = ({children}) => {

    const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    setLoading(true)
    if (user?.email) {
      fetch(`https://summer-camp-server-coral.vercel.app/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentUser(data);
          setLoading(false);
        });
    }
  }, [user?.email]);

  
  const location = useLocation();
  
  if(loading) {
      return <progress className="progress w-56"></progress>
  }
console.log(currentUser.role)
  if (currentUser.role == 'admin' ) {
      return children;
  }
        // {
        //     currentUser.role == "admin" ? return Children : <></>
        // }



  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRout;