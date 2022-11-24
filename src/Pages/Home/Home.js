import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <Banner></Banner>
        </div>
    );
};

export default Home;