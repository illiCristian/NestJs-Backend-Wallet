import Image from 'next/image'
import credit_icon from '../../../../public/credit-card-icon.svg'
import next_arrow from '../../../../public/next-arrow-icon.svg'
import DetailMoney from '../DetailMoney/DetailMoney'

interface props {
  component: string
  nextStep: () => void
}

const TransferOptions = ({ component, nextStep }: props) => {
  return (
    <div
      className={`${component} flex-col justify-start items-start ml-10 h-min-[700px] w-full mt-5`}
    >
      <h1 className=" text-black text-[25px] font-semibold leading-normal mb-5">
        ¿Cuanto quieres ingresar?
      </h1>
      <section className="flex flex-row">
        <div className="flex flex-col bg-white border-t-white w-[984px] rounded-lg shadow-[0px_4px_4px_0px_#00000025] sh">
          <div
            onClick={nextStep}
            className="flex flex-row justify-between  items-start my-4 px-4 hover:cursor-pointer"
          >
            <div className="flex ">
              <div className="border rounded-full border-gray-300 mx-2">
                <Image
                  src={credit_icon}
                  alt="credit-icon"
                  height={40}
                  width={40}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col justify-start items-start mt-2">
                <p className="text-xs text-black">Nueva tarjeta</p>
                <p className="text-gray-500 text-xs">Débito</p>
              </div>
            </div>
            <Image
              src={next_arrow}
              alt="next-arrow"
              width={25}
              height={25}
              className=" cursor-pointer"
            />
          </div>
          <hr className=" bg-gray-200 border-1" />
          <div className="flex flex-row justify-between  items-start my-4 px-4">
            <div className="flex ">
              <div className="border rounded-full border-gray-300 mx-2">
                <Image
                  src={credit_icon}
                  alt="credit-icon"
                  height={40}
                  width={40}
                  className="p-2 "
                />
              </div>
              <div className="flex flex-col justify-start items-start mt-2">
                <p className="text-xs text-black">Transferencias SPEI</p>
                <p className="text-gray-500 text-xs">
                  Paga con cualquier banco a través de tu banca en línea.
                </p>
              </div>
            </div>
            <Image
              src={next_arrow}
              alt="next-arrow"
              width={25}
              height={25}
              className=" cursor-pointer"
              onClick={nextStep}
            />
          </div>
        </div>
        <DetailMoney />
      </section>
    </div>
  )
}

export default TransferOptions
