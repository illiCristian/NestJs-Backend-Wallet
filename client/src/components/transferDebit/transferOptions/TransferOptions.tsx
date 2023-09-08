import Image from 'next/image'
import credit_icon from '../../../../public/credit-card-icon.svg'
import next_arrow from '../../../../public/next-arrow-icon.svg'
import DetailMoney from '../DetailMoney/DetailMoney'
import Link from 'next/link'

const TransferOptions = () => {
  return (
    <div className="flex flex-col justify-start items-start ml-10 h-min-[700px] w-full mt-5">
      <h1 className=" text-black text-[25px] font-semibold leading-normal mb-5">
        ¿Cuanto quieres ingresar?
      </h1>
      <section className="flex flex-row">
        <div className="flex flex-col bg-white border-t-white w-[984px] rounded-lg shadow-[0px_4px_4px_0px_#00000025] sh">
          <Link
            href={'/money-charge/transfer-debit/confirm-transfer'}
            className="flex flex-row items-start justify-between px-4 my-4 hover:cursor-pointer"
          >
            <div className="flex ">
              <div className="mx-2 border border-gray-300 rounded-full">
                <Image
                  src={credit_icon}
                  alt="credit-icon"
                  height={40}
                  width={40}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-2">
                <p className="text-xs text-black">Nueva tarjeta</p>
                <p className="text-xs text-gray-500">Débito</p>
              </div>
            </div>
            <Image
              src={next_arrow}
              alt="next-arrow"
              width={25}
              height={25}
              className="cursor-pointer "
            />
          </Link>
          <hr className="bg-gray-200 border-1" />
          <Link
            href={'/money-charge/transfer-debit/spei'}
            className="flex flex-row items-start justify-between px-4 my-4"
          >
            <div className="flex ">
              <div className="mx-2 border border-gray-300 rounded-full">
                <Image
                  src={credit_icon}
                  alt="credit-icon"
                  height={40}
                  width={40}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-2">
                <p className="text-xs text-black">Transferencias SPEI</p>
                <p className="text-xs text-gray-500">
                  Paga con cualquier banco a través de tu banca en línea.
                </p>
              </div>
            </div>
            <Image
              src={next_arrow}
              alt="next-arrow"
              width={25}
              height={25}
              className="cursor-pointer "
            />
          </Link>
        </div>
        <DetailMoney />
      </section>
    </div>
  )
}

export default TransferOptions
