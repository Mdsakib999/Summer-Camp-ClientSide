import React, { useEffect, useState } from 'react';
import Title from './Title';

const PopurarInstructors = () => {

    const [teachers, setTeacher] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instractor')
        .then(res => res.json())
        .then(data => {
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
                  <h2 className="font-bold text-2xl">{teacher.teacherName}</h2>
                  <p>Email: {teacher.teacherEmail}</p>
                  <p>Number of Class Taken: {teacher.numberOfClass}</p>
                  <div className="card-actions justify-center">
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