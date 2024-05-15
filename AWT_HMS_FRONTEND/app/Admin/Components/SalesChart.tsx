import { useEffect, useState } from 'react';


import { BiSolidReport } from 'react-icons/bi';
import { AiFillDatabase } from 'react-icons/ai';
import axios, { AxiosHeaders } from 'axios';
function SalesReport() {
  const [roleCounts, setRoleCounts] = useState({
    customer: 0,
    employee: 0,
    hotelManager: 0,
    tpmanager: 0,
  });

  useEffect(() => {
    fetchRoleCounts();
  }, []);

  const fetchRoleCounts = async () => {
    try {
      const response = await axios.get('/admin/user-count');
      setRoleCounts(response.data);
    } catch (error) {
      console.log('Error fetching role counts:', error);
    }
  };


  return (
  <>
    <div className='ml-2 mt-1 w-[650px] items-start justify-between rounded-lg border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'></div>
      <div className='flex'>
        <div>
          <div className='ml-2 mt-1 w-[650px] items-start justify-between rounded-lg border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
            
          
        <div>
          <div className='ml-2 mt-1 w-[600px] items-start justify-between rounded-lg border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
            <div className='max-w-lg'>
              <h3 className='text-xl font-bold text-white sm:text-2xl'>
               User Data
              </h3>
            </div>
          </div>
          <div>
            <div className='flex'>
              <div className='mb-2 ml-2 mt-2 h-[165px] w-[296px] items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
                <div>
                  <div className='absolute text-center'>
                    <p className='ml-8 text-center text-lg text-gray-300'>
                      Total Nurses
                    </p>
                    <div className='mb-2 ml-10 mt-2 items-start justify-between rounded-lg border border-gray-600 bg-gray-900 p-4 tracking-widest shadow-lg hover:bg-gray-700 hover:text-orange-800 sm:p-6 md:flex 2xl:col-span-2'>
                      <div className='flex w-full items-center justify-center pl-12 pr-12 hover:text-orange-600 '>
                        <p className='text-bold text-2xl text-white hover:text-orange-600'>
                        467
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-2 ml-2 mt-2 h-[165px] w-[296px] items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
                <div>
                  <div className='absolute text-center'>
                    <p className='ml-8 text-center text-lg text-gray-300'>
                      Total Doctors
                    </p>
                    <div className='mb-2 ml-10 mt-2 items-start justify-between rounded-lg border border-gray-600 bg-gray-900 p-4 tracking-widest shadow-lg hover:bg-gray-700 hover:text-orange-800 sm:p-6 md:flex 2xl:col-span-2'>
                      <div className='flex w-full items-center justify-center pl-12 pr-12 hover:text-orange-600 '>
                        <p className='text-bold text-2xl text-white hover:text-orange-600'>
                         267
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className='mb-2 ml-2 h-[175px] w-[296px] items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
                <div>
                  <div className='absolute text-center'>
                    <p className='ml-8 text-center text-lg text-gray-300'>
                      Total Patient
                    </p>
                    <div className='mb-2 ml-10 mt-2 items-start justify-between rounded-lg border border-gray-600 bg-gray-900 p-4 tracking-widest shadow-lg hover:bg-gray-700 hover:text-orange-800 sm:p-6 md:flex 2xl:col-span-2'>
                      <div className='flex w-full items-center justify-center pl-12 pr-12 hover:text-orange-600 '>
                        <p className='text-bold text-2xl text-white hover:text-orange-600'>
                          789
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-2 ml-2 h-[175px] w-[296px] items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
                <div>
                  <div className='absolute text-center'>
                    <p className='ml-8 text-center text-lg text-gray-300'>
                     Total Receptionnists
                    </p>
                    <div className='mb-2 ml-10 mt-2 items-start justify-between rounded-lg border border-gray-600 bg-gray-900 p-4 tracking-widest shadow-lg hover:bg-gray-700 hover:text-orange-800 sm:p-6 md:flex 2xl:col-span-2'>
                      <div className='flex w-full items-center justify-center pl-12 pr-12 hover:text-orange-600 '>
                        <p className='text-bold text-2xl text-white hover:text-orange-600'>
                          234
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=' border-t border-gray-600' />
     
      <div className='mx-auto max-w-screen-xl bg-gray-900  pt-2 md:px-2'>
        <div className='mb-4 items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
          <div className='max-w-lg'>
            <h3 className='text-xl font-bold text-white sm:text-2xl'>Logs</h3>
            <p className='mt-2 text-white'>Find service reports here.</p>
          </div>
          
       
      
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default SalesReport;
