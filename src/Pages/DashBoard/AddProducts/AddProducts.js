import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { register, handleSubmit, formState: { errors }, } = useForm();  
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const date = Date.now();

    const handelAddProduct = data => {
        // console.log(data.image[0]  
        // console.log(data)
        const image = data.url[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url)
                if (imgData.success) {
                    const product = {
                        image: imgData.data.url,
                        sellerImage: user?.photoURL,
                        sellerName: user?.displayName,
                        sellerEmail: user?.email,
                        productName: data.name,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resale,
                        usingTime: data.usingTime,
                        shopLocation: data.location,
                        condition: data.select,
                        phoneNumber: data.number,
                        categoryName: data.category,
                        time: date,
                    };
                    fetch("http://localhost:5000/products", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success("Your Product Added SuccessFully")
                            }
                        });

                    console.log(product)
                }
            
                
            })
        
    }

    return (
        
        <div className='mt-10'>
           
            <section className="flex justify-center items-center py-8 my-12 rounded bg-slate-200 w-11/12  md:w-9/12 mx-auto">
                <div className="w-full">
                    <form
                        className="max-w-xl mx-auto"
                        onSubmit={handleSubmit(handelAddProduct)}
                    >
                        
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block dark:text-gray-400">
                                Furniture Name
                            </label>
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                            />
                            {errors.name && (
                                <p className="text-red-600" role="alert">
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="option" className="block dark:text-gray-400">
                                Select Category
                            </label>
                            <select
                                {...register("category", {
                                    required: "Please Select your brand",
                                })}
                                id="option"
                                className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                                required
                            >
                                <option value={""} disabled hidden selected required>
                                    Please Select your Category
                                </option>
                                <option value="Bedroom Furniture">Bedroom Furniture </option>
                                <option value="Drawing Room Furniture">Drawing Room Furniture</option>
                                <option value="Kitchen Furniture">Kitchen Furniture</option>
                                
                            </select>
                            {errors.category && (
                                <p className="text-red-600" role="alert">
                                    {errors.category?.message}
                                </p>
                            )}
                        </div>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div className="space-y-1 text-sm">
                                <label
                                    htmlFor="originalPrice"
                                    className="block dark:text-gray-400"
                                >
                                    Original Price
                                </label>
                                <input
                                    type="text"
                                    {...register("originalPrice", {
                                        required: "Resale is required",
                                    })}
                                    name="originalPrice"
                                    id="originalPrice"
                                    placeholder="Original Price"
                                    className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                                />
                                {errors.originalPrice && (
                                    <p className="text-red-600" role="alert">
                                        {errors.originalPrice?.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="resale" className="block dark:text-gray-400">
                                    Resale Price
                                </label>
                                <input
                                    type="text"
                                    {...register("resale", {
                                        required: "Resale is required",
                                    })}
                                    name="resale"
                                    id="resale"
                                    placeholder="Resale Price"
                                    className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                                />
                                {errors.resale && (
                                    <p className="text-red-600" role="alert">
                                        {errors.resale?.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="usingTime" className="block dark:text-gray-400">
                                    Used Time
                                </label>
                                <input
                                    type="text"
                                    {...register("usingTime", {
                                        required: "Using Time is required",
                                    })}
                                    name="usingTime"
                                    id="usingTime"
                                    placeholder="Using Time"
                                    className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                                />
                                {errors.usingTime && (
                                    <p className="text-red-600" role="alert">
                                        {errors.usingTime?.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="location" className="block dark:text-gray-400">
                                    Shop Location
                                </label>
                                <input
                                    type="text"
                                    {...register("location", {
                                        required: "Shop Location is required",
                                    })}
                                    name="location"
                                    id="location"
                                    placeholder="Shop Location"
                                    className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                                />
                                {errors.location && (
                                    <p className="text-red-600" role="alert">
                                        {errors.location?.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="option" className="block dark:text-gray-400">
                                    Select condition
                                </label>
                                <select
                                    {...register("select", {
                                        required: "Please Select One",
                                    })}
                                    id="option"
                                    className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                                    required
                                >
                                    <option value={""} disabled hidden selected required>
                                        Select One
                                    </option>
                                    <option value="excellent">excellent</option>
                                    <option value="good">good</option>
                                    <option value="fair">fair</option>
                                </select>
                                {errors.select && (
                                    <p className="text-red-600" role="alert">
                                        {errors.select?.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="number" className="block dark:text-gray-400">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    {...register("number", {
                                        required: "Shop Location is required",
                                    })}
                                    name="number"
                                    id="number"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-md border dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400"
                                />
                                {errors.number && (
                                    <p className="text-red-600" role="alert">
                                        {errors.number?.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Image File */}
                        <label
                            htmlFor="dropzone-file"
                            className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border dark:border-gray-700  rounded-md cursor-pointer dark:border-gray-600 "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-300 dark:text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                />
                            </svg>

                            <h2 className="mx-3 text-gray-400">Profile Photo</h2>

                            <input
                                {...register("url", {
                                    required: "Image is required",
                                })}
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                            />
                        </label>
                        <button className="block w-full p-3 text-center rounded-sm  bg-sky-400 text-white mt-6">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddProducts;