import Image from 'next/image';
import React from 'react';
import codeSend from '../../../public/assets/register/code-send.svg';
import Link from 'next/link';

export default function SucessCodeSend() {
  return (
    <>
      <section className='w-[548px] h-[473px] flex flex-col justify-center items-center bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025]'>
        <div className='space-y-5 flex flex-col items-center justify-center'>
          <Image src={codeSend} alt='code' className=' w-[135px] h-[137px]' />
          <div className='space-y-3'>
            <div className='text-center  text-black text-2xl font-semibold'>
              E-mail validado
            </div>
            <div className=' w-[183.18px]  text-sky-500 text-base font-normal leading-normal'>
              somebody@hotmail.com
            </div>
          </div>
        </div>
        <Link href={'register/validate-steps'}>
          <button
            type='button'
            className='mt-10 text-center text-white text-base font-bold leading-normal w-[200.23px] h-[48.69px] py-3 ml-4 bg-tertiary rounded-md justify-center items-center gap-2 inline-flex'
          >
            Continuar
          </button>
        </Link>
      </section>
    </>
  );
}
