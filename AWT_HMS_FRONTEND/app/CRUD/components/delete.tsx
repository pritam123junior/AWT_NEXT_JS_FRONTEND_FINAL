"use client";

import Form from "@/app/auth/components/Form";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const DeleteUserForm = () => {
    const [ID, setID] = useState<string>("");
    const [fullName, setfullName] = useState<string>("");
    const [Qualification, setQualification] = useState<string>("");
    const [salary, setsalary] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    const [PhoneNumber, setPhoneNumber] = useState<string>("");
    const [Schedule, setschedule] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
   
    const route = useRouter();
    const handleClick = () => {
        setError("");
        if (!ID) {
            setError("Please fill in all the fields.");
            return;
        }
      

    
        

        Delete();
    };
    const Delete = async () => {
       
        try {
            
            const response = await axios.delete(
                "http://localhost:8000/admin/${ID}",

            );
            const data = response.data;
            console.log("data", data);
            if (data.error) {
                const errMessage = data.message[0];
                setError(errMessage);
                setLoading(false);
                return;
            }

            console.log("data", data);
            

            setLoading(false);
            alert("Successfully Updated");
            route.push("/ManageUser");
        } catch (error: any) {
            console.log("error occured :", error);

            alert("Successfully Delete");
            setLoading(false);
            route.push("/ManageUser");
        }
    };
    return (
        <Form>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1"> ID :</span>
                <input
                    className="text-black flex-1"
                    name="ID"
                    value={ID}
                    onChange={(e) => setID(e.target.value)}
                />
            </p>
             
            <button
                type="button"
                disabled={loading}
                className="p-2 bg-green-400 hover:bg-green-500 active:bg-green-600 disabled:bg-green-500"
                onClick={handleClick}
            >
                Delete
            </button>
            <p className="text-red-500 w-full text-current">{error}</p>
        </Form>
    );
};

export default DeleteUserForm;
