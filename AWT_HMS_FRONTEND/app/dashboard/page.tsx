"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import LoginChecker from "../auth/LoginChecker";
import SearchUser from "./components/SearchUser";

const Dashboard = () => {
    return (
      
          < div className="h-full w-full flex-col bg-blue-950  gap-4">
            <LoginChecker />
            
            <h2 className="mt-6  text-3xl font-extrabold text-gray-100">DashBoard </h2>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome</h2>
            <div className="flex-1 flex gap-2 flex-col justify-center items-center px-10">
                <h1 className="text-lg font-bold ">Search Users</h1>
                <hr className="bg-white h-[1px] w-full" />
                <SearchUser></SearchUser>
                
            </div>
      
            <div className="flex-1 flex mt-6  text-2xl font-extrabold text-gray-100 gap-2 flex-col">
            <hr className="bg-white h-[1px] w-full" />
                <Link href="/Profile">View Profile</Link>

                <Link href="/ManageUser">User Management</Link>

                <Link href="/Admin/">Admin</Link>
                <Link href="/dashboard/users/4">About</Link>
                <Link href={"/dashboard/users/5"}>Setting</Link>

            </div>
        </div>
    );
};

export default Dashboard;