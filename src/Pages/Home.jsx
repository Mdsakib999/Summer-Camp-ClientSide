import React from 'react';
import Bannar from '../components/Bannar';
import About from '../components/About';
import InstructorHome from '../components/InstructorHome';
import StudentReviows from '../components/StudentReviows';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <InstructorHome></InstructorHome>
            <StudentReviows></StudentReviows>
        </div>
    );
};

export default Home;