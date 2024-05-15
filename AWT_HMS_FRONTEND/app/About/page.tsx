import React from 'react';
import Navbar from '../components/Navbar';

import PDP from '/public/PDP.jpg';

import { CgFacebook } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io5';
import { BiHotel } from 'react-icons/bi';

import BlurImage from '@/app/components/BlurImage';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <section>
        <section className='bg-gray-900 antialiased'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24'>
            <div className='mx-auto max-w-3xl text-center'>
              <h2 className='text-4xl font-extrabold leading-tight tracking-tight text-white'>
                Hospital Manaagement System
              </h2>

              <div className='mt-4'>
                <Link
                  href='#'
                  title=''
                  className='text-primary-600 dark:text-primary-500 inline-flex items-center text-lg font-medium text-[#EB5148] hover:underline'
                >
                  Connect with us
                  <svg
                    aria-hidden='true'
                    className='ml-2 h-5 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className='mx-auto mt-8 flow-root max-w-3xl sm:mt-12 lg:mt-16'>
              <div className='-my-4 divide-y divide-gray-200 dark:divide-gray-700'>
                <div className='flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6'>
                  <p className='w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right'>
                    2019
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <Link href='#' className='hover:underline'>
                      We started our journey
                    </Link>
                  </h3>
                </div>

               
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <section className='bg-white dark:bg-gray-900'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16'>
            <figure className='mx-auto max-w-screen-md'>
              <svg
                className='mx-auto mb-3 h-12 text-orange-400 dark:text-[#EB5148]'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote className=''>
                <p className='bg-gradient-to-r from-neutral-100 via-orange-700 to-neutral-200 bg-clip-text text-2xl font-medium text-transparent'>
                  "   Welcome to our Hospital Management System. Our state-of-the-art facility is dedicated to providing
        exceptional medical care and treatment. With a team of highly skilled professionals and advanced
        medical equipment, we ensure the best possible health outcomes for our patients"
                </p>
              </blockquote>
            </figure>
          </div>
        </section>
      </section>

      <section>
        <section className='bg-white dark:bg-gray-900'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16'>
            <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
              <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
                Our Goal
              </h2>
              <p className='font-light text-gray-500 dark:text-gray-400 sm:text-xl'>
              Our mission is to deliver compassionate care that is accessible to all. We believe in the power of
        healing and the importance of innovative medical research and education. Join us as we strive to make
        a difference in the lives of those we serve.
              </p>
            </div>
            <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16'>
              <div className='text-center text-gray-500 dark:text-gray-400'>
                </div>
             </div>
          </div>
        </section>
      </section>

      <section>
        <section className='bg-white dark:bg-gray-900'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 '>
            <div className='mx-auto mb-8 max-w-screen-sm text-center lg:mb-16'>
              <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
                Our CEO
              </h2>
              <p className='font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16'>
                Behind the Scenes Champions: Crafting Timeless Memories and
                Unforgettable Travels!
              </p>
            </div>
            <div className='mb-6 grid text-center items-center gap-8 md:grid-cols-2 lg:mb-16'>
              <div className='items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex'>
                <div className='flex w-1/2 flex-wrap'>
                  
                
                <div className='p-5'>
                  <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    <Link href='#'></Link>
                  </h3>
                  <span className='text-gray-500 dark:text-gray-400'>CEO</span>
                  <p className='mb-4 mt-3 font-light text-gray-500 dark:text-gray-400'>
                  The main factor behind all of our success and development
                  </p>
                  <div className='mt-4'>
                <span className='mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start'>
                  <a className='cursor-pointer text-gray-500 hover:text-white'>
                    <CgFacebook className='text-2xl' />
                  </a>
                  <a className='ml-3 cursor-pointer text-gray-500 hover:text-white'>
                    <IoLogoTwitter className='text-2xl' />
                  </a>
                </span>
              </div>
                 </div>
                   </div>
                   
            </div>
            
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-full p-1 items-center md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={PDP}
                    />
                  </div>
                
                <div className='p-5'>
                  <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    <Link href='#'></Link>
                  </h3>
                  <span className='text-gray-500 dark:text-gray-400'></span>
                  <p className='mb-4 mt-3 font-light text-gray-500 dark:text-gray-400'>
                    
                  </p>
                 
                   
            </div>
            </div>
         </div>
         </div>
        </section>
      </section>
      
    </>
  );
};

export default About;
