'use client'

import chip from '@/../public/chip.png'
import DetailMoney from '@/components/TransferDebit/DetailMoney/DetailMoney'
import { createCreditCard, depositMoneyWallet } from '@/services'
import { useTransferData, useUserProfile } from '@/store/userStore'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function ConfirmTransfer() {
  const router = useRouter()
  const { updateWallet } = useUserProfile()
  const { tempMoney, setTempMoney, setSelectedPaymentId, selectedPaymentId } =
    useTransferData()
  const { mutate: depositMoney } = useMutation(depositMoneyWallet)
  const { mutate: createCard } = useMutation(createCreditCard)
  const { register, handleSubmit } = useForm()

  const handleSendMoney = (data: any) => {
    createCard(
      {
        paymentType: 'CreditCard',
        ...data,
      },
      {
        onSuccess(data) {
          const { paymentMethodsCards } = data.data
          setSelectedPaymentId(
            paymentMethodsCards[paymentMethodsCards.lenght - 1],
          )

          depositMoney(
            {
              paymentType: 'CreditCard',
              amount: tempMoney,
              selectedPaymentId: selectedPaymentId,
            },
            {
              onSuccess: () => {
                updateWallet(tempMoney)
                setTempMoney(0)
                router.push('/success')
              },
            },
          )
        },
      },
    )
  }

  return (
    <div className="flex-col justify-start items-start ml-[20px] h-min-[1000px] w-full mt-5 ps-8">
      <h1 className="text-black text-[25px] font-semibold leading-normal mb-5">
        Completa los datos de tu tarjeta
      </h1>
      <section className="flex flex-row items-start justify-">
        <form
          onSubmit={handleSubmit(handleSendMoney)}
          className="flex flex-col bg-white border-t-white rounded-lg shadow-[0px_4px_4px_0px_#00000025]  px-[50px]  sh mb-20"
        >
          <div className="flex flex-col justify-start items-start my-4 bg-[#BFBFBF] mx-24 mt-12 border rounded-lg shadow-[7px_15px_25px_-18px_rgba(0,0,0,1)]">
            <div className="flex flex-row items-center justify-between mx-4 mt-3 ">
              <Image src={chip} alt="chip-image" width={15} height={15} />
              <p className="my-3 ml-32 text-xs text-black">Expired 10/28</p>
            </div>
            <p className="mt-6 ml-4 ">5168 1234 4567 7890</p>
            <p className="mt-1 mb-4 ml-4 text-sm">Aurora Martínez</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 mt-4">
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="numero-tarjeta">Número de tarjeta</label>
              <input
                {...register('cardNumber', { minLength: 16, maxLength: 16 })}
                id="numero-tarjeta"
                className="px-4 py-3 border border-gray-200 rounded-md w-72 focus:outline-primary remove-arrow"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="vencimiento-tarjeta">Vencimiento</label>
              <input
                {...register('expirationDate')}
                id="vencimiento-tarjeta"
                className="px-4 py-3 border border-gray-200 rounded-md w-44 focus:outline-primary remove-arrow"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 mt-4 ">
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="titular-tarjeta">Nombre del Titular</label>
              <input
                {...register('name')}
                id="titular-tarjeta"
                className="px-4 py-3 border border-gray-200 rounded-md w-72 focus:outline-primary remove-arrow "
              />
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="cvv-tarjeta">CVV</label>
              <input
                {...register('cvv')}
                id="cvv-tarjeta"
                className="px-4 py-3 border border-gray-200 rounded-md w-44 focus:outline-primary remove-arrow"
              />
            </div>
          </div>
          <div className="flex flex-row items-end justify-end gap-3 mt-4 mb-9">
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-secondary px-10 text-base py-2 font-medium text-[#00B1EA] rounded-md cursor-pointer w-[175px] h-[48px]"
            >
              Volver
            </button>
            <button className="bg-[#00B1EA] px-10 text-base text-center py-2 font-medium  text-white rounded-md w-[175px] h-[48px]">
              Continuar
            </button>
          </div>
        </form>
        <DetailMoney />
      </section>
    </div>
  )
}

export default ConfirmTransfer
