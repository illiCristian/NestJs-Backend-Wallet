import Image from 'next/image';
import React from 'react';
import imageItem from '../../../public/assets/dashboard/image-item.png';

export default function ActivityItem() {
  return (
    <>
      <section className='w-[750px] h-[570px] flex justify-between mt-5 '>
        <div className='flex gap-8 '>
          <Image
            src={imageItem}
            className=' w-[47px] h-[47px]'
            alt='image-item'
          />
          <div className='flex flex-col '>
            <div className=' text-start text-black text-base font-normal leading-normal'>
              Recarga de celular
            </div>
            <div className=' text-start text-neutral-500 text-base font-normal leading-normal'>
              Claro
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className=' text-center text-black text-base font-normal leading-normal'>
            -$2000
          </div>
          <div className='text-center text-neutral-500 text-base font-normal leading-normal'>
            Ayer
          </div>
        </div>
      </section>
    </>
  );
}
