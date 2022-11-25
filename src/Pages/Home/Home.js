import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Category from './Category';
import Slider from './Slider';

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div>
            <Slider></Slider>
            <Category categories={categories}></Category>
            <Banner></Banner>
        </div>
    );
};

export default Home;