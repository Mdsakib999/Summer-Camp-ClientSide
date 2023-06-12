import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';

const PopularClass = () => {

    const {user} = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState({}); 
    useEffect(() => {
        if (user?.email) {
          fetch(`https://summer-camp-server-coral.vercel.app/allClasser/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setCurrentUser(data);
              console.log(currentUser.role);
            });
        }
      }, [user?.email]);
    
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-coral.vercel.app/classes/allClasses')
        .then(res => res.json())
        .then(data => {
        //   console.log(data);
          setClasses(data);
        })
    },[])


    return (
        <div>
            <h1 className='text-center mx-auto lg:w-[35%] text-4xl font-bold border-b-4 pb-3 mb-10'>All instructor's Classes</h1>

            <div className='mx-auto grid lg:grid-cols-3 gap-8 my-10'>
            {
                classes.map(singleClass => <div key={singleClass._id} className="card bg-base-100 shadow-xl">
                <figure><img className='h-[300px]' src={singleClass.classImage} alt="Class picture" /></figure>
                <div className="card-body">
                  <h2 className="font-bold text-2xl">Class Name: {singleClass.className}</h2>
                  <h2 className="font-bold text-xl">Instructor: {singleClass.instructorName}</h2>
                  <p>Email: {singleClass.instructorEmail}</p>
                  <p>Status: <span className='text-green-600 font-semibold'>{singleClass.status} </span></p>

                  <div className='flex justify-between text-center'>
                    <div className='px-5 py-2 rounded-xl bg-slate-50 shadow-lg hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-white'>
                        <p className='font-semibold text-2xl'>{singleClass.availableSeats}</p>
                        <p className='font-bold'>Available Seats</p>
                    </div>
                    <div className='px-5 py-2 rounded-xl bg-slate-50 shadow-lg hover:bg-gradient-to-r from-blue-500 to-green-400 hover:text-white'>
                        <p className='font-semibold text-2xl'>$ {singleClass.price}</p>
                    <p className='font-bold'>Price</p>
                    </div>
                  
                  
                  </div>

                  {
                    currentUser.role === "student" ? <>
                    <div className="card-actions justify-center mt-6">
                    <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Select Class</button>
                  </div>
                    </> : <> <p className='text-white'>.</p> </>
                  }
                  
                </div>
              </div> )
            }
            </div>


        </div>
    );
};

export default PopularClass;