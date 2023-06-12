import React, { useEffect, useState } from 'react';

const PopurarInstructors = () => {

    const [teachers, setTeacher] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-coral.vercel.app/instractor')
        .then(res => res.json())
        .then(data => {
          console.log(data);
            setTeacher(data);
        })
    },[])


    return (
        <div className='my-6'>
            <h1 className='text-center mx-auto w-[35%] text-4xl font-bold border-b-4 pb-3 mb-8'>Our All Instructors</h1>

            <div className='mx-auto grid lg:grid-cols-3 gap-8'>
            {
                teachers.map(teacher => <div key={teacher._id} className="card bg-base-100 shadow-xl">
                <figure><img className='h-[300px]' src={teacher.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="font-bold text-2xl">{teacher.name}</h2>
                  <p>Email: {teacher.email}</p>
                  
                  <div className="card-actions justify-start">
                    <button className="bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">See Classes</button>
                  </div>
                </div>
              </div> )
            }
            </div>

        </div>
    );
};

export default PopurarInstructors;