import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FcAdvertising } from 'react-icons/fc';
import { MdOutlineGppGood } from 'react-icons/md';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Advertisement = ({ advertises }) => {
    console.log(advertises)
    return (
        <div  className='pt-1'>
            <div className='mt-10 mb-5 shadow-lg bg-blue-200 rounded-md'>
                <marquee className=' text-2xl text-white p-4 ' > A huge Discount is going for all of this products. don't be late..!! grave the Opportunity</marquee>
            </div>
            <h1 className='text-center text-3xl font-semibold text-gray-600'>Advertise</h1>
            <hr className='pb-4 w-1/3 mx-auto h-2' />
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    advertises?.map(ad => (
                        ad.sold !== true ?
                            <SwiperSlide key={ad._id} className='max-w-sm'>
                                <div className="mt-3 w-full max-w-sm overflow-hidden  rounded-lg shadow-xl dark:bg-gray-100">
                                    <img className="object-cover object-center w-full h-56" src={ad.image} alt={ad.productName} />

                                    <div className="flex items-center px-6 py-3 bg-gray-100">
                                      <FcAdvertising className='text-3xl'/>

                                        <h1 className="mx-3 text-lg font-semibold text-gray-600">Advertise</h1>
                                    </div>

                                    <div className="px-6 py-4">
                                        <h1 className="text-xl font-sem=ibold text-gray-800 dark:text-gray-600">{ad.productName}</h1>

                                        <div className="flex items-center mt-4 text-gray-600 ">
                                            <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 11H10V13H14V11Z" /><path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                                            </svg>

                                            <h1 className="px-2 text-sm">Reseller Price: {ad.resalePrice}</h1>
                                        </div>

                                        <div className="flex items-center mt-4 text-gray-600 ">
                                     <MdOutlineGppGood className='text-2xl font-semibold'/>

                                            <h1 className="px-2 text-sm">Condition: {ad.condition}</h1>
                                        </div>

                                        <div className="flex items-center mt-4 text-gray-700 ">
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            :
                            <div className='hidden'></div>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Advertisement;