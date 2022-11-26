import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import Banner from './Banner';
import Category from './Category';
import Slider from './Slider';

const Home = () => {
   /* const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
        .then(data=>setCategories(data))
    },[])
*/
    const url = 'http://localhost:5000/categories'

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })
   
    return (
        <div>
            <Slider></Slider>
            <Category categories={categories} isLoading={isLoading}></Category>
            <Banner></Banner>
        </div>
    );
};

export default Home;