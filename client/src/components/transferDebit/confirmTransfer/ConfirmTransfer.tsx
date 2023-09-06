import Image from 'next/image'
import chip from '../../../../public/chip.png'
import { MouseEventHandler } from 'react'
import DetailMoney from '../DetailMoney/DetailMoney'
import Link from 'next/link'
import { useTempMoney, useUserProfile } from '@/store/userStore'

interface props {
  component: string
  nextStep: MouseEventHandler<HTMLButtonElement>
}

function ConfirmTransfer({ component, nextStep }: props) {
  const { updateWallet } = useUserProfile()
  const { tempMoney, setTempMoney } = useTempMoney()

  const handleSendMoney = () => {
    updateWallet(tempMoney)
    setTempMoney(0)
  }

  return (
    <div
      className={`${component} flex-col justify-start items-start ml-[20px] h-min-[1000px] w-full mt-5 ps-8`}
    >
      <h1 className="text-black text-[25px] font-semibold leading-normal mb-5">
        Completa los datos de tu tarjeta
      </h1>
      <section className="flex flex-row items-start justify-center">
        <div className="flex flex-col bg-white border-t-white rounded-lg shadow-[0px_4px_4px_0px_#00000025]  px-[50px]  sh mb-20">
          <div className="flex flex-col justify-center items-start my-4 bg-[#BFBFBF] mx-24 mt-12 border rounded-lg shadow-[7px_15px_25px_-18px_rgba(0,0,0,1)]">
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
                type="number"
                name="numero-tarjeta"
                className="px-4 py-3 border border-gray-200 rounded-md w-72 focus:outline-primary remove-arrow"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="numero-tarjeta">Vencimiento</label>
              <input
                type="number"
                name="numero-tarjeta"
                className="px-4 py-3 border border-gray-200 rounded-md w-44 focus:outline-primary remove-arrow"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 mt-4 ">
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="numero-tarjeta">Nombre del Titular</label>
              <input
                type="text"
                name="numero-tarjeta"
                className="px-4 py-3 border border-gray-200 rounded-md w-72 focus:outline-primary remove-arrow "
              />
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="numero-tarjeta">CVV</label>
              <input
                type="number"
                name="numero-tarjeta"
                className="px-4 py-3 border border-gray-200 rounded-md w-44 focus:outline-primary remove-arrow"
              />
            </div>
          </div>
          <div className="flex flex-row items-end justify-end gap-3 mt-4 mb-9">
            <button
              className="bg-secondary px-10 text-base py-2 font-medium text-[#00B1EA] rounded-md cursor-pointer w-[175px] h-[48px]"
              onClick={nextStep}
            >
              Volver
            </button>
            <Link href={'/money-charge/transfer-debit/operation-success'}>
              <button
                onClick={handleSendMoney}
                className="bg-[#00B1EA] px-10 text-base py-2 font-medium  text-white rounded-md w-[175px] h-[48px]"
              >
                Continuar
              </button>
            </Link>
          </div>
        </div>
        <DetailMoney />
      </section>
    </div>
  )
}

export default ConfirmTransfer
