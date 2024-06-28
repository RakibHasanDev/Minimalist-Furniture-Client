import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react'
import reader from '../../../src/assets/106680-login-and-sign-up.json'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [loginError, setLoginError] = useState('')
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [showPass, setShowPass] = useState(false)
    const { signIn, providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
   

    const handelLogin = data => {
        console.log(data)

        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('User Login Successfully')
                reset()
                navigate(from, { replace: true });
                
                
            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message)
            });
            
    }

    const googleSignInHandler = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                // toast.success('User Login SuccessFully')
                saveUser(user?.displayName, user?.email, user?.photoURL)
                navigate(from, { replace: true });

            })
            .catch(error => {
              console.error(error)
          })
    }
    const saveUser = (name, email, photoUrl, role = "Buyer", verify = "false") => {
        const user = { name, email, role, photoUrl, verify };
        fetch('https://minimalfurniture.vercel.app/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
               console.log(data)
                if (data.acknowledged) {
                    toast.success('User Login Successfully')
                    
                }

            })
    }
    return (
        <div className=" grid md:grid-cols-2  mx-auto gap-7 mt-5 mb-10 items-center">

            <div className='hidden md:block'>

                <div className='mx-auto '>

                    <Lottie animationData={reader} loop={true}/>

                </div>

            </div>
            <div>
                <div className='flex justify-center '>
                    <div className="w-full max-w-md p-4 rounded-md  sm:p-8  text-white shadow-lg bg-slate-400">
                        <h2 className="mb-3 text-3xl font-semibold text-center ">Login to your account</h2>
                       
                       
                        <form onSubmit={handleSubmit(handelLogin)}  className="space-y-5 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm  text-white ">Email address</label>
                                    <input type="email"
                                        {...register("email",
                                            { required: "email is required" })}
                                        id="email" placeholder="Your Email" className="w-full px-8 py-2  rounded-md bg-white shadow-2xl text-gray-900 placeholder:text-gray-500 focus:outline-none" required />
                                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                                </div>
                                <div className="space-y-2 relative">
                                    <div className="flex justify-between">
                                        <label htmlFor="password" className="text-sm">Password</label>
                                    </div>
                                    <input type={showPass ? 'text' : "password"}
                                        {...register("password",
                                            { required: "password is required" })}
                                        id="password" placeholder="*****" className="w-full px-8 py-2 relative font-semibold rounded-md bg-white shadow-2xl text-gray-900 placeholder:text-gray-500 focus:outline-none" required />
                                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                                    <div className="absolute right-3 top-7 text-gray-700" onClick={() => setShowPass(!showPass)}>
                                        {showPass ? <AiFillEyeInvisible className='h-6 w-6' /> : <AiFillEye className='h-6 w-6' />}
                                    </div>
                                 
                                </div>
                                {
                                    loginError && <p className='text-red-600'>{loginError}</p>
                                }
                               
                            </div>

                            <button className="w-full px-8 py-3  rounded-md sign-button text-white h-14 bg-gradient-to-r from-violet-400 to-purple-300">Sign in</button>
                         
                        </form>
                        <p className="text-sm text-start mt-3  text-white ">Don't have account?
                            <Link to='/register' className='underline ml-3 text-blue-900 text-lg'>Sign up here</Link>
                        </p>
                        <div className="flex items-center w-full mt-2">
                            <hr className="w-full text-gray-400" />
                            <p className="px-3 text-gray-100">OR</p>
                            <hr className="w-full text-gray-400" />
                        </div>
                        <div className="my-2 space-y-2">
                            <button onClick={googleSignInHandler} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-800 text-white  bg-gradient-to-r from-violet-400 to-purple-300 shadow-2xl font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>

                        </div>
                      
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;