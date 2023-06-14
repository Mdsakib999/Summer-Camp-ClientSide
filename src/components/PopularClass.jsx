import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const PopularClass = () => {

    const {user} = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState({}); 
    // const [disabled, setDisabled] = useState('none');

    useEffect(() => {
        if (user?.email) {
          fetch(`https://summer-camp-server-coral.vercel.app/allClasser/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setCurrentUser(data);
              
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

    const handelSelectedClass = (id) =>{
        console.log(id);

        const saveUser = {
            className: id.className,
            instructorName: id.instructorName,
            price: id.price,
            availableSeats: id.availableSeats,
            studentEmail: user?.email,
            payment: 'no',
        }
        fetch('https://summer-camp-server-coral.vercel.app/selectedClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Class selected",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
            })
        

        

    }


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
                    {
                      singleClass.availableSeats == '0' ? <p className='bg-red-600 text-center text-white font-semibold mt-5 pt-2'>Seats Fill UP</p> : 
                      <>
                      <div className="card-actions justify-center mt-6 ">
                    <button
                    onClick={()=> handelSelectedClass(singleClass)}
                     
                    className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Select Class</button>
                  </div>
                      </>
                    }
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