// pages/Profile.js
import React, { useState, useEffect } from "react";

import profileImage from '..Documents/administrator_male_skin_type_7_48px.jpg'; // Import your profile image
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import ProfileCard from "@/app/components/profilecard";
export default async function Profileview() {
 

  const response: any = await axios.get('http://localhost:8000/Admin/adminlist');
  const jsondata = response.data;

  return (<>


    <div className=" justify-center bg-gray-800 py-5 px-4 sm:px-6 lg:px-8">
      <Toaster />

      <div className="grid block text-gray-600 font-bold  grid-cols-3 gap-2">
        {jsondata.map((items: any, index: any) => {
          return (<div key={index}>

            <ProfileCard data={items} />
          </div>

          );
        }


        )}
      </div>
    </div>
  </>);
}