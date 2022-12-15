import React from 'react';

const AdvertiseCard = ({advertise}) => {
    return (
        <div
            key={advertise._id}
            className="card card-side  shadow-lg rounded bg-sky-100 relative">
            <figure><img className='h-56 w-44' src={advertise?.image} alt="Movie" /></figure>
            <div className="card-body text-gray-500">
                <h2 className="text-md font-semibold">{advertise?.productName}</h2>
                <p >Real Price:<b> ${advertise?.originalPrice}</b> </p>
                <p>Price: <b>${advertise?.resalePrice}</b></p>
                <p>post on: <b className='text-xs'>{new Date(advertise.time).toLocaleString()}</b></p>
                {/* <div className="card-actions justify-end">
                    <button className='bg-gradient-to-r from-purple-400 to-sky-500 text-white btn btn-sm mt-2 absolute bottom-3'>Buy Now</button>
                </div> */}
               
                <div className='mt-3'>

                    <marquee className="card-actions justify-end bg-gradient-to-r from-purple-400 to-sky-500 text-white btn btn-sm pt-2 px-2 absolute bottom-3">
                        Please Login And Select Your Category</marquee>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;