'use client'

import { useUserProfile } from '@/store/userStore'
import arrow from '@/../../public/assets/dashboard/arrow2.svg'
import Image from 'next/image'

function BalanceMoney() {
  const { walletId } = useUserProfile()

  return (
    <div className="flex justify-between py-2">
      <div className="text-black text-[31px] font-semibold leading-normal">
        $ {walletId.balance}
      </div>
      <Image src={arrow} alt="arrow" />
    </div>
  )
}
export default BalanceMoney
