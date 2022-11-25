import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Products = () => {
    const products = useLoaderData()
 
    return (
        <div>
            <h1>Products {products.length}</h1>
            <div>
                <div className="lg:w-11/12  h-[30rem] mx-auto rounded-lg bg-gray-200 shadow-lg dark:border-gray-700 my-3" >

                    <div className='p-4'>

                        <img className=" rounded-lg h-56 w-full" src={""} alt="" />
                    </div>

                    <div className="px-5 pb-5">

                        <h5 className="text-xl tracking-tight text-sky-700">""</h5>

                        <div className="flex items-center mt-2.5 mb-5  justify-between">
                            <span className='flex'><FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStarHalfAlt className='text-yellow-400' />
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">""</span>
                        </div>
                        <div className='mb-3'>
                            {/* <p>{description.length > 100 ? description.slice(0, 100) + '...' : description} </p> */}
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-semibold text-gray-700">$</span>
                            <Link className="text-white gradient-button focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  ">See Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Products;