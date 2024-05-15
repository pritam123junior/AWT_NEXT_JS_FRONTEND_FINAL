"use client";
import React from "react";

import Heading from "../components/Heading";
import SignInForm from "./components/SignInForm";

const page = () => {
    const handleClick = () => {};
    return (
        
        <div className="h-full w-full flex flex-col bg-gray-800 justify-center items-center gap-4">
           
           
            <SignInForm />
            
        </div>
    );
};

export default page;
