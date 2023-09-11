import React from 'react'
import add from '../../../../public/assets/send-money/Add.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function AddCard() {
  return (
    <>
      <Link
        href={'/send-money/charge-money'}
        className="w-[409px] h-[199px]  bg-blue-400 bg-opacity-20 rounded-lg border border-dashed border-sky-500"
      >
        <div className="flex flex-col justify-center items-center mt-10">
          <Image src={add} alt="" />
          <div className="text-black text-[25px] font-semibold leading-normal mt-10">
            Agrega una tarjeta
          </div>
          <div className="text-center text-neutral-500 text-base font-normal leading-normal">
            Débito o Crédito.
          </div>
        </div>
      </Link>
    </>
  )
}
