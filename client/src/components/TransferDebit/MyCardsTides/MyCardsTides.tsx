'use client'

import next_arrow from '@/../public/next-arrow-icon.svg'
import visaLogo from '@/../public/visa.svg'
import { getCreditCards } from '@/services'
import { useTransferData } from '@/store/userStore'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

const MyCardsTides = () => {
  const { setSelectedPaymentId } = useTransferData()
  const { data } = useQuery(['cards'], getCreditCards)
  const cards = data?.data

  const handleCardId = (cardId: string) => {
    setSelectedPaymentId(cardId)
  }

  return (
    <>
      {cards?.map((card: any) => (
        <>
          <hr className="bg-gray-200 border-1" />
          <button
            onClick={() => handleCardId(card._id)}
            className="flex flex-row items-start justify-between px-4 my-4"
          >
            <div className="flex ">
              <div className="mx-2 border border-gray-300 rounded-full">
                <Image
                  src={visaLogo}
                  alt="credit-icon"
                  height={40}
                  width={40}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-2">
                <p className="text-xs text-black">
                  {`**** ${card.cardNumber.slice(14, 19)}`}
                </p>
                <p className="text-xs text-gray-500">Débito</p>
              </div>
            </div>
            <Image
              src={next_arrow}
              alt="next-arrow"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </button>
        </>
      ))}
    </>
  )
}
export default MyCardsTides
