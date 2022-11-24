import React from 'react';

const Category = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-primary text-2xl text-center'>Chose Your Category</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Bedroom Furniture</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Go For Shopping</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;