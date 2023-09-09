'use client'

import { registerUser } from '@/services'
import { useRegisterUser } from '@/store/registerStore'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import formIcon from '../../../public/form-icon-conditions.svg'

function Modal1(props: any) {
  const { email, resetUserData, name, password } = useRegisterUser()

  const { mutateAsync } = useMutation(registerUser)

  const handleSubmit = async () => {
    try {
      await mutateAsync(
        {
          name: name,
          email: email,
          password: password,
        },
        {
          onSuccess: () => {
            resetUserData()
            props.onClose()
            props.isVisible2()
          },
        },
      )
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-black 
			bg-opacity-25 
			flex justify-center items-center ${props.isVisible}`}
    >
      {/* <button onClick={() => props.onClose()}>X</button> */}
      <div className="w-[548px] h-[473px] bg-white flex flex-col items-center shadow-[0px_1px_4px_2px_#00000025] rounded-lg">
        <Image
          src={formIcon}
          alt="security"
          width={148}
          height={148}
          className="mt-16"
        />
        <h1 className="my-3 text-2xl font-semibold text-black">
          Términos y condiciones
        </h1>
        <p className="my-3 text-sky-500 text-base font-normal leading-normal mr-[114px]">
          Validado con éxito
        </p>
        <button
          onClick={handleSubmit}
          className="inline-flex items-center justify-center h-12 gap-2 px-16 py-3 mt-10 text-base font-bold leading-normal text-center text-white rounded-md w-52 bg-sky-500"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

export default Modal1
