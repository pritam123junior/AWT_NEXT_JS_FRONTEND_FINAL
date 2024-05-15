"use client";

import Form from "@/app/auth/components/Form";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const AddUserForm = () => {
   
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
        if (!fullName || !Qualification || !salary || !Email||!PhoneNumber||!Schedule) {
            setError("Please fill in all the fields.");
            return;
        }
      

    
        

        Add();
    };
    const Add = async () => {
        setLoading(true);
        try {
            const reqBody = {
              
                fullName: fullName,
                Qualification: Qualification,
                salary: salary,
                Email : Email,
                PhoneNumber: PhoneNumber,
                Schedule: Schedule
            }; 
            const response = await axios.post(
                "http://localhost:8000/admin/add_Doctor",
                reqBody
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
            alert("successfully registered");
            route.push("/ManageUser");
        } catch (error: any) {
            console.log("error occured :", error);

            setError("error registering");
            setLoading(false);
        }
    };
    return (
        <Form>
              <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1"> Full Name :</span>
                <input
                    className="text-black flex-1"
                    name="username"
                    value={fullName}
                    onChange={(e) => setfullName(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1">Qualification :</span>
                <input
                    className="text-black flex-1"
                    name="Qualification"
                  
                    value={Qualification}
                    onChange={(e) => setQualification(e.target.value)}
                />
            </p>
          
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1">Salary :</span>
                <input
                    
                    className="text-black flex-1"
                    name="Salary"
                    value={salary}
                    onChange={(e) => setsalary(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1">Email :</span>
                <input
                    
                    className="text-black flex-1"
                    name="Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1"> Phone :</span>
                <input
                    className="text-black flex-1"
                    name="phone"
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </p>
            <p className="flex">
                <span className="flex-1 block text-gray-600 font-bold mb-1"> Schedule:</span>
                <input
                    className="text-black flex-1"
                    name="Schedule"
                    value={Schedule}
                    onChange={(e) => setschedule(e.target.value)}
                />
            </p>
            <button
                type="button"
                disabled={loading}
                className="p-2 bg-green-400 hover:bg-green-500 active:bg-green-600 disabled:bg-green-500"
                onClick={handleClick}
            >
                ADD
            </button>
            <p className="text-red-500 w-full text-current">{error}</p>
        </Form>
    );
};

export default AddUserForm;
