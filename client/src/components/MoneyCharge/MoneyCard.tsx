import React from 'react';
import payments from '../../../public/assets/money-charge/payments.svg';
import arrow from '../../../public/assets/money-charge/arrow.svg';

import Image from 'next/image';
import Link from 'next/link';

export default function MoneyCard() {
  return (
    <>
      <section className='flex flex-col gap-4 w-[1142px] h-[89px] bg-white rounded-lg shadow-[0px_4px_4px_0px_#00000025] px-5 py-5'>
        <Link href={'#'} className=' flex justify-between'>
          <div className=' flex gap-3'>
            <Image
              src={payments}
              alt='user'
              className='w-6 h-6 justify-start items-start inline-flex'
            />
            <div className='flex flex-col gap-1'>
              <h4 className=' text-black text-base font-semibold leading-normal'>
                Otras tiendas
              </h4>
              <div className='flex gap-3'>
                <h5 className=' text-neutral-500 text-base font-normal leading-normal'>
                  Con costo
                </h5>
                <div className='w-1 h-1 bg-neutral-500 rounded-full p-auto mt-3 '></div>
                <h5 className=' text-neutral-500 text-base font-normal leading-normal'>
                  Instanáneo
                </h5>
              </div>
            </div>
          </div>
          <div className='flex gap-5'>
            <div className=' w-[110px] w-16 h-6 bg-sky-500 rounded-3xl'>
              <p className=' w-11 h-6 text-center text-white text-xs font-bold leading-normal px-3 py-1'>
                NUEVO
              </p>
            </div>
            <Image src={arrow} alt='arrow' className=' w-6 h-6 ' />
          </div>
        </Link>
      </section>
    </>
  );
}
