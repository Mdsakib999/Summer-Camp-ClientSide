import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider';

const MyCart = () => {

    const {user} = useContext(AuthContext);
    console.log(user)
    


    return (
        <div>
          <h1 className='text-center font-semibold text-7xl mt-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>Welcome to Your Profile <br /> {user.displayName}</h1>

          <div className='text-center mt-5'>
          <img className='w-[200px] h-[170px] mx-auto rounded-full' src={user.photoURL} alt="" />
          </div>

      

    </div>
    );
};

export default MyCart;