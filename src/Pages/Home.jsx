import React from 'react';
import Bannar from '../components/Bannar';
import About from '../components/About';
import InstructorHome from '../components/InstructorHome';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <InstructorHome></InstructorHome>
        </div>
    );
};

export default Home;