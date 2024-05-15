"use client";
import React, { useState } from "react";




import { useRouter } from "next/navigation";
import AddUserForm from "@/app/CRUD/components/Add";
import UpdateUserForm from "./components/update";
import UpdateButton from "../components/Update";
import DeleteButton from "../components/Delete";
import AddButton from "../components/Add";




const page = () => {
    const route = useRouter();
    const handleClick = () => {
        localStorage.removeItem("access_token");
        route.push("./ManageUser/CRUD");
    };
    return (
        <div className="flex  h-full w-full flex flex-col bg-gray-900 justify-center items-center gap-4">
           
           <h1 className="block text-gray-600 font-bold " > </h1>
           <p className="flex gap-6">
          
               
            
        <AddButton></AddButton>
       <UpdateButton></UpdateButton>
        <DeleteButton></DeleteButton>
         </p>
       <UpdateUserForm></UpdateUserForm>
        </div>
    );
};

export default page;
