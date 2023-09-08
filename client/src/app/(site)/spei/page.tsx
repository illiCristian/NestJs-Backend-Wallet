import DepositButtonBank from '@/components/TransferDebit/DepositButtonBank/DepositButtonBank'
import DetailMoney from '@/components/TransferDebit/DetailMoney/DetailMoney'
import Image from 'next/image'
import Link from 'next/link'
import credit_icon from '../../../../public/assets/spei/atom (7).svg'

export default function page() {
  return (
    <>
      <section className="flex gap-4 p-6">
        <div className="flex flex-col bg-white border-t-white w-[984px] h-[147px] rounded-lg shadow-[0px_4px_4px_0px_#00000025] sh">
          <div className="flex flex-row items-start justify-between px-4 my-4 hover:cursor-pointer">
            <div className="flex gap-4">
              <div className="w-10 h-10 mt-2 border border-gray-300 rounded-full">
                <Image
                  src={credit_icon}
                  alt="credit-icon"
                  height={48}
                  width={48}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-2">
                <p className="text-sm font-normal leading-normal text-black">
                  Transferencias SPEI
                </p>
                <p className="text-sm font-normal leading-normal text-neutral-500">
                  Mercado pago standard
                </p>
              </div>
            </div>

            <div className="flex ">
              <Link href={''}>
                <p className="mt-2 text-xs font-normal text-sky-500 leading-">
                  Modificar
                </p>
              </Link>
            </div>
          </div>
          <div className="flex ml-[74px] items-start ">
            <div className="flex w-[637px] ">
              <div className="flex flex-col items-start justify-start ">
                <p className="text-sm font-normal leading-normal text-black">
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
          <DepositButtonBank />
        </div>
      </section>
    </>
  )
}
