import React from 'react'
import user from '../../../public/assets/money-charge/user.svg'
import arrow from '../../../public/assets/money-charge/arrow.svg'
import mail from '../../../public/assets/money-charge/mail.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function TransferCard() {
  return (
    <>
      <section className="flex flex-col gap-4 w-[1142px]   h-40 bg-white rounded-lg shadow-[0px_4px_4px_0px_#00000025] px-5 py-5">
        <Link href={'/money-charge/clabe'} className="flex justify-between ">
          <div className="flex gap-3 ">
            <Image
              src={user}
              alt="user"
              className="inline-flex items-start justify-start w-6 h-6"
            />
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold leading-normal text-black ">
                Transferencia con CLABE
              </h4>
              <div className="flex gap-3">
                <h5 className="text-base font-extrabold leading-normal text-lime-800">
                  Gratis
                </h5>
                <h6 className="text-base font-normal leading-normal text-neutral-500">
                  Instantáneo
                </h6>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className=" w-[110px] h-6 bg-sky-100 rounded-[37px]">
              <p className="w-24 h-6 px-2 py-1 text-xs font-normal leading-normal text-center text-sky-500">
                RECOMENDADO
              </p>
            </div>
            <Image src={arrow} alt="arrow" className="w-6 h-6 " />
          </div>
        </Link>
        <Link
          href={'/money-charge/transfer-debit'}
          className="flex justify-between "
        >
          <div className="flex gap-3 ">
            <Image
              src={mail}
              alt="mail"
              className="inline-flex items-start justify-start w-6 h-6"
            />
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold leading-normal text-black TransferenciaConClabe">
                Tarjeta de débito
              </h4>
              <div className="flex gap-2">
                <h5 className="text-base font-normal leading-normal text-neutral-500">
                  2 Ingresos gratis al mes
                </h5>
                <div className="w-1 h-1 mt-3 rounded-full bg-neutral-500 p-auto "></div>
                <h5 className="text-base font-normal leading-normal text-neutral-500">
                  Instanáneo
                </h5>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <Image src={arrow} alt="arrow" className="w-6 h-6 " />
          </div>
        </Link>
      </section>
    </>
  )
}
