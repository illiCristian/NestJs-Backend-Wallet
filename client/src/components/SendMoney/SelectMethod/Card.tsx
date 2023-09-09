'use client'

import { getWallet } from '@/services'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import aton from '../../../../public/assets/send-money/aton.svg'
import logo from '../../../../public/assets/send-money/logo.svg'

export default function Card() {
  const { data } = useQuery(['wallet'], getWallet)
  const balance = data?.data

  return (
    <>
      <div className="w-[420.21px] h-[199px] bg-neutral-500 rounded-[10px] relative">
        <div className="flex justify-between p-4">
          <Image src={logo} alt="logo" className="" />
          <div className="flex items-center gap-4 ">
            <p className="text-white">$ {balance?.balance}</p>
            <Image src={aton} alt="eye" />
          </div>
        </div>

        <div className="absolute top-0 flex flex-col left-52">
          <div className="font-extrabold text-white opacity-5 text-7xl">
            MER
          </div>
          <div className="font-extrabold text-white opacity-5 text-7xl">
            CADO
          </div>
          <div className="font-extrabold text-white opacity-5 text-7xl">
            PAGO
          </div>
        </div>
        <div className="flex justify-between mt-14">
          <div className="text-base font-normal text-white w-28 ms-7">
            Sin comisión
          </div>
          <div className="relative h-6 bg-white rounded-tl-lg w-52 rounded-bl-xl">
            <div className="absolute top-0 left-0 text-base font-bold leading-normal text-center w-44 text-zinc-800">
              Mercado pago wallet
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
