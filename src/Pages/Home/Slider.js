import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
export default function Slider() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${"https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                        }}


                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
                            <div>
                                <h1 className="lg:text-5xl text-2xl">
                                    Chose Your Furniture
                                    <br /> With A Little Cost
                                </h1>
                                <p className="py-3 text-sm md:text-xl md:w-3/6 ">

                                    we are offering furniture like new in your budget, Don't be late to get your one,, hurry up...!.
                                </p>
                                <Link to='/services'>
                                    <button className="bg-gradient-to-r from-purple-400 to-sky-500 px-3 py-2 md:px-4 md:py-3 rounded-md">
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${"https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
                            <div>
                                <h1 className="lg:text-5xl text-2xl">
                                    Chose Your Furniture
                                    <br /> With A Little Cost
                                </h1>
                                <p className="py-3 text-sm md:text-xl md:w-3/6 ">

                                    we are offering furniture like new in your budget, Don't be late to get your one,, hurry up...!.
                                </p>
                                <Link to='/services'>
                                    <button className="bg-gradient-to-r from-purple-400 to-sky-500 px-3 py-2 md:px-4 md:py-3 rounded-md">
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl"
                        style={{
                            backgroundImage: `url(${"https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                        }}

                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
                            <div>
                                <h1 className="lg:text-5xl text-2xl">
                                    Chose Your Furniture
                                    <br /> With A Little Cost
                                </h1>
                                <p className="py-3 text-sm md:text-xl md:w-3/6 ">

                                    we are offering furniture like new in your budget, Don't be late to get your one,, hurry up...!.
                                </p>
                                <Link to='/services'>
                                    <button className="bg-gradient-to-r from-purple-400 to-sky-500 px-3 py-2 md:px-4 md:py-3 rounded-md">
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${"https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                        }}
                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
                            <div>
                                <h1 className="lg:text-5xl text-2xl">
                                    Chose Your Furniture
                                    <br /> With A Little Cost
                                </h1>
                                <p className="py-3 text-sm md:text-xl md:w-3/6 ">

                                    we are offering furniture like new in your budget, Don't be late to get your one,, hurry up...!.
                                </p>
                                <Link to='/services'>
                                    <button className="bg-gradient-to-r from-purple-400 to-sky-500 px-3 py-2 md:px-4 md:py-3 rounded-md">
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}