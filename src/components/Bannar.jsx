import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Bannar = () => {
    return (
        <Carousel>
        <div className='rounded-md'>
            <img className='rounded-md' src="https://www.simpleimageresizer.com/_uploads/photos/e047f9f2/banner-summerCamp-2_1200x500.jpg" />
            
        </div>
        <div className='rounded-md'>
            <img className='rounded-md' src="https://www.simpleimageresizer.com/_uploads/photos/e047f9f2/banner-football_1200x500.jpg" />
            
        </div>
        <div className='rounded-md'>
            <img className='rounded-md' src="https://www.simpleimageresizer.com/_uploads/photos/e047f9f2/Banner-Swim_1_1200x500.jpg" />
            
        </div>
        <div className='rounded-md'>
            <img className='rounded-md' src="https://www.simpleimageresizer.com/_uploads/photos/e047f9f2/banner-crickte_1200x500.jpg" />
            
        </div>
        <div className='rounded-md '>
            <img className='rounded-md ' src="https://www.simpleimageresizer.com/_uploads/photos/e047f9f2/basketball-summer-camp_1200x500.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div className='rounded-md'>
            <img className='rounded-md' src="https://www.simpleimageresizer.com/_uploads/photos/e047f9f2/banner-summerCamp_1200x500.jpeg" />
            
        </div>
    </Carousel>
    );
};

export default Bannar;