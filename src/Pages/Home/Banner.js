import React from 'react';
import { Link } from 'react-router-dom';

import banner from '../../../src/assets/banner.jpeg'

const Banner = () => {
    return (
        <div className="hero mt-10  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="md:w-1/2  rounded-lg shadow-2xl" alt='' />
                <div className='md:w-1/2'>
                    <h1 className="text-4xl font-bold">Minimalist Furniture BD 2022.!</h1>
                    <p className="py-6">Search For Second Hand Furniture Near Me at Minimalist Furniture BD,, Find Second Hand Furniture Near Me. Now with us! Latest Today. Fast Response. More Relevant.</p>
                    <Link to='/blog'><button className='btn btn-primary text-white'>See Our Blog</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;