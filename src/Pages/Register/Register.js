import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react'
import reader from '../../../src/assets/63787-secure-login.json'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Loading from '../../Components/Loading';
 


const Register = () => {

    const [regError, setRegError] = useState('')
    const [loading, setLoading] = useState(null)
    const [showPass, setShowPass] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { createUser, updateUser } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handelSignUp = data => {
        setRegError('')
        setLoading(true)
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
                   

                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user
                            console.log(user)
                            toast.success('user create successfully')
                            setLoading(false)

                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url
                            }
                            updateUser(userInfo)
                                .then(() => {
                                    console.log('update successfully')
                                    saveUser(data.name, data.email, data.select, imgData.data.url)

                                    reset();
                                    navigate('/')
                                })
                                .catch(err => console.log(err));

                        })
                        .catch(error => {
                            console.error(error)
                            setRegError(error.message)
                            setLoading(false)

                        })

                }
            })

        // console.log(data)
      
            
            
    }
    const saveUser = (name, email, role, photoUrl, verify="false") => {
        const user = { name, email, role, photoUrl, verify };
        fetch('https://server-site-coral.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('save-user', data)
              

            })
    }
//     if (loading === true) {
//     return <Loading></Loading>
// }
   
    return (
        <div>
            {
                loading && <Loading></Loading>
            }
            <div className=" grid md:grid-cols-2   mx-auto gap-7 mt-5 items-center">


                <div>
                    <div >
                        <Lottie animationData={reader} loop={true} className='h-fit' />

                    </div>
                </div>
                <div>
                    <div>
                        <div className='flex justify-center '>

                            <div className="w-full max-w-md p-8 space-y-1 rounded-xl bg-slate-400 dark:text-gray-100">
                                <h1 className="text-2xl font-bold text-center">Register</h1>
                                <form onSubmit={handleSubmit(handelSignUp)} className="space-y-4 ng-untouched ng-pristine ng-valid">
                                    <div className="space-y-1 text-sm">
                                        <label htmlFor="username" className="block text-white">Full Name</label>
                                        <input type="text"
                                            {...register("name",
                                                { required: "name is required" })}
                                            id="name" placeholder="your name" className="w-full px-4 py-2 shadow-xl rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none" required />
                                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-1 text-sm">
                                        <label
                                            htmlFor="dropzone-file"
                                            className="flex items-center px-3 py-2 mx-auto mt-6 text-center bg-white border   rounded-md cursor-pointer"
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

                                            <h2 className="mx-3 text-gray-400">Select Your Photo</h2>

                                            <input
                                                {...register("url", {
                                                    required: "Image is required",
                                                })}
                                                id="dropzone-file"
                                                type="file"
                                                className="hidden"
                                               
                                            />
                                        </label>
                                        {errors.url && <p className='text-red-600'>{errors.url.message}</p>}
                                    </div>
                                    <div className="space-y-1 text-sm">
                                        <label htmlFor="select" className="block text-white">Select Role</label>
                                        <select
                                            {...register("select", {
                                                required: "Please Select One",
                                            })}
                                            className="w-full px-4 py-2 shadow-xl rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none "
                                            required >
                                            <option value={''} disabled hidden selected required>
                                                Select One
                                            </option>
                                            <option value="Seller">Seller</option>
                                            <option value="Buyer">Buyer</option>
                                        </select>
                                        {errors.select && (
                                            <p className="text-red-600" role="alert">
                                                {errors.select?.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-1 text-sm">
                                        <label htmlFor="username" className="block text-white">Email</label>
                                        <input type="email"
                                            {...register("email",
                                                { required: "email is required" })}
                                            id="username" placeholder="your email" className="w-full shadow-xl px-4 py-2 rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none " required />
                                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-1 text-sm relative">
                                        <label htmlFor="password" className="block text-white">Password</label>
                                        <input type={showPass ? 'text' : "password"}

                                            {...register("password",
                                                { required: "password is required" })}
                                            id="password" placeholder="Password" className="w-full px-4 py-2 rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none" />
                                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                                        <div className="flex justify-center text-xs text-red-800" required>

                                        </div>
                                        <div className="absolute right-3 top-7 text-gray-700" onClick={() => setShowPass(!showPass)}>
                                            {showPass ? <AiFillEyeInvisible className='h-6 w-6' /> : <AiFillEye className='h-6 w-6' />}
                                        </div>
                                    </div>

                                    {regError && <p className='text-red-600'>{regError}</p>}

                                    <button
                                        // disabled={!accepted}
                                        className="block  shadow-md w-full p-3 text-center rounded-lg bg-gradient-to-r from-violet-400 to-purple-300 sign-button">Register</button>
                                </form>


                                <div className="flex items-center pt-4 space-x-1">
                                    <p className="text-xs text-center sm:px-6 text-white">Already have an account?
                                        <Link to='/login' className="underline ml-3 text-blue-900 text-lg">Log In</Link>
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
        
    );
};

export default Register;