import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import Link from "next/link";
import { RiLockPasswordLine } from 'react-icons/ri'
import { AiFillTwitterCircle, AiOutlineMail } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import BlurImage from "@/app/components/BlurImage";
import HMS7 from '/public/HMS4.jpg';
const SignInForm = () => {
    const [name, setname] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const route = useRouter();
    const handleClick = () => {
        setError("");
        if (!name || !password) {
            setError("Please fill in all the fields.");
        } else {
            login();
        }
    };
    const login = async () => {
        setLoading(true);
        try {
            const reqBody = {
                password: password,
                name: name,
            };
            const response = await axios.post(
                "http://localhost:8000/admin/signin",
                reqBody
            );
            const data = response.data;
            console.log("data", data);
            if (data.error) {
                const errMessage = data.message[0];
                setError(errMessage);
                setLoading(false);
                return;
            }

            console.log("data", data);
            const access_token = data.access_token;
            console.log(`Access token: ${access_token}`);
            localStorage.setItem("access_token", access_token);

            setLoading(false);
            alert("successfully registered");
            route.push("/Admin/Home");
        } catch (error: any) {
            console.log("error occured :", error);
            setError("Invalid Credentials");
            setLoading(false);
        }
    };
    return (
     <>
       <div className='flex min-h-screen items-center justify-center bg-gray-900  pt-2'>
          <div className='px-8 md:w-1/2 md:px-16'>
            <div className='mb-8 flex'>
              <div className='flex items-center'>
                <a href='/' className='flex text-white hover:text-black-500'>
                  <svg
                    width='60'
                    height='35'
                    viewBox='0 0 76 47'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_2_577)'>
                    <path
                        d='M68.2416 44.9145V2.63986'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                     
                      <path
                        d='M55.223 28.1228C55.223 32.7172 53.4109 37.1234 50.1853 40.3722C46.9598 43.6209 42.585 45.4461 38.0234 45.4461C33.4618 45.4461 29.087 43.6209 25.8615 40.3722C22.636 37.1234 20.8239 32.7172 20.8239 28.1228'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                      <path
                        d='M59.8708 28.1218L40.1473 8.67923C39.5816 8.12149 38.8214 7.80914 38.0298 7.80914C37.2382 7.80914 36.478 8.12149 35.9123 8.67923L16.1918 28.1218'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                      <path
                        d='M68.2416 44.9145V2.63986'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                     
                      
                      <path
                        d='M38.0313 44.9669C42.4736 44.9669 46.0748 40.8603 46.0748 35.7945C46.0748 30.7288 42.4736 26.6221 38.0313 26.6221C33.589 26.6221 29.9878 30.7288 29.9878 35.7945C29.9878 40.8603 33.589 44.9669 38.0313 44.9669Z'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                     
                    </g>
                    <defs>
                      <clipPath id='clip0_2_577'>
                        <rect
                          width='74.7995'
                          height='45.7056'
                          fill='white'
                          transform='translate(0.931335 0.979797)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2 className='ml-3 text-2xl font-bold text-[#EB5148] hover:text-orange-500'>
                    Hospital Management System
                  </h2>
                </a>
              </div>
            </div>
            <h2 className='flex-1 block text-gray-600 font-bold mb-1'>Sign In</h2>
            <div className='mb-8 mt-3 text-xs flex-1 block text-gray-600 font-bold mb-1'>
              <p>If you don’t have an account register.</p>
              <p>
                You can{' '}
                <button className='duration-180 text-[#EB5148] hover:font-bold'>
                  <Link href='../auth/signUp'>Register Here!</Link>
                </button>
              </p>
            </div>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1">User Name :</span>
                <input
                    className="text-black rounded-xl flex-1"
                    name="username"
                 
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1">Password :</span>
                <input
                    type="password"
                    className="text-black  rounded-xl flex-1"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </p>
            <button
                type="button"
                disabled={loading}
                className="p-2 bg-green-400 hover:bg-green-500 active:bg-green-600 disabled:bg-green-700 rounded-2xl"
                onClick={handleClick}>
                 
                Login
            </button>

                        <div className='py-4 text-xs text-[#002D74]'>
                            <a href='#'>Forgot your password?</a>
                        </div>
                        {/*  */}
                        <div className='mt-6 grid grid-cols-3 items-center text-gray-400'>
                            <hr className='border-gray-400' />
                            <p className='text-center text-sm'>or continue with</p>
                            <hr className='border-gray-400' />
                        </div>

                        <div className='mx-auto mt-8 flex items-center justify-evenly py-2'>
                            <button className='rounded-xl border  bg-white text-sm text-[#002D74] duration-300 hover:scale-105'>
                                <BiLogoFacebookCircle className='mr-2 text-4xl' />
                            </button>
                            <button className='rounded-xl border bg-white text-sm text-[#002D74] duration-300 hover:scale-105'>
                                <AiFillTwitterCircle className='mr-2 text-4xl' />
                            </button>
                            <button className='rounded-xl border bg-white text-sm text-[#002D74] duration-300 hover:scale-105'>
                                <FcGoogle className='mr-2 text-4xl' />
                            </button>
                        </div>
                </div>

                <div className='flex max-h-screen hidden w-1/2 md:block'>
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={HMS7}
                    />
                  </div>
                  </div>
                </div>
            
                </div>
    
    </>

    );
};

export default SignInForm;
