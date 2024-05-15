

import React, { useState } from "react";
import axios from "axios";

interface User {
   ID:number,
    fullName: string,
    Qualification:string,
    salary: number,
    Email : string,
    PhoneNumber: string,
    Schedule: string
    // Add more fields as needed
}

const SearchUser: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<User[]>([]);
    const [error, setError] = useState<string>("");

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/Admin/search/${searchQuery}`); // Adjust the API endpoint as per your backend
            setSearchResults(response.data);
            setError("");
        } catch (error) {
            setError("Please fill the slot");
            console.error("Error fetching users:", error);
        }
    };

    return (
        <div className="w-full px-20  rounded-lg justify-center  items-center gap-3 ">
            <input
              className=" gray-900 justify-center  items-center rounded-lg text-black px-1"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by username..."
            />
              <button
                    className="bg-green-700  rounded-lg px-3 py-1 hover:bg-green-500"
                    onClick={handleSearch}
                >
                    Search
                </button>
            
            {error && <div>{error}</div>}
            <ul>
                {searchResults.map((user) => (
                    <li key={user.fullName}>
             <div className='mx-auto max-w-screen-xl bg-gray-900 px-4 pt-4 md:px-8'>
          <div className='mb-4 items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
            <div className='max-w-lg'>        
            <div className="flex text-lg flex-col gap-2">
            <div>ID: {user.ID}</div>
            <div>Fullname: {user.fullName}</div>
            <div>Qualification: {user.Qualification}</div>
            <div>Salary: {user.salary }</div>
            <div>Email: {user.Email }</div>
            <div>PhoneNumber: {user.PhoneNumber }</div>
            <div>Schedule: {user.Schedule}</div>
           
        </div>
        </div>
        </div>
        </div>
                        {/* Render additional user information */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchUser;