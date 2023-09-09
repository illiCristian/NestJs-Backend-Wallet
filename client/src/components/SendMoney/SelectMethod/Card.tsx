import React from 'react'
import add from '../../../../public/assets/send-money/Add.svg'
import logo2 from '../../../../public/assets/send-money/logo2.svg'
import aton from '../../../../public/assets/send-money/aton.svg'
import Image from 'next/image'

export default function Card() {
  return (
    <>
      <button className="w-[420.21px] h-[199px] focus:grayscale-0 focus:outline focus:outline-2 focus:outline-blue-500 bg-tertiary grayscale rounded-[10px] relative">
        <div className="flex justify-between p-4 ">
          <Image
            src={logo2}
            alt="logo"
            width={64}
            height={64}
            className="mb-8"
          />
          <div className="flex gap-4 mb-14 items-center">
            <p className="text-white"> $6000</p>
            <Image src={aton} alt="eye" className="" />
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
        <div className="flex justify-between mt-6 mb-2 ">
          <div className="w-28 text-white text-base font-normal ms-7">
            Sin comisión
          </div>
          <div className="w-52 h-6 relative bg-white rounded-tl-lg rounded-bl-xl">
            <div className="w-44 left-0 top-0 absolute text-center text-zinc-800 text-base font-bold leading-normal">
              Mercado pago wallet
            </div>
          </div>
        </div>
      </button>
    </>
  )
}
