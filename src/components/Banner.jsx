import React from 'react';

const Banner = () => {
    return (
        <div className='banner  flex pt-72  lg:pt-80'>
            <div className='lg:w-1/2 hidden lg:flex'></div>
            <div className='text-white pl-40 space-y-3 lg:w-1/2'>
                <h2 className='lg:text-5xl text-2xl pr-8'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='lg:w-96 w-full  pr-8'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn py-2 px-4 border border-[#331A15] bg-[#E3B577]'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;