import React from 'react';

export default function ValidateCodeCard() {
  return (
    <>
      <form className='w-[548px] h-[473px] bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025] px-11'>
        <div className='IngresaElCDigoQueTeEnviamosPorEMail origin-top-left  py-16 px-10 space-y-5'>
          <span className='text-sky-500 text-2xl font-semibold'>Ingresa </span>
          <span className='text-black text-2xl font-semibold'>
            {' '}
            el código que te enviamos
            <br />
            por e-mail
          </span>
          <div className='LoEnviamosASomebodyHotmailComSiNoLoEncuentrasRevisaElCorreoNoDeseado w-[380.81px] origin-top-left '>
            <span className='text-black text-base font-normal leading-normal'>
              Lo enviamos a{' '}
            </span>
            <span className='text-black text-base font-bold leading-normal'>
              somebody@hotmail.com.{' '}
            </span>
            <span className='text-black text-base font-normal leading-normal'>
              Si no lo encuentras revisa el{' '}
            </span>
            <span className='text-sky-500 text-base font-normal leading-normal'>
              correo no deseado
            </span>
          </div>
          <div className='flex gap-2 justify-center'>
            <input
              type='text'
              name=''
              id=''
              className='w-[59px] h-[66px] text-center rounded-lg border border-neutral-500 focus:border-2 focus:border-primary ps-2 focus:outline-none text-slate-800 text-base'
            />
            <input
              type='text'
              name=''
              id=''
              className='w-[59px] h-[66px] text-center rounded-lg border border-neutral-500 focus:border-2 focus:border-primary ps-2 focus:outline-none text-slate-800 text-base'
            />
            <input
              type='text'
              name=''
              id=''
              className='w-[59px] h-[66px] text-center rounded-lg border border-neutral-500 focus:border-2 focus:border-primary ps-2 focus:outline-none text-slate-800 text-base'
            />
            <input
              type='text'
              name=''
              id=''
              className='w-[59px] h-[66px] text-center rounded-lg border border-neutral-500 focus:border-2 focus:border-primary ps-2 focus:outline-none text-slate-800 text-base'
            />
          </div>
          <button
            type='button'
            className='mt-4 text-center text-neutral-500 text-base font-bold leading-normal w-[343.22px] h-[50.08px] py-3 ml-4 bg-secondary rounded-md justify-center items-center gap-2 inline-flex'
          >
            Código confirmación
          </button>
        </div>
      </form>
    </>
  );
}
