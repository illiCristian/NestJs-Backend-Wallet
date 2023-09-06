'use client'

import { depositMoneyBank } from '@/services'
import { useTempMoney, useUserProfile } from '@/store/userStore'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

function DepositButtonBank() {
  const router = useRouter()
  const { mutate: depositMoney } = useMutation(depositMoneyBank)
  const { updateWallet } = useUserProfile()
  const { tempMoney, setTempMoney } = useTempMoney()

  const handleDepositMoney = () => {
    depositMoney(
      {
        amount: tempMoney,
        selectedPaymentId: '64f8c4fb98943515df502fb0',
      },
      {
        onSuccess: () => {
          updateWallet(tempMoney)
          setTempMoney(0)
          router.push('/money-charge/transfer-debit/operation-success')
        },
      },
    )
  }

  return (
    <button
      onClick={handleDepositMoney}
      className="w-[200.23px] h-[48.69px] px-16 py-3 bg-sky-500 rounded-md justify-center items-end gap-2 inline-flex  ml-40 text-center text-white text-base font-bold leading-normal"
    >
      Continuar
    </button>
  )
}
export default DepositButtonBank
