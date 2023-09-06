import React from 'react'
import Image from 'next/image'
import credit_icon from '../../../../public/assets/spei/atom (7).svg'
import Link from 'next/link'
import DetailMoney from '@/components/TransferDebit/DetailMoney/DetailMoney'

export default function page() {
  return (
    <>
      <section className="p-6 flex gap-4">
        <div className="flex flex-col bg-white border-t-white w-[984px] h-[147px] rounded-lg shadow-[0px_4px_4px_0px_#00000025] sh">
          <div className="flex flex-row justify-between  items-start my-4 px-4 hover:cursor-pointer">
            <div className="flex gap-4">
              <div className="border rounded-full border-gray-300 w-10 h-10 mt-2">
                <Image
                  src={credit_icon}
                  alt="credit-icon"
                  height={48}
                  width={48}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col justify-start items-start mt-2">
                <p className="text-black text-sm font-normal leading-normal">
                  Transferencias SPEI
                </p>
                <p className="text-neutral-500 text-sm font-normal leading-normal">
                  Mercado pago standard
                </p>
              </div>
            </div>

            <div className="flex ">
              <Link href={''}>
                <p className="text-sky-500 text-xs font-normal leading- mt-2">
                  Modificar
                </p>
              </Link>
            </div>
          </div>
          <div className="flex ml-[74px] items-start ">
            <div className="flex w-[637px] ">
              <div className=" flex flex-col justify-start items-start ">
                <p className="text-black text-sm font-normal leading-normal">
                  Al continuar recibirás las instrucciones para hacer la
                  transferencia desde tu banca en línea o app de tu banco tu
                  banco
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <DetailMoney />
          <Link
            href={'/money-charge/transfer-debit/operation-success'}
            className="w-[200.23px] h-[48.69px] px-16 py-3 bg-sky-500 rounded-md justify-center items-end gap-2 inline-flex  ml-40"
          >
            <button className="origin-top-left rotate-[0.55deg] text-center text-white text-base font-bold leading-normal">
              Continuar
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
