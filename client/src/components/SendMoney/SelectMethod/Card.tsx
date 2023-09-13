'use client'

import { getWallet } from '@/services'
import { useQuery } from '@tanstack/react-query'

import Image from 'next/image'
import aton from '../../../../public/assets/send-money/aton.svg'
import logo2 from '../../../../public/assets/send-money/logo2.svg'

export default function Card() {
  const { data } = useQuery(['wallet'], getWallet)
  const balance = data?.data

  // Función para formatear el saldo como una cantidad de dinero
  const formatMoney = (amount: any) => {
    return amount?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <>
      <button
        className="w-[354px] h-[199px] focus:grayscale-0 focus:outline focus:outline-2 focus:outline-blue-500 bg-tertiary grayscale rounded-lg relative"
        autoFocus
      >
        <div className="flex justify-between p-4 ">
          <Image
            src={logo2}
            alt="logo"
            width={64}
            height={64}
            className="mb-8"
          />
          <div className="flex gap-4 mb-14 items-center">
            <p className="text-white">
              {' '}
              {`$ ${formatMoney(balance?.balance)}`}
            </p>
            <Image src={aton} alt="eye" className="" />
          </div>
        </div>

        <div className="absolute top-0 flex flex-col left-44">
          <div className="font-extrabold text-white opacity-10 text-7xl overflow-hidden">
            MER
          </div>
          <div className="font-extrabold text-white opacity-10 text-7xl overflow-hidden">
            CADO
          </div>{' '}
          <div className="font-extrabold text-white opacity-10 text-7xl overflow-hidden">
            PAGO
          </div>
        </div>

        <div className="flex justify-between mt-6 mb-4 ">
          <div className="w-28 text-white text-base font-normal ms-7">
            Sin comisión
          </div>
          <div className="relative h-6 bg-white rounded-tl-lg w-52 rounded-bl-xl">
            <div className="absolute top-0 left-0 text-base font-bold leading-normal text-center w-44 text-zinc-800">
              Mercado pago wallet
            </div>
          </div>
        </div>
      </button>
    </>
  )
}
