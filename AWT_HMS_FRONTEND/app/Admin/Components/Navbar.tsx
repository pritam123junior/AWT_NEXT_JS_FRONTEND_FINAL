
import React, { useContext, useEffect, useRef, useState } from 'react';

import { MdNotifications, MdOutlineHotelClass } from 'react-icons/md';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';

import Link from 'next/link';

import { useRouter } from 'next/router';
import Clock from './Clock';

import useFetchUserData from '@/app/api/User/useFetchUserData';
import useComponentVisible from '@/app/hooks/useComponentVisible';
import { GlobalContext } from '@/app/context/GlobalContext/page';

const NavigationBar = () => {
  
  const store = useContext(GlobalContext);
  const { isOpen, setIsOpen } = store as any;
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const toggleDropdown = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  interface UserData {
    Picture: string;
    Email: string;
    Username: string;
    Role: string;
  }
  const userData: UserData | null = useFetchUserData() as UserData | null;
  const handleLogout = () => {
    localStorage.removeItem('user');
 
    sessionStorage.removeItem('token');
    window.location.href = '../../PTR';
  };
  return (
    <nav className='fixed z-30 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <div className='lg:hidden'>
              <button onClick={() => setIsOpen((prev: boolean) => !prev)}>
                {!isOpen ? (
                  <HiOutlineBars3CenterLeft size={30} color='#fff' />
                ) : (
                  <LiaTimesSolid size={30} color='#fff' />
                )}
              </button>
            </div>
            <div className='flex items-center'>
              <a href='/' className='flex text-white hover:text-orange-700'>
                
                <h2 className='ml-3 text-2xl font-bold hover:text-orange-700'>
                  Hospital Manament
                </h2>
              </a>
            </div>
            <a href='/Admin/Home' className='text-orange-600 hover:text-white'>
              <div className='flex gap-3 px-8'>
                <svg
                  className='h-6 w-6 text-orange-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                Admin Panel
              </div>
            </a>
            <div className='flex select-none items-center space-x-4'>
              <div className='flex justify-between rounded-lg border border-gray-600 bg-gray-900 py-1.5 hover:bg-gray-700 lg:border-2 lg:border-gray-700 lg:px-32 '>
                <Clock />
              </div>
            </div>
          </div>

          <div className='flex items-center space-x-4'>
            <MdNotifications size={22} className='text-gray-200' />
            <div className='relative'>
              <button
                type='button'
                className='flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                id='user-menu-button-2'
                aria-expanded={isComponentVisible}
                onClick={toggleDropdown}
              >
                <span className='sr-only'>Open user menu</span>
                {userData && userData.Picture && (
                  <img
                    className='h-8 w-8 rounded-full'
                    src={userData.Picture}
                    alt='user'
                  />
                )}
              </button>
              <div ref={ref}>
                {isComponentVisible && (
                  <div
                    className='absolute right-0 z-50 mt-2 w-56 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700'
                    id='dropdown-2'
                  >
                    <div className='px-4 py-3'>
                      {userData && (
                        <p className='text-sm text-gray-900 dark:text-white'>
                          {userData.Username} ({userData.Role})
                        </p>
                      )}
                      {userData && (
                        <p className='truncate text-sm font-medium text-gray-900 dark:text-gray-300'>
                          {userData.Email}
                        </p>
                      )}
                    </div>
                    <ul className='py-1'>
                      <li>
                        <a
                          href='/Admin/Home'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href='/Admin/Settings'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          Settings
                        </a>
                      </li>

                      <li>
                        <Link onClick={handleLogout} href='/' passHref>
                          <div className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'>
                            Sign out
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
