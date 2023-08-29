import React from 'react';
import user from '../../../public/assets/money-charge/user.svg';
import arrow from '../../../public/assets/money-charge/arrow.svg';
import mail from '../../../public/assets/money-charge/mail.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function TransferCard() {
  return (
    <>
      <section className='flex flex-col gap-4 w-[1142px]   h-40 bg-white rounded-lg shadow-[0px_4px_4px_0px_#00000025] px-5 py-5'>
        <Link href={'#'} className=' flex justify-between'>
          <div className=' flex gap-3'>
            <Image
              src={user}
              alt='user'
              className='w-6 h-6 justify-start items-start inline-flex'
            />
            <div className='flex flex-col gap-1'>
              <h4 className=' text-black text-base font-semibold leading-normal'>
                Transferencia con CLABE
              </h4>
              <div className='flex gap-3'>
                <h5 className=' text-lime-800 text-base font-extrabold leading-normal'>
                  Gratis
                </h5>
                <h6 className=' text-neutral-500 text-base font-normal leading-normal'>
                  Instantáneo
                </h6>
              </div>
            </div>
          </div>
          <div className='flex gap-5'>
            <div className=' w-[110px] h-6 bg-sky-100 rounded-[37px]'>
              <p className='w-24 h-6 py-1 px-2 text-center text-sky-500 text-xs font-normal leading-normal'>
                RECOMENDADO
              </p>
            </div>
            <Image src={arrow} alt='arrow' className=' w-6 h-6 ' />
          </div>
        </Link>
        <Link href={'#'} className=' flex justify-between'>
          <div className=' flex gap-3'>
            <Image
              src={mail}
              alt='mail'
              className='w-6 h-6 justify-start items-start inline-flex'
            />
            <div className='flex flex-col gap-1'>
              <h4 className='TransferenciaConClabe text-black text-base font-semibold leading-normal'>
                Tarjeta de débito
              </h4>
              <div className='flex gap-3'>
                <h5 className=' text-neutral-500 text-base font-normal leading-normal'>
                  2 Ingresos gratis al mes
                </h5>
                <div className='w-1 h-1 bg-neutral-500 rounded-full p-auto mt-3 '></div>
                <h5 className=' text-neutral-500 text-base font-normal leading-normal'>
                  Instanáneo
                </h5>
              </div>
            </div>
          </div>
          <div className='flex gap-5'>
            <Image src={arrow} alt='arrow' className=' w-6 h-6 ' />
          </div>
        </Link>
      </section>
    </>
  );
}
