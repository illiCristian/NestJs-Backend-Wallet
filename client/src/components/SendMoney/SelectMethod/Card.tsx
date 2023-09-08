import React from 'react'
import add from '../../../../public/assets/send-money/Add.svg'
import logo from '../../../../public/assets/send-money/logo.svg'
import aton from '../../../../public/assets/send-money/aton.svg'
import Image from 'next/image'

export default function Card() {
  return (
    <>
      <div className="w-[420.21px] h-[199px] bg-neutral-500 rounded-[10px] relative">
        <div className="flex justify-between p-4">
          <Image src={logo} alt="logo" className="" />
          <div className="flex gap-4 items-center ">
            <p className="text-white"> $6000</p>
            <Image src={aton} alt="eye" />
          </div>
        </div>

        <div className="flex flex-col absolute left-52 top-0">
          <div className="opacity-5  text-white text-7xl font-extrabold">
            MER
          </div>
          <div className="opacity-5  text-white text-7xl font-extrabold">
            CADO
          </div>
          <div className="opacity-5  text-white text-7xl font-extrabold">
            PAGO
          </div>
        </div>
        <div className="flex justify-between mt-14">
          <div className="w-28 text-white text-base font-normal ms-7">
            Sin comisión
          </div>
          <div className="w-52 h-6 relative bg-white rounded-tl-lg rounded-bl-xl">
            <div className="w-44 left-0 top-0 absolute text-center text-zinc-800 text-base font-bold leading-normal">
              Mercado pago wallet
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
