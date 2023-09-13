'use client'

import arrow from '@/../../public/assets/dashboard/arrow2.svg'
import { getWallet } from '@/services'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

function BalanceMoney() {
  const { data } = useQuery(['wallet'], getWallet)
  const balance = data?.data

  // Función para formatear el saldo como una cantidad de dinero
  const formatMoney = (amount: any) => {
    return amount?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <div className="flex justify-between py-2">
      <div className="text-black text-[31px] font-semibold leading-normal">
        {`$ ${formatMoney(balance?.balance)}`}
      </div>
      <Image src={arrow} alt="arrow" />
    </div>
  )
}
export default BalanceMoney
