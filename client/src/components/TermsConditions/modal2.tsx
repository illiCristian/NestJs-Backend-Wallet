'use client';

import Image from 'next/image';
import congratsAccount from '../../../public/congrats-account.png';
import { useStepperState } from '@/store/registerStore';
import { useEffect } from 'react';
import Link from 'next/link';

function Modal2(props: any) {
  const { setStepper } = useStepperState();

  useEffect(() => {
    setStepper({ stepOne: true, stepTwo: true, stepThree: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black 
    bg-opacity-25 
    flex justify-center items-center ${props.isVisible}`}
    >
      <button onClick={() => props.onClose()}>X</button>
      <div className='w-[548px] h-[473px] bg-white flex flex-col justify-center items-center shadow-[0px_1px_4px_2px_#00000025] rounded-lg mb-10'>
        <Image
          src={congratsAccount}
          alt='security'
          width={173}
          height={156}
          className='mt-10'
        />
        <div className=' w-96 origin-top-left rotate-[0.55deg] my-10'>
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
          className=' w-[200.23px] h-[48.69px] px-16 py-3 bg-sky-500 rounded-md justify-center items-center gap-2 inline-flex mb-10'
        >
          <p className='CrearCuentaPersonal origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal'>
            Continuar
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Modal2;
