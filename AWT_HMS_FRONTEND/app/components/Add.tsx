"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AddButton = () => {
    const route = useRouter();
    const handleClick = () => {
        localStorage.removeItem("access_token");
        route.push("ManageUser/CRUD");
    };
    return (
        <button className="bg-red-600 px-2 py-1" onClick={handleClick}>
        ADD
        </button>
    );
};

export default AddButton;
