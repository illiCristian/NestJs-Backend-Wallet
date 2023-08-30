'use client';

import { useRegisterUser, useStepperState } from '@/store/registerStore';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import * as yup from 'yup';
import warningImg from '../../../public/assets/register/warning.svg';
import { useMutation } from '@tanstack/react-query';
import { API } from '@/services/config';
import ModalEmailAlreadyExist from './Modal/ModalEmailAlreadyExist';

type FormData = yup.InferType<typeof schema>;
type Email = {
	email: string | undefined;
};

type Email = {
  email: string | undefined;
};

interface FormState {
  field1: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function EmailValidate() {
  const [emailUser, setEmaillUser] = useState('');
  const [showModal, setShowModal] = useState('hidden');
  const router = useRouter();

  const initialState: FormState = {
    field1: '',
  };

  const [form, setForm] = useState<FormState>(initialState);

  const { field1 } = form;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
    setEmaillUser(e.target.value);
    console.log(emailUser);
  };

  const isFormCompleted = field1 !== '';

  const { setStepper } = useStepperState();
  const { setUserData } = useRegisterUser();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync } = useMutation({
    mutationFn: (data: Email) => {
      return API.post('mailing/send-mail', data);
    },
  });

  const formSubmit = async (data: FormData) => {
    // validacion del correo
    try {
      const { data: user } = await mutateAsync(
        {
          email: data.email,
        },
        {
          onSuccess: () => {
            setUserData(data);
            router.push('/register/validate-code');
          },
        }
      );
    } catch (error) {
      setShowModal('true');
      console.error(error);
    }
  };

  useEffect(() => {
    setStepper({ stepOne: true, stepTwo: true, stepThree: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className={`w-[423px] h-[500px]  bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025] px-11`}
        // 'w-[423px] h-[500px]  bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025] px-11'
      >
        {/* Título */}
        <h3 className='origin-top-left rotate-[0.55deg] text-center text-black text-2xl font-semibold flex justify-start mb-3 mt-[50px]'>
          Ingresa tu e-mail
        </h3>
        {/* Subtítulo */}
        <h4 className='origin-top-left rotate-[0.55deg] text-black text-base font-normal leading-normal mb-10'>
          Te enviaremos un mensaje para
          <br /> confirmarlo.
        </h4>
        <section className='space-y-3'>
          {/* Campo de entrada de correo */}
          <input
            {...register('email')}
            id='field1'
            type='email'
            value={emailUser}
            // name='field1'
            onChange={handleChange}
            placeholder='Correo Electrónico'
            className={`w-[343px] h-[50px] rounded-lg border border-neutral-500 focus:border-2 ${
              formState.errors.email
                ? 'focus:border-red-500'
                : 'focus:border-primary'
            } ps-2 focus:outline-none text-slate-800 text-base`}
          />
          {/* Mensaje de advertencia */}
          <figure className='flex justify-center gap-2 mt-3'>
            {formState.errors.email && (
              <>
                <Image src={warningImg} alt='warning' className='w-6 h-6' />
                <span className='text-base font-normal leading-normal text-center text-error'>
                  Utiliza el formato nombre@ejemplo.com.
                </span>
              </>
            )}
          </figure>
        </section>
        {/* Botón de envío */}
        <button
          disabled={!isFormCompleted}
          // className='mt-4 text-center  text-base font-bold leading-normal w-[343.22px] h-[50.08px] py-3 bg-secondary rounded-md justify-center items-center gap-2 inline-flex  text-neutral-500'

          className={`mt-4 text-center  text-base font-bold leading-normal w-[343.22px] h-[50.08px] py-3 bg-secondary rounded-md justify-center items-center gap-2 inline-flex  ${
            isFormCompleted
              ? 'bg-tertiary text-white hover:bg-tertiaryDark transition-all duration-500'
              : ' bg-secondary text-neutral-500'
          }`}
        >
          Enviar e-mail de confirmación
        </button>
      </form>
      <ModalEmailAlreadyExist
        emailUser={emailUser}
        isVisible={showModal}
        onClose={() => setShowModal('hidden')}
      />
    </>
  );
}
