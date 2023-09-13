'use client'

import { getCreditCards } from '@/services'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import chip from '@/../public/chip.png'
import { useTransferData } from '@/store/userStore'

const MyCards = () => {
  const { setSelectedPaymentId } = useTransferData()
  const { data } = useQuery(['cards'], getCreditCards)
  const cards = data?.data

  const handleCardId = (cardId: string) => {
    setSelectedPaymentId(cardId)
  }

  return (
    <div className="flex gap-4">
      {cards?.map((card: any) => (
        <div key={card.cardNumber}>
          <button
            onClick={() => handleCardId(card._id)}
            className="flex flex-col w-[354px] h-[199px] justify-start items-start my-4 pt-9 ps-9 focus:grayscale-0 focus:outline focus:outline-2 focus:outline-sky-600 grayscale bg-[#BFBFBF] border rounded-lg shadow-[4x_4px_12px_0px_rgba(0,0,0,36)]"
          >
            <div className="flex flex-row items-center justify-between gap-40 mb-7">
              <Image src={chip} alt="chip-image" width={32} height={30} />
              <div className="text-right">
                <p className="text-base font-normal text-black ">
                  Expired {card.expirationDate}
                </p>
                <p className="text-base font-normal text-black ">
                  $ {card.balance}
                </p>
              </div>
            </div>
            <p className="h-6 text-2xl font-normal text-black mb-7">
              {' '}
              {card.cardNumber}
            </p>
            <p className="h-4 text-base font-normal text-black"> {card.name}</p>
          </button>
        </div>
      ))}
    </div>
  )
}
export default MyCards
