import Link from 'next/link';
import React from 'react';

export default function MoneyCharge() {
  return (
    <>
      <section className=' flex gap-2 justify-center py-2  w-[370px] h-[60px] bg-white rounded-lg shadow-[0.0px_4.0px_4.0px_rgba(0,0,0,0.25)]'>
        <Link
          href={'/home/money-charge'}
          className='w-[165px] h-11 -3 bg-sky-100 rounded-md justify-center items-center gap-2 inline-flex  text-center text-sky-500 text-base font-bold leading-normal'
        >
          {' '}
          Ingresar Dinero
        </Link>
        <Link
          href={'#'}
          className='w-[165px] h-11  py-3 bg-sky-100 rounded-md justify-center items-center gap-2 inline-flex  text-center text-sky-500 text-base font-bold leading-normal'
        >
          Retirar Dinero
        </Link>
      </section>
    </>
  );
}
