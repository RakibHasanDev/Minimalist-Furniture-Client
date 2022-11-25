import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const product = useLoaderData()
    console.log(product)
    return (
        <div>
            <h1>Products { product.length}</h1>
        </div>
    );
};

export default Products;