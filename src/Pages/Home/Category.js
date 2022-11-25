import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({categories}) => {
    // console.log(categories)

    return (
        <div className='my-10'>
            <h1 className='text-primary text-3xl text-center font-semibold'>Chose Your Category</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                {
                    categories.map(category => <div
                        key={category._id}
                        
                    
                        className="card  bg-base-100 shadow-xl">
                        <div
                            
                            style={{
                                backgroundImage: `url(${category.img})`,

                            }}
                           
                        
                            className=" bg-cover bg-center rounded-lg h-44 relative">
                            <div className='card-body h-full w-full bg-gradient-to-r from-black/60 to-transparent  border border-gray-100 rounded-md'>
                                  <h2 className=" text-white text-xl font-semibold ">{category.categoryName}</h2>
                            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                            <div className="card-actions justify-end absolute bottom-4 right-5">
                                <Link to={`/products/${category.categoryName}`}>
                                        <button className="bg-gradient-to-r from-purple-400 to-sky-500 px-4 py-2.5 rounded-md text-white">Sell All</button>
                                    </Link>
                                    </div>
                          </div>
                        </div>
                    </div>)
                }
                
               
            </div>
        </div>
    );
};

export default Category;