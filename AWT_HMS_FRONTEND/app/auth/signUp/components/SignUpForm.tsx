"use client";
import React, { useState } from 'react';
import {
  AiOutlineMail,
  AiOutlineUser,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { MdOutlineHotelClass } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import Link from 'next/link';
import HMS from '/public/HMS.jpg';

import axios from "axios";
import { useRouter } from "next/navigation";

import Form from "../../components/Form";
import BlurImage from '@/app/components/BlurImage';

const SignUpForm = () => {
    const [name, setname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [phone, setphone] = useState<string>("");
    const [address, setaddress] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const route = useRouter();
    const handleClick = () => {
        setError("");
        if (!name || !email || !password || !confirmPassword||!phone||!address) {
            setError("Please fill in all the fields.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwrods did not match");
            return;
        }

        if (password.length < 8) {
            setError("password must be longer than or equal to 8 characters");

            return;
        }
        
           if (!/\S+@\S+\.\S+/.test(email)) {
            setError( 'Invalid email address');
          }

        register();
    };
    const register = async () => {
        setLoading(true);
        try {
            const reqBody = {
                name: name,
                email: email,
                password: password,
                phone: phone,
                address:address,
            };
            const response = await axios.post(
                "http://localhost:8000/admin/register",
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

            setError("error registering");
            setLoading(false);
        }
    };
    return (
        <>
<div className='flex max-h-screen items-center rounded-2xl justify-center bg-gray-500  pt-2'>
          
          <div className='px-8 md:w-1/2 md:px-16'>
            <div className='mb-8 flex'>
              <MdOutlineHotelClass className='text-3xl text-[#EB5148]' />
              <h2 className='ml-3 text-2xl font-bold'>
                <Link href='../' legacyBehavior>
                  <a> Hospital Management System</a>
                </Link>
              </h2>
            </div>
            <h2 className='text-2xl font-bold'>Sign Up</h2>
            <div className='mb-8 mt-3 text-xs'>
              <p>If you already have an account registered</p>
              <p>
                You can{' '}
                <button className='duration-180 text-[#EB5148] hover:font-bold'>
                  <Link href='../Login'>Login here!</Link>
                </button>
              </p>
            </div>

       
              <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1"> Name :</span>
                <input
                    className="text-black rounded-xl flex-1"
                    name="username"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1">Email :</span>
                <input
                    className="text-black rounded-xl flex-1"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </p>
          
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1">Password :</span>
                <input
                    type="password"
                    className="text-black rounded-xl flex-1"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1">Confirm Password :</span>
                <input
                    type="password"
                    className="text-black rounded-xl flex-1"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1"> Phone :</span>
                <input
                    className="text-black rounded-xl flex-1"
                    name="phone"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1"> Address :</span>
                <input
                    className="text-black rounded-xl flex-1"
                    name="address"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                />
            </p>
            <button
                type="button"
                disabled={loading}
                className="p-2 bg-green-400  rounded-xl hover:bg-green-500 active:bg-green-600 disabled:bg-green-500"
                onClick={handleClick}
            >
                Sign Up
            </button>
            <p className="text-red-500 w-full text-current">{error}</p>
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

          <div className='hidden w-1/2 md:block'>
          
              <div className='w-1/2 p-1 md:p- flex max-h-screen hidden w-1/2 md:block rounded-2xl'>
               <BlurImage
                      alt='gallery'
                      className='block h-600 w-400  flex min-h-screen hidden w-1/5 md:block rounded-2xl rounded-lg object-cover object-center'
                      src={HMS}
                    />
                  </div>
            
          </div>
        </div>
        
      
    </>
    );
};

export default SignUpForm;
