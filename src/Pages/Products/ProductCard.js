import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";


const ProductCard = ({ product, productHandler }) => {
    console.log(product)
    const { categoryName, sellerName, shopLocation, condition, description, image, time, originalPrice, phoneNumber, productName, purchaseYear, resalePrice,  sellerImage, usingTime } = product

    // {  }

    return (
        <div>
            <div>
                <div className="lg:w-11/12  h-[36rem] mx-auto rounded-lg bg-gray-100 shadow-md border-gray-700 my-3 relative"  >

                    <div className='flex justify-center relative rounded-lg overflow-hidden'>
                        <div className='p-4 transition-transform duration-500 transform ease-in-out hover:scale-110 w-full'>

                            <img className=" rounded-lg h-56 w-full" src={image} alt="" />
                        </div>
                    </div>

                    <div className="px-5">
                        {/* <div className='mt-2 flex justify-between items-center'>
                            <img src={sellerImage} className="w-8 h-8 rounded-full" alt="" />

                            <AiOutlineHeart className='text-red-600'></AiOutlineHeart>
                        </div> */}
                        <div className='flex justify-between'>
                            <h5 className="text-md tracking-tight text-sky-700">{productName}</h5>
                            <i className='text-sm  text-sky-700'>{categoryName}</i>

                        </div>
                        

                        <div className='space-y-1 mt-3 text-blue-800 '>
                            <div className="flex items-center  justify-between">
                                <span className='text-sm'>Original Price: <b>${originalPrice}</b>
                                </span>
                                <span className='text-sm'>Selling Price <b>${resalePrice}</b></span>
                            </div>
                        

                            <div className='flex justify-between'>
                                <p className='text-sm'>
                                    Used: <b>{usingTime}</b>
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
                                Seller Number: <b>{phoneNumber}</b>
                            </p>
                            <p>
                                Location: <b>{shopLocation}</b>
                            </p>
                            <p> Purchase Year: <b>{purchaseYear}</b></p>
                            <p>Post on: {new Date(time).toLocaleString()}</p>
                            <p><b>Description:</b>  {description?.length > 100 ? description?.slice(0, 60) + '...' : description} </p>
                        </div>

                        
                       
                    </div>
                    <div className='mt-2'>
                        <label
                            onClick={() => productHandler(product)}
                            htmlFor="booking-modal"
                            className='bg-orange-400 w-full text-white text-center absolute bottom-0 rounded-md py-2'> Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;