"use client";
import React, { useState } from "react";




import { useRouter } from "next/navigation";
import AddUserForm from "@/app/CRUD/components/Add";
import UpdateButton from "@/app/components/Update";
import AddButton from "@/app/components/Add";
import DeleteButton from "@/app/components/Delete";




const page = () => {
    const route = useRouter();
    const handleClick = () => {
        localStorage.removeItem("access_token");
        route.push("./CRUD");
    };
    return (
        <div className="flex  h-full w-full flex flex-col bg-gray-900 justify-center items-center gap-4">
           
           <h1 className="block text-gray-600 font-bold " > </h1>
           <p className="flex gap-6">
          
               
            
          <AddButton></AddButton>
       <UpdateButton></UpdateButton>
         <DeleteButton></DeleteButton>
         </p>
         <AddUserForm></AddUserForm>
         
        </div>
    );
};

export default page;
