'use client'

import userImg from '@/../public/assets/dashboard/user-default.png'
import { useTransferData } from '@/store/userStore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

const SendMoneyOne = () => {
  const router = useRouter()
  const { setTempMoney, name } = useTransferData()
  const { register, handleSubmit, watch, setValue } = useForm()

  const handleForm = (data: any) => {
    setTempMoney(parseInt(data.money))
    router.push('/send-money/pay-method')
  }

  return (
    <div className={`flex flex-col items-start mt-5 ms-40 `}>
      <h1 className="text-black text-[25px] font-semibold leading-normal mb-5">
        ¿Cuanto quieres transferir?
      </h1>
      <div className="flex flex-col justify-center items-center bg-white  rounded-lg shadow-[0px_4px_4px_4px_#00000025]">
        <div className="flex flex-row justify-start items-center mt-4 mb-20 mx-5 gap-2 mr-[450px]">
          <Image src={userImg} className="w-[41px] h-[41px]" alt="image-user" />
          <p className="text-xs text-black">{name || 'Aurora Jiménez'}</p>
        </div>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="flex flex-col w-[544px]  px-[50px]  sh">
            <div className="flex flex-row items-center justify-start mx-5 my-4">
              <p className="text-xl">$</p>
              <input
                {...register('money')}
                autoFocus
                type="number"
                placeholder="0"
                className="flex items-center w-32 border-white outline-none focus:outline-none remove-arrow ms-44"
              />
            </div>
            <hr className="-mx-[50px] bg-gray-200 border-1" />
            <div className="flex flex-row items-center justify-center gap-5 my-4">
              <button
                type="button"
                className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
                onClick={() => setValue('money', 500)}
              >
                $500
              </button>
              <button
                type="button"
                className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
                onClick={() => setValue('money', 1000)}
              >
                $1000
              </button>
              <button
                type="button"
                className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
                onClick={() => setValue('money', 2000)}
              >
                $2000
              </button>
              <button
                type="button"
                className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
                onClick={() => setValue('money', 3000)}
              >
                $3000
              </button>
            </div>
          </div>
          <hr className="w-full mt-4 bg-gray-200 border-1" />
          <input
            name="subject"
            type="text"
            placeholder="¿Quieres decirle algo?"
            className="border border-gray-300 rounded-md p-3 text-black my-4 text-sm w-[540px]"
          />
          <div>
            <button
              disabled={watch('money') < 1 || undefined}
              className={`${
                watch('money') < 1 || undefined
                  ? `bg-gray-400 text-gray-700`
                  : `bg-[#00B1EA] text-white font-medium`
              } my-4 text-base rounded-md w-[200.23px] h-[48.69px] ml-[345px]`}
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SendMoneyOne
