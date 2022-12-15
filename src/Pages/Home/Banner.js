import React from 'react';
import { Link } from 'react-router-dom';

import banner from '../../../src/assets/banner.jpeg'

const Banner = () => {
    return (
        <div className="hero mt-20  ">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={banner} className="md:w-1/2  rounded-lg shadow-2xl" alt='' />
                <div className='md:w-1/2'>
                    <h1 className="lg:text-4xl text-2xl mt-3 md:mt-0 font-bold">Minimalist Furniture BD 2022.!</h1>
                    <p className="py-3 lg:py-6">Search For Second Hand Furniture Near Me at Minimalist Furniture BD,, Find Second Hand Furniture Near Me. Now with us! Latest Today. Fast Response. More Relevant.</p>
                    <Link to='/blog'><button className='btn bg-gradient-to-r from-purple-400 to-sky-500 text-white'>See Our Blog</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;