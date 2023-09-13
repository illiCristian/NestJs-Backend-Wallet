'use client'

import { depositMoneyWallet, transferMoneyToUser } from '@/services'
import { useTransferData, useUserProfile } from '@/store/userStore'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

function TransferButton() {
  const router = useRouter()
  const {
    id,
    setTempMoney,
    tempMoney,
    selectedPaymentId,
    setSelectedPaymentId,
  } = useTransferData()
  const { updateWallet } = useUserProfile()
  const { mutate: depositMoney } = useMutation(depositMoneyWallet)

  const handleTransferFromWallet = async () => {
    const response = await transferMoneyToUser(id, { balance: tempMoney })
    if (response.status === 201) {
      router.push('/success')
    }
  }

  const handleTransferFromCard = async () => {
    depositMoney(
      {
        paymentType: 'CreditCard',
        amount: tempMoney,
        selectedPaymentId: selectedPaymentId,
      },
      {
        onSuccess: async () => {
          // funcion para realizar la transferencia
          const response = await transferMoneyToUser(id, {
            balance: tempMoney,
          })
          if (response.status === 201) {
            updateWallet(tempMoney)
            setTempMoney(0)
            setSelectedPaymentId('')
            router.push('/success')
            return
          }
        },
      },
    )
  }

  const handleTransferMoney = () => {
    if (selectedPaymentId !== '') {
      handleTransferFromCard()
      return
    }

    handleTransferFromWallet()
  }

  return (
    <button
      onClick={handleTransferMoney}
      className="w-[900px] h-auto px-16 py-3 bg-sky-500 rounded-md justify-center items-center gap-2 inline-flex text-center text-white text-base font-bold leading-normal mt-10 place-self-center"
    >
      Trasnferir
    </button>
  )
}
export default TransferButton
