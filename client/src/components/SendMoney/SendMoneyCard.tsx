import home from '../../../public/assets/send-money/atom-1.svg'
import arrow from '../../../public/assets/send-money/atom-2.svg'
import wallet from '../../../public/assets/send-money/atom.svg'
import Image from 'next/image'

export default function SendMoneyCard() {
  return (
    <>
      <section className="flex flex-row min-h-[660px] justify-center mt-5">
        <div className="flex flex-col bg-white border-t-white w-[892px] h-[236px] rounded-lg shadow-[0px_1px_4px_2px_#00000025] sh">
          <div
            // onClick={nextStep}
            className="flex flex-row justify-between items-start my-4 px-4 hover:cursor-pointer mt-10"
          >
            <div className="flex">
              <div className="border rounded-full border-gray-300 mx-2">
                <Image
                  src={wallet}
                  alt="wallet"
                  height={40}
                  width={40}
                  className="p-2"
                />
              </div>
              <div className="flex flex-col justify-start items-start mt-2 ms-5">
                <p className=" text-black text-base font-normal leading-normal">
                  A cuenta de Mercado Pago Wallet
                </p>
                <p className="text-gray-500 text-xs">
                  Con e-mail, celular o nombre
                </p>
              </div>
            </div>
            <Image
              src={arrow}
              alt="home"
              width={25}
              height={25}
              className=" cursor-pointer"
            />
          </div>
          <hr className=" bg-gray-200 border- mt-5" />
          <div className="flex flex-row justify-between  items-start my-4 px-4 mt-10">
            <div className="flex ">
              <div className="border rounded-full border-gray-300 mx-2">
                <Image
                  src={home}
                  alt="home"
                  height={40}
                  width={40}
                  className="p-2"
                />
              </div>
              <div className="flex flex-col justify-start items-start mt-2 ms-5">
                <p className=" text-black text-base font-normal leading-normal">
                  A cuenta bancaria o digital
                </p>
                <p className="text-gray-500 text-xs">
                  Con CLABE o tarjeta de débito
                </p>
              </div>
            </div>
            <Image
              src={arrow}
              alt="next-arrow"
              width={25}
              height={25}
              className=" cursor-pointer"
              //   onClick={nextStep}
            />
          </div>
        </div>
      </section>
    </>
  )
}
