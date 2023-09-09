'use client'

import userImg from '@/../public/assets/dashboard/user-default.png'
import { useTransferData } from '@/store/userStore'
import Image from 'next/image'

export default function TransferDetail() {
  const { tempMoney, name } = useTransferData()

  return (
    <>
      <section className="flex justify-center">
        <div className="w-[892px] h-[282px] flex flex-col  bg-white rounded-lg shadow-[0px_4px_4px_4px_#00000025] mt-10">
          <div className="flex flex-col items-center justify-center gap-4 mx-5 mb-20 mt-7">
            <Image
              src={userImg}
              className="w-[41px] h-[41px]"
              alt="image-user"
            />
            <p className="text-base text-black">{name || 'Aurora Jiménez'}</p>
          </div>
          <hr className="mb-5" />
          <div className="text-black text-center text-[25px] font-normal leading-normal">
            Total: $ {tempMoney}
          </div>
        </div>
      </section>
    </>
  )
}
