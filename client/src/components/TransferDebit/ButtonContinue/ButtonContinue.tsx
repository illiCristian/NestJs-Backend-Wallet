'use client'

import { depositMoneyWallet } from '@/services'
import { useTransferData } from '@/store/userStore'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

function ButtonContinue() {
  const router = useRouter()
  const { selectedPaymentId, tempMoney, setTempMoney, setSelectedPaymentId } =
    useTransferData()
  const { mutate: depositMoney } = useMutation(depositMoneyWallet)

  const handleTransferFromCard = async () => {
    depositMoney(
      {
        paymentType: 'CreditCard',
        amount: tempMoney,
        selectedPaymentId: selectedPaymentId,
      },
      {
        onSuccess: async () => {
          setTempMoney(0)
          setSelectedPaymentId('')
          router.push('/success')
        },
      },
    )
  }

  return (
    <button
      onClick={handleTransferFromCard}
      className={`mt-6 px-10 text-base text-center py-2 font-medium text-white rounded-md w-[175px] h-[48px] ${
        selectedPaymentId
          ? 'bg-tertiary text-white hover:bg-tertiaryDark transition-all duration-500'
          : 'hidden'
      }`}
    >
      Continuar
    </button>
  )
}
export default ButtonContinue
