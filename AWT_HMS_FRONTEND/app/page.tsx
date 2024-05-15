
import Image from 'next/image';
import React from "react";
import G1 from './../public/G1.jpg';
import G2 from './../public/G2.jpg';
import G3 from './../public/G3.jpg';
import G4 from './../public/G4.jpg';
import HMS from './../public/HMS.jpg';
import G6 from './../public/G6.jpg';
import HMS1 from './../public/HMS1.jpg';
import HMS5 from './../public/HMS5.jpg';
import HMS6 from './../public/HMS6.jpg';
import HMS4 from './../public/HMS4.jpg';
import HMS7 from './../public/HMS.jpg';
import HMS3 from './../public/HMS3.jpg';
import HMS11 from './../public/HMS11.jpg';
import BlurImage from './components/BlurImage';
;

export default function Home() {
    return <main  className="min-h-screen flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
<h2 className="mt-6 text-center text-4xl font-extrabold text-gray-50">Welcome to Hospital Management system</h2>
      <div className="max-w-md w-full space-y-8"></div>
      
         <div className=' flex w-full items-center justify-center'>
        <div className='container'>
          <div className='flex items-center justify-center rounded-lg'>
            <h1 className='mr-[-10rem] hidden -rotate-90 text-center text-4xl font-extrabold leading-none tracking-tight text-black sm:block md:block lg:text-6xl'>
             
            </h1>
            <div className='mx-auto lg:px-32 lg:pt-24'>
              <div className='-m-1 flex flex-wrap md:-m-2'>
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-1/2 p-1 md:p-2'>
               <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={HMS1}
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={HMS3}
                    />
                  </div>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={HMS6}
                    />
                  </div>
                </div>
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={HMS4}
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={HMS11}
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <Image
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={HMS7}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>;
}