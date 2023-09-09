import Link from 'next/link'
import home from '../../../public/assets/send-money/atom-1.svg'
import arrow from '../../../public/assets/send-money/atom-2.svg'
import wallet from '../../../public/assets/send-money/atom.svg'
import group from '../../../public/assets/send-money/Group.svg'
import Image from 'next/image'

export default function SendMoneyOptions() {
  return (
    <>
      <section className="flex flex-row min-h-[660px] justify-center mt-10">
        <div className="flex flex-col bg-white border-t-white w-[892px] h-[353px] rounded-lg shadow-[0px_1px_4px_2px_#00000025] sh ">
          <Link
            href={'/send-money/search-user'}
            className="flex flex-row items-start justify-between px-8 my-8"
          >
            <div className="flex gap-6">
              <div className="w-10 h-10 mt-2 border border-gray-300 rounded-full">
                <Image
                  src={wallet}
                  alt="credit-icon"
                  height={48}
                  width={48}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-2">
                <p className="text-base font-normal leading-normal text-black">
                  A cuenta de Mercado Pago Wallet
                </p>
                <p className="text-sm font-normal leading-normal text-neutral-500">
                  Con e-mail, celular o nombre
                </p>
              </div>
            </div>
            <div className="flex mt-5 ">
              <Image src={arrow} alt="arrow" />
            </div>
          </Link>
          <hr />
          <Link
            href={''}
            className="flex flex-row items-start justify-between px-8 my-8"
          >
            <div className="flex gap-6">
              <div className="w-10 h-10 mt-2 border border-gray-300 rounded-full">
                <Image
                  src={home}
                  alt="credit-icon"
                  height={48}
                  width={48}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-2">
                <p className="text-base font-normal leading-normal text-black">
                  A cuenta bancaria o digital
                </p>
                <p className="text-sm font-normal leading-normal text-neutral-500">
                  Con CLABE o tarjeta de débito
                </p>
              </div>
            </div>
            <div className="flex mt-5">
              <Image src={arrow} alt="arrow" />
            </div>
          </Link>
          <hr />
          <Link
            href={''}
            className="flex flex-row items-start justify-between px-8 my-8"
          >
            <div className="flex gap-6">
              <div className="w-10 h-10 mt-2 border border-gray-300 rounded-full">
                <Image
                  src={group}
                  alt="credit-icon"
                  height={48}
                  width={48}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-2">
                <p className="text-base font-normal leading-normal text-black">
                  Transferencia internacional
                </p>
                <p className="text-sm font-normal leading-normal text-neutral-500">
                  Convertimos los fondos a la divisa local del destinatario
                </p>
              </div>
            </div>
            <div className="flex mt-5 ">
              <Image src={arrow} alt="arrow" />
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
