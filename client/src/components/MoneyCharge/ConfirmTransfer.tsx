'use client'

import chip from '@/../public/chip.png'
import DetailMoney from '@/components/TransferDebit/DetailMoney/DetailMoney'
import {
  createCreditCard,
  depositMoneyWallet,
  transferMoneyToUser,
} from '@/services'
import { useTransferData, useUserProfile } from '@/store/userStore'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import * as yup from 'yup'

const schema = yup.object().shape({
  cardNumber: yup.string().required(),
  name: yup.string().required(),
  expirationDate: yup.string().required(),
  cvv: yup.string().required(),
})

function ConfirmTransfer() {
  const router = useRouter()
  const pathname = usePathname()

  // Store Handlers
  const { updateWallet } = useUserProfile()
  const { tempMoney, setTempMoney, id } = useTransferData()

  // Mutations and Form Handlers
  const { mutate: depositMoney } = useMutation(depositMoneyWallet)
  const { mutate: createCard } = useMutation(createCreditCard)
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSendMoney = (data: any) => {
    createCard(
      {
        paymentType: 'CreditCard',
        ...data,
      },
      {
        onSuccess: (data) => {
          // funcion para realizar el deposito
          const { paymentMethodsCards } = data.data
          depositMoney(
            {
              paymentType: 'CreditCard',
              amount: tempMoney,
              selectedPaymentId:
                paymentMethodsCards[paymentMethodsCards.length - 1],
            },
            {
              onSuccess: async () => {
                // funcion para realizar la transferencia
                if (pathname === '/send-money/charge-money') {
                  const response = await transferMoneyToUser(id, {
                    balance: tempMoney,
                  })
                  if (response.status === 201) {
                    updateWallet(tempMoney)
                    setTempMoney(0)
                    router.push('/success')
                    return
                  }
                }

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
          {/* // ----------- Card -------------- */}
          <div className="flex flex-col justify-start items-start my-4 bg-[#BFBFBF] mx-24 mt-12 border rounded-lg shadow-[7px_15px_25px_-18px_rgba(0,0,0,1)]">
            <div className="flex flex-row items-center justify-between mx-4 mt-3 ">
              <Image src={chip} alt="chip-image" width={15} height={15} />
              <p className="my-3 ml-32 text-xs text-black">
                Expired {watch('expirationDate') || '99/99'}
              </p>
            </div>
            <p className="h-6 mt-6 ml-4">
              {watch('cardNumber') || '9999 9999 9999 9999'}
            </p>
            <p className="h-4 mt-1 mb-4 ml-4 text-sm">
              {watch('name') || 'Aurora Martinez'}
            </p>
          </div>
          {/* // -------------- Form ---------------- */}
          <div className="flex flex-row items-center justify-center gap-3 mt-4">
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="numero-tarjeta">Número de tarjeta</label>
              <InputMask
                {...register('cardNumber')}
                mask="9999 9999 9999 9999"
                maskChar=""
                id="numero-tarjeta"
                className={`px-4 py-3 border border-gray-200 rounded-md w-72 outline-none ${
                  formState.errors.cardNumber
                    ? 'focus:outline-red-500'
                    : 'focus:outline-primary'
                }`}
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="vencimiento-tarjeta">Vencimiento</label>
              <InputMask
                {...register('expirationDate')}
                mask="99/99"
                maskChar=""
                id="vencimiento-tarjeta"
                className={`px-4 py-3 border border-gray-200 rounded-md w-44 outline-none ${
                  formState.errors.expirationDate
                    ? 'focus:outline-red-500'
                    : 'focus:outline-primary'
                }`}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 mt-4 ">
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="titular-tarjeta">Nombre del Titular</label>
              <input
                {...register('name')}
                id="titular-tarjeta"
                className={`px-4 py-3 border border-gray-200 rounded-md w-72 outline-none ${
                  formState.errors.name
                    ? 'focus:outline-red-500'
                    : 'focus:outline-primary'
                }`}
              />
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="cvv-tarjeta">CVV</label>
              <InputMask
                {...register('cvv')}
                mask="999"
                maskChar=""
                id="cvv-tarjeta"
                className={`px-4 py-3 border border-gray-200 rounded-md w-44 outline-none ${
                  formState.errors.cvv
                    ? 'focus:outline-red-500'
                    : 'focus:outline-primary'
                }`}
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
            <button
              disabled={!formState.isValid}
              className={`px-10 text-base text-center py-2 font-medium text-white rounded-md w-[175px] h-[48px] ${
                formState.isValid
                  ? 'bg-tertiary text-white hover:bg-tertiaryDark transition-all duration-500'
                  : ' bg-secondary text-neutral-500'
              }`}
            >
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
