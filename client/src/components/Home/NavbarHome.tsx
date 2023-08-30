import Image from 'next/image';
import React from 'react';
import bell from '../../../public/assets/dashboard/bell.svg';

export default function NavbarHome() {
  return (
    <>
      <header className='w-[1600px] h-16 bg-tertiary'>
        {/* Sección del logo */}
        <section className='h-16 pr-2.5 left-[64px]  flex-col justify-start items-start gap-2.5 inline-flex'>
          {/* Imagen del logo */}
          <p className='w-[146px] h-16 justify-center items-center inline-flex text-white text-lg font-bold'>
            Inicio
          </p>
        </section>
        {/* Sección de registro de imagen */}
        <section className='image-register w-11 p-2.5 left-[1768px] top-[20px] absolute'>
          {/* Contenido del registro de imagen */}
        </section>
        {/* Icono de ayuda */}
        <figure className='w-6 h-6 left-[1832px] top-[20px] absolute'>
          <Image src={bell} alt='bell' />
        </figure>
      </header>
    </>
  );
}
