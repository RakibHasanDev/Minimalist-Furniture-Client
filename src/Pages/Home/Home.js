import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import Banner from './Banner';
import Category from './Category';
import Slider from './Slider';
import axios from 'axios';
import Advertise from './Advertise';


const Home = () => {
    const [loading, setLoading] = useState(true)

    const [advertises, setData] = useState([])
    

// fetch by axios
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5000/advertise',
            );
            setData(result.data);
            setLoading(false)
        };
        fetchData();
        
    }, []);

    // console.log(data)


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
            {
                advertises?.length >0 &&
                <Advertise
                        advertises={advertises}
                        loading={loading}
                    ></Advertise>
            }
            <Banner></Banner>
        </div>
    );
};

export default Home;