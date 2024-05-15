
"use client";
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import Session from '../components/session';
import UserCard from '../components/usercard';
import Layout from '../Admin/Components/Layout/page';
import SearchUser from '../dashboard/components/SearchUser';

export default async function ManageUser() {
  const response: any = await axios.get('http://localhost:8000/Admin/list');
  const jsondata = response.data;


  return (<>
   <Layout></Layout>
   <SearchUser></SearchUser>
    <div className=" justify-center bg-gray-900 py-5 px-4 sm:px-6 lg:px-8">
      <Toaster />

      <div className="grid block text-gray-500 font-bold  grid-cols-3 gap-2">
        {jsondata.map((items: any, index: any) => {
          return (<div key={index}>

            <UserCard data={items} />
          </div>

          );
        }


        )}
      </div>
    </div>
  </>);
}



