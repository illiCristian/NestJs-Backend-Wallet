'use client';

import { API } from '@/services/config';
import { useRegisterUser, useStepperState } from '@/store/registerStore';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
};

type Code = {
  email: string | undefined;
  code: string | undefined;
};

interface FormState {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
}

export default function ValidateCodeCard() {
  const router = useRouter();
  const { setStepper } = useStepperState();
  const { email } = useRegisterUser();
  const { register, handleSubmit } = useForm<FormValues>();

  const initialState: FormState = {
    field1: '',
    field2: '',
    field3: '',
    field4: '',
  };

  const [form, setForm] = useState<FormState>(initialState);

  const { field1, field2, field3, field4 } = form;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const isFormCompleted =
    field1 !== '' && field2 !== '' && field3 !== '' && field4 !== '';

  const { mutateAsync } = useMutation({
    mutationFn: (data: Code) => {
      return API.post('mailing/validate-code', data);
    },
  });

  const formSubmit = async (data: FormValues) => {
    // validacion del correo
    const codeEmail = Object.values(data).join('');

    try {
      const { status } = await mutateAsync(
        {
          email: email,
          code: codeEmail,
        },
        {
          onSuccess: () => {
            router.push('/register/validate-success');
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    const inputs = document.getElementById('inputs');

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const val = target.value;

      if (isNaN(Number(val))) {
        target.value = '';
        return;
      }

      if (val !== '') {
        const next = target.nextElementSibling;
        if (next) {
          (next as HTMLInputElement).focus();
        }
      }
    };

    const handleKeyup = (e: KeyboardEvent) => {
      const target = e.target as HTMLInputElement;
      const key = e.key.toLowerCase();

      if (key === 'backspace' || key === 'delete') {
        target.value = '';
        const prev = target.previousElementSibling;
        if (prev) {
          (prev as HTMLInputElement).focus();
        }
        return;
      }
    };

    if (inputs) {
      inputs.addEventListener('input', handleInput);
      inputs.addEventListener('keyup', handleKeyup);
    }

    return () => {
      if (inputs) {
        inputs.removeEventListener('input', handleInput);
        inputs.removeEventListener('keyup', handleKeyup);
      }
    };
  }, []);

  useEffect(() => {
    setStepper({ stepOne: true, stepTwo: true, stepThree: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className='w-[548px] h-[473px] bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025] px-11'
      >
        <div className='px-10 py-16 '>
          <span className='text-2xl font-semibold text-sky-500'>Ingresa </span>
          <span className='text-2xl font-semibold text-black'>
            {' '}
            el código que te enviamos
            <br />
            por e-mail
          </span>
          <div className=' w-[380.81px] mt-5'>
            <span className='text-base font-normal leading-normal text-black'>
              Lo enviamos a{' '}
            </span>
            <span className='text-base font-bold leading-normal text-black'>
              {email}{' '}
            </span>
            <span className='text-base font-normal leading-normal text-black'>
              Si no lo encuentras revisa el{' '}
            </span>
            <span className='text-base font-normal leading-normal text-sky-500'>
              correo no deseado
            </span>
          </div>
          <div id='inputs' className='flex justify-center gap-4 mt-7 mb-2'>
            <input
              {...register('code1')}
              id='field1'
              onChange={handleChange}
              type='text'
              maxLength={1}
              className='w-[59px] h-[66px] text-center rounded-lg border-2 border-stone-300 focus:border-2 focus:border-primary ps-2 focus:border-1 focus:outline outline-1  focus:outline-offset-4 focus:outline-indigo-950  text-slate-800 text-base'
            />
            <input
              {...register('code2')}
              id='field2'
              onChange={handleChange}
              type='text'
              maxLength={1}
              className='w-[59px] h-[66px] text-center rounded-lg border-2 border-stone-300 focus:border-2 focus:border-primary ps-2 focus:border-1 focus:outline outline-1  focus:outline-offset-4 focus:outline-indigo-950 text-slate-800 text-base'
            />
            <input
              {...register('code3')}
              id='field3'
              onChange={handleChange}
              type='text'
              maxLength={1}
              className='w-[59px] h-[66px] text-center rounded-lg border-2 border-stone-300 focus:border-2 focus:border-primary ps-2 focus:border-1 focus:outline outline-1  focus:outline-offset-4 focus:outline-indigo-950 text-slate-800 text-base'
            />
            <input
              {...register('code4')}
              id='field4'
              onChange={handleChange}
              type='text'
              maxLength={1}
              className='w-[59px] h-[66px] text-center rounded-lg border-2 border-stone-300 focus:border-2 focus:border-primary ps-2 focus:border-1 focus:outline outline-1  focus:outline-offset-4 focus:outline-indigo-950 text-slate-800 text-base'
            />
          </div>
          <button
            disabled={!isFormCompleted}
            className={`mt-4 text-center  text-base font-bold leading-normal w-[343.22px] h-[50.08px] py-3 ml-4 bg-secondary rounded-md justify-center items-center gap-2 inline-flex  ${
              isFormCompleted
                ? 'bg-tertiary text-white hover:bg-tertiaryDark transition-all duration-500'
                : ' bg-secondary text-neutral-500'
            }`}
          >
            Código confirmación
          </button>
        </div>
      </form>
    </>
  );
}
