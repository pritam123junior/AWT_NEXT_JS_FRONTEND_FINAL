import React, { useState } from "react";
import Form from "../components/Form";
import Heading from "../components/Heading";
import SignUpForm from "./components/SignUpForm";

const page = () => {
    return (
        <div className="h-full w-full flex flex-col bg-gray-900 justify-center items-center gap-4">
           
           <h1 className="block text-gray-600 font-bold " > </h1>
            <SignUpForm />
        </div>
    );
};

export default page;
