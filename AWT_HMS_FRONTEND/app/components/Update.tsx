"use client";
import { useRouter } from "next/navigation";
import React from "react";

const UpdateButton = () => {
    const route = useRouter();
    const handleClick = () => {
        localStorage.removeItem("access_token");
        route.push("/CRUD");
    };
    return (
        <button className="bg-red-600 px-2 py-1" onClick={handleClick}>
            Update
        </button>
    );
};

export default UpdateButton;
