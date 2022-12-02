import React from 'react';
import Loading from '../../Components/Loading';
import AdvertiseCard from './AdvertiseCard';

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
                    advertises.map(advertise => <AdvertiseCard
                    advertise={advertise}>

                    </AdvertiseCard> )
                }
            </div>

        </div>
    );
};

export default Advertise;