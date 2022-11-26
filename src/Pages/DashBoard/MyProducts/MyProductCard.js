import React from 'react';
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

const MyProductCard = ({ product }) => {
    const { categoryName, sellerName, shopLocation, condition, description, image, time, originalPrice, phoneNumber, productName, purchaseYear, resalePrice, sellerImage, usingTime } = product
    return (
        <div className="lg:w-11/12  h-[25rem] mx-auto rounded-lg bg-gray-100 shadow-md border-gray-700 my-3 relative"  >

            <div className='flex justify-center  rounded-lg overflow-hidden'>
                <div className='p-2 transition-transform duration-500 transform ease-in-out hover:scale-110 w-full'>

                    <img className=" rounded-lg h-44 w-full" src={image} alt="" />
                </div>
            </div>

            <div className="px-5">
                {/* <div className='mt-2 flex justify-between items-center'>
                            <img src={sellerImage} className="w-8 h-8 rounded-full" alt="" />

                            <AiOutlineHeart className='text-red-600'></AiOutlineHeart>
                        </div> */}
                <div className='text-blue-700 space-y-1 '>
                    <h3 className='text-md'> <b>{productName}</b> </h3>
                    <h3 className='text-md'>Original Price: <b>${originalPrice}</b> </h3>
                    <h3 className='text-md'>Selling Price: <b>${resalePrice}</b> </h3>
                    <p >Post On: <b className='text-xs'>{new Date(time).toLocaleString()}</b> </p>
                    <p>Sold Status: <strong>Unsold</strong> </p>
                    
                    <div className=' flex justify-between pt-4'>

                        <p className='flex gap-2 items-center text-blue-900 cursor-pointer'> Advertise: <AiOutlineVideoCameraAdd className='text-2xl' /></p>

                        <button className='rounded-md py-2 px-4 bg-gradient-to-r from-purple-400 to-sky-500 text-sm text-white hover:bg-red-900 '> Delete </button>

                      
                       
                    </div>
                </div>


               
              
                {/* <div className='text-sm space-y-1 text-blue-800 mt-1'>
                    <p className=''>
                        Seller Number: <b>{phoneNumber}</b>
                    </p>
                    <p>
                        Location: <b>{shopLocation}</b>
                    </p>
                    <p> Purchase Year: <b>{purchaseYear}</b></p>
                    <p>Post on: {new Date(time).toLocaleString()}</p>
                    <p><b>Description:</b>  {description?.length > 100 ? description?.slice(0, 60) + '...' : description} </p>
                </div> */}



            </div>
            
        </div>
    );
};

export default MyProductCard;