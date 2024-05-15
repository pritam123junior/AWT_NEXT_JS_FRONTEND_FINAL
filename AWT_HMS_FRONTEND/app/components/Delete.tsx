"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = () => {
    const route = useRouter();
    const handleClick = () => {
        localStorage.removeItem("access_token");
        route.push("/CRUD/Delete");
    };
    return (
        <button className="bg-red-600 px-2 py-1" onClick={handleClick}>
            Delete
        </button>
    );
};

export default DeleteButton;
