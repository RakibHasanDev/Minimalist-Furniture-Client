import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData()
 
    return (
        <div className='w-11/12 mx-auto'>
        

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>

                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}

                    >
                        
                        
                    </ProductCard>)
                }

            </div>
           
            
        </div>
    );
};

export default Products;