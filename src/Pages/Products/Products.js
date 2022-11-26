import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData()
    const [singleProduct, SetSingleProduct] = useState(null)

    const productHandler = product => {
        SetSingleProduct(product)
    }
 
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center  text-3xl font-semibold text-blue-800'> Available Products {products.length}</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5'>

                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        productHandler={productHandler}

                    >
                        
                        
                    </ProductCard>)
                }

                {
                    singleProduct && 
                    <BookingModal
                            singleProduct={singleProduct}
                            SetSingleProduct={SetSingleProduct}
                        ></BookingModal>
                }

            </div>
           
            
        </div>
    );
};

export default Products;