import React from 'react';
import Loading from '../../Components/Loading';

const Advertise = ({ advertises, loading }) => {

    // const { productName, image, condition, originalPrice, resalePrice } = advertises
    
    
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-12'>

            <div className='my-5 shadow-lg bg-blue-200 rounded-md'>
                <marquee className='text-2xl text-white p-4 ' > A huge Discount is going for all of this products. don't be late..!! grave the Opportunity</marquee>
            </div>
           
            <h1 className='text-center text-3xl font-semibold  text-gray-500'>Advertise Section</h1>
            

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-10'>


                {
                    advertises.map(advertise =>
                        <div
                            key={advertise._id}
                            className="card card-side  shadow-lg rounded bg-sky-100 relative">
                            <figure><img className='h-56 w-44' src={advertise?.image} alt="Movie" /></figure>
                            <div className="card-body text-gray-500">
                                <h2 className="text-md font-semibold">{advertise?.productName}</h2>
                                <p >Real Price:<b> ${advertise?.originalPrice}</b> </p>
                                <p>Price: <b>${advertise?.resalePrice}</b></p>
                                <p>post on: <b className='text-xs'>{new Date(advertise.time).toLocaleString()}</b></p>
                                <div className="card-actions justify-end">
                                    <button className='bg-gradient-to-r from-purple-400 to-sky-500 text-white btn btn-sm mt-2 absolute bottom-3'>Buy Now</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Advertise;