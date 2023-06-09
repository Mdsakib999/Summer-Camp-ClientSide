import React from 'react';

const Title = ({heading, subHeading}) => {
    return (
        <div className='lg:w-[35%] text-center mx-auto my-10'>
            <h1 className='text-4xl font-bold border-b-4 pb-3'>{heading}</h1>
            <p className='text-xl text-slate-500 pt-3'>---{subHeading}---</p>
        </div>
    );
};

export default Title;