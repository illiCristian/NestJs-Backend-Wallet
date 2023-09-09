'use client'

import { transferMoneyToUser } from '@/services'
import { useTransferData } from '@/store/userStore'
import { useRouter } from 'next/navigation'

function TransferButton() {
  const router = useRouter()
  const { id, tempMoney } = useTransferData()

  const handleTransferMoney = async () => {
    const response = await transferMoneyToUser(id, { balance: tempMoney })
    if (response.status === 201) {
      router.push('/success')
    }
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
