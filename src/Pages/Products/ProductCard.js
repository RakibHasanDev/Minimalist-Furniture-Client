import React from 'react';
import { AiFillWarning, AiFillCheckCircle } from "react-icons/ai";

const ProductCard = ({ product, productHandler}) => {
    console.log(product)
    const { categoryName, sellerName, shopLocation, condition, description, image, time, originalPrice, phoneNumber, productName, purchaseYear, resalePrice, sellerImage, usingTime, verify, sold } = product

   

    return (
        <div>
            <div>
                 
             
                <div className="lg:w-11/12  h-[40rem] mx-auto rounded-lg bg-gray-100 shadow-md  my-3 border-purple-500  border-t-2 relative "  >

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
                                <p className='flex gap-1 mt-1'>Verified: 
                                    {
                                        verify === "true" ? <AiFillCheckCircle  className='text-blue-800 text-xl'/> :  
                                            <AiFillCheckCircle className='text-red-500 text-xl' />
                                    }
                                    </p>

                            </div>
                        </div>
                        <hr className='border-gray-600 my-3' />
                        <div className='flex justify-between'>
                            <img src={sellerImage} className='w-9 h-9 rounded-full' alt="" />
                            
                            <label onClick={() => productHandler(product)} htmlFor="report-modal" className='block'>
                                <p className='text-red-500 text-sm flex gap-1 cursor-pointer '>Report <span className='text-xl'><AiFillWarning /></span> </p>
                            </label>
                           
                        </div>
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
                        
                            
                        {
                            sold === true ?
                                
                                <label className='bg-gray-300 w-full text-white text-center absolute bottom-0 rounded-md py-2 '>Sold</label>
                                : 
                                <label

                                    onClick={() => productHandler(product)}
                                    htmlFor="booking-modal"
                                    className='bg-gradient-to-r from-purple-400 to-sky-500 w-full text-white text-center absolute bottom-0 rounded-md py-2 cursor-pointer'> Book Now</label>
                        }
                            

                       


                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;