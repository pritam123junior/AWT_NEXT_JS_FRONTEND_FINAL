"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ProfileCard(props: any) {
    const route = useRouter();
    const handleClick = () => {
        localStorage.removeItem("access_token");
        route.push("./ManageUser/CRUD");
    };

    return (<>
 
 <div className='mx-auto max-w-screen-xl bg-gray-900 px-4 pt-4 md:px-8'>
          <div className='mb-4 items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
            <div className='max-w-lg'>
        <h2 className="text-xl font-bold text-gray-500">PROFILE</h2>
        <p className="text-gray-400 mt-2">{props.data.name}</p> {/* Display user's name */}
               
        <p className="text-gray-400 mt-2">Email:  {props.data.email}</p> 
        <p className="text-gray-400 mt-2">Phone Number:  {props.data.phone}</p> 
        <p className="text-gray-400 mt-2">Address:  {props.data.address}</p> 
        
        </div>
      </div>
   </div>

    </>);

}