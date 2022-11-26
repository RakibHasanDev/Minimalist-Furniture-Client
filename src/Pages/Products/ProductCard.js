import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    console.log(product)
    const { categoryName, sellerName, shopLocation, condition, description, image, time, originalPrice, phoneNumber, productName, purchaseYear, resalePrice,  sellerImage, usingTime } = product

    // {  }

    return (
        <div>
            <div>
                <div className="lg:w-11/12  h-[34rem] mx-auto rounded-lg bg-gray-100 shadow-lg dark:border-gray-700 my-3" >

                    <div className='p-4'>

                        <img className=" rounded-lg h-56 w-full" src={image} alt="" />
                    </div>

                    <div className="px-5">
                        <div className='flex justify-between'>
                            <h5 className="text-md tracking-tight text-sky-700">{productName}</h5>
                            <h5 className="text-md tracking-tight text-sky-700"> Type:  {categoryName}</h5>

                        </div>
                        

                        <div className='space-y-1 mt-3 text-blue-800 '>
                            <div className="flex items-center  justify-between">
                                <span className='text-sm'>Original Price: <b>${originalPrice}</b>
                                </span>
                                <span className='text-sm'>Selling Price <b>${resalePrice}</b></span>
                            </div>
                            {/* <div className='text-sm'>
                            <p>Description: {description.length > 100 ? description.slice(0, 100) + '...' : description} </p>
                        </div> */}

                            <div className='flex justify-between'>
                                <p className='text-sm'>
                                    used: <b>{usingTime}</b>
                                </p>
                                <p className='text-sm'>
                                    Condition: <b>{condition}</b>
                                </p>
                            </div>
                            <div className='text-sm  flex justify-between'>
                                <p> Seller Name: <b>{sellerName}</b> </p>
                                <p>Verified: <span className='bg-red-500 rounded-full text-white px-2 py-.5'>No</span></p>

                            </div>
                        </div>
                        <hr  className='border-gray-600 my-2'/>
                        <div className='text-sm space-y-1 text-blue-800 mt-1'>
                            <p className=''>
                                seller Number: <b>{phoneNumber}</b>
                            </p>
                            <p>
                                Location: <b>{shopLocation}</b>
                            </p>
                            <p> Purchase Year: <b>{purchaseYear}</b></p>
                            <p>Post on: {new Date(time).toLocaleString()}</p>
                            <p><b>Description:</b> { description}</p>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;