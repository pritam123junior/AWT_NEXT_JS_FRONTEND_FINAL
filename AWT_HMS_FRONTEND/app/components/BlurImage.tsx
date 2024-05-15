import Image from 'next/image';

import { useState } from 'react';

export default function BlurImage({ src }: any) {
  

  return (
    <a href={src.href} className='group'>
      <div className=' rounded-lg bg-gray-00'>
        <Image
          alt=''
          src={src}
          layout=''
          objectFit='cover'
          className={`
              duration-700 ease-in-out group-hover:opacity-5
             `}
         
       />
      </div>
    </a>
  );
}
