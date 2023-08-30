import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import arrows from '../../../../public/assets/register/arrows-crossed.png';
import logo2 from '../../../../public/assets/register/logo2.png';
import logo from '../../../../public/assets/register/logo.png';

function ModalEmailAlreadyExist(props: any) {
  if (!props.isVisible) return null;
  const [showModal, setShowModal] = useState('flex');
  console.log(typeof props.onClose);
  console.log(props);

  return (
    <div
      className={`fixed inset-0 bg-black 
        bg-opacity-25 
        flex justify-center  ${props.isVisible}`}
    >
      {/* <button onClick={() => props.onClose()}>X</button> */}
      <div className='w-[680px] h-[473px] mt-[180px] bg-white flex flex-col py-10 rounded-lg shadow-[0px_1px_4px_2px_#00000025]'>
        <div className=' flex gap-7 items-center justify-center mb-5'>
          <Image src={logo} alt='logo' className='w-20 h-20' />
          <Image src={arrows} alt='arrows' className='w-[73px] h-[17px] ' />
          <Image src={logo2} alt='logo' className='w-20 h-20' />
        </div>
        <div className=' origin-top-left rotate-[0.55deg] text-center mb-7'>
          <span className='text-sky-500 text-2xl font-semibold'>Ya existe</span>
          <span className='text-black text-2xl font-semibold'>
            {' '}
            una cuenta con el e-mail
            <br />
            {props.emailUser}
          </span>
        </div>
        <div className='flex justify-start px-24 text-black text-base font-normal leading-normal mb-10'>
          Si tienes cuenta en mercado libre, no necesitas crear una nueva,
          <br />
          inicia sesión con ese e-mail.
        </div>
        <div className='flex justify-center gap-4'>
          <Link
            href={'/login'}
            className='w-56 h-12  py-3  bg-sky-500 rounded-md justify-center items-center  inline-flex text-center text-white text-base font-bold leading-normal'
          >
            Inicia sesión
          </Link>
          <Link
            href={'/register/email'}
            onClick={() => props.onClose()}
            className='w-56 h-12  py-3 bg-sky-100 rounded-md justify-center items-center  inline-flex text-center text-sky-500 text-base font-bold leading-normal'
          >
            Usar otro e-mail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModalEmailAlreadyExist;
