'use client'

import { getCreditCards } from '@/services'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import chip from '@/../public/chip.png'
import React from 'react'

const MyCards = () => {
  const { data } = useQuery(['cards'], getCreditCards)
  const cards = data?.data
  console.log(cards)

  return (
    <div className="flex ">
      {cards?.map((card: any) => (
        <React.Fragment key={card}>
          <button className="flex flex-col w-[354px] h-[199px] justify-start items-start my-4 pt-9 ps-9 focus:grayscale-0 focus:outline focus:outline-2 focus:outline-sky-600 grayscale bg-[#BFBFBF] border rounded-lg shadow-[4x_4px_12px_0px_rgba(0,0,0,36)]">
            <div className="flex flex-row items-center justify-between gap-40 mb-7">
              <Image src={chip} alt="chip-image" width={32} height={30} />
              <p className=" text-base font-normal text-black">
                Expired {card.expirationDate}
              </p>
            </div>
            <p className="h-6 text-2xl mb-7 font-normal text-black">
              {' '}
              {card.cardNumber}
            </p>
            <p className="h-4  text-base font-normal text-black">
              {' '}
              {card.name}
            </p>
          </button>
        </React.Fragment>
      ))}
    </div>
  )
}
export default MyCards
