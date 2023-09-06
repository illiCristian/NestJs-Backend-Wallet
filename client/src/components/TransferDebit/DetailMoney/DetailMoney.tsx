'use client'

import { useTempMoney } from '@/store/userStore'
import React from 'react'

export default function DetailMoney() {
  const { tempMoney } = useTempMoney()

  return (
    <>
      <div className="flex flex-col items-start justify-start w-[350px] bg-white shadow-[0px_4px_4px_0px_#00000025] ml-4 rounded-xl sh">
        <p className="py-6 pl-4 text-base font-medium text-black">Detalle</p>

        <div className="flex flex-row justify-between pt-1 pb-12 pl-4">
          <p className="text-base text-black">Ingresas</p>
          <p className="text-base ml-52">$ {tempMoney}</p>
        </div>
      </div>
    </>
  )
}
