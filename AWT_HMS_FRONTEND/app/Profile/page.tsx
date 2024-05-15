// pages/Profile.js
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlurImage from '../components/BlurImage';

import PP3 from '/public/PP3.jpg';
const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [newBio, setNewBio] = useState('');

  useEffect(() => {
    // Fetch user info
    axios.get('').then((response) => {
      setUser(response.data);
      setNewBio(response.data.bio);
    });
  }, []);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    // Update user info
    axios.put('', { bio: newBio }).then((response) => {
      setUser(response.data);
      setEditing(false);
    });
  };

  

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-center mt-8">
        <div className='flex w-1/2 flex-wrap'>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={PP3}
                    />
                  </div>
        </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-gray-800"></h2>
          <p className="text-gray-600 mt-2">Adityo Das</p>
          {editing ? (
            <textarea
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={newBio}
            
            ></textarea>
          ) : (
            <p className="text-gray-600 mt-2">Admin</p>
          )}
          <div className="flex justify-center mt-4">
            {editing ? (
              <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
