"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function UserCard(props: any) {
    const route = useRouter();
    const handleClick = () => {
        localStorage.removeItem("access_token");
        route.push("./ManageUser/CRUD");
    };

    return (<>
 
 <div className='mx-auto max-w-screen-xl bg-gray-900 px-4 pt-4 md:px-8'>
          <div className='mb-4 items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
            <div className='max-w-lg'>
                <h2 className="card-title block text-gray-500 font-bold ">ID: {props.data.ID}</h2>
                Name:  {props.data.fullName} <br />
                Qualification:  {props.data.Qualification}<br />
                Salary :  {props.data.salary}<br />
                Email:  {props.data.Email}<br />
            Phone Number:  {props.data.PhoneNumber}<br />
                Schedule:  {props.data.Schedule}<br />
                <div className="card-actions gray-800 justify-end">
                <button className="bg-red-600 px-2 py-1" onClick={handleClick}>
            Manage Users
        </button>
                </div>
            </div>
            </div>
</div>
    </>);

}