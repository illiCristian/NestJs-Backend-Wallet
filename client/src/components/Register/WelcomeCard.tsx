import React from 'react';
import welcome from '../../../public/assets/register/welcome.png';
import Image from 'next/image';
import Link from 'next/link';

export default function WelcomeCard() {
  return (
    <>
      <section className=' w-[548px] h-[473px] bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025] flex flex-col justify-center items-center space-y-8'>
        <div className=' w-[173px] h-[156px] '>
          <Image src={welcome} alt='welcome' className=' w-[173px] h-[156px]' />
        </div>
        <h3 className='origin-top-left rotate-[0.55deg] text-black text-2xl font-semibold'>
          ¡Genial! Ya puedes utilizar tu cuenta
        </h3>
        <div className='w-[382.25px] origin-top-left rotate-[0.55deg]'>
          <span className='text-sky-500 text-base font-normal leading-normal'>
            Cuenta creada con éxito
            <br />
          </span>
          <span className='text-black text-base font-normal leading-normal'>
            Inicia sesión con tu e-mail o tu número de teléfono.
          </span>
        </div>
        <Link
          href={'/login'}
          className=' w-[200.23px] h-[48.69px] px-16 py-3 bg-sky-500 rounded-md justify-center items-center gap-2 inline-flex'
        >
          <p className='CrearCuentaPersonal origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal'>
            Continuar
          </p>
        </Link>
      </section>
    </>
  );
}
