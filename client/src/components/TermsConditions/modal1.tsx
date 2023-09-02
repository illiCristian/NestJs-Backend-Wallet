'use client';

import { API } from '@/services/config';
import { useRegisterUser } from '@/store/registerStore';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import formIcon from '../../../public/form-icon-conditions.svg';

type UserData = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

function Modal1(props: any) {
  const { email, resetUserData, name, password } = useRegisterUser();

  const { mutateAsync } = useMutation({
    mutationFn: (data: UserData) => {
      return API.post('auth/signup', data);
    },
  });

  const handleSubmit = async () => {
    try {
      const { data: user } = await mutateAsync(
        {
          name: name,
          email: email,
          password: password,
        },
        {
          onSuccess: () => {
            resetUserData();
            props.onClose();
            props.isVisible2();
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black 
			bg-opacity-25 
			flex justify-center items-center ${props.isVisible}`}
    >
      {/* <button onClick={() => props.onClose()}>X</button> */}
      <div className='w-[548px] h-[473px] bg-white flex flex-col items-center shadow-[0px_1px_4px_2px_#00000025] rounded-lg'>
        <Image
          src={formIcon}
          alt='security'
          width={148}
          height={148}
          className='mt-16'
        />
        <h1 className='my-3 text-black text-2xl font-semibold'>
          Términos y condiciones
        </h1>
        <p className='my-3 text-sky-500 text-base font-normal leading-normal mr-[114px]'>
          Validado con éxito
        </p>
        <button
          onClick={handleSubmit}
          className='w-52 h-12 px-16 py-3 bg-sky-500 rounded-md justify-center items-center gap-2 inline-flex text-center text-white text-base font-bold leading-normal mt-10'
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default Modal1;
