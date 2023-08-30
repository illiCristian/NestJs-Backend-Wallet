import Image from "next/image";
import credit_icon from '../../../../public/credit-card-icon.svg'; 
import transfer_spei from '../../../../public/transfer-spei.svg'; 
import next_arrow from '../../../../public/next-arrow-icon.svg'; 


const TransferOptions = () => {
  return (
    <div className='flex flex-col justify-start items-center h-min-[700px] w-full mt-20'>
      <h1 className="text-left mr-[750px] mb-5 font-semibold">¿Cuanto quieres ingresar?</h1>
      <section className="flex flex-row justify-center items-start">
        <div className='flex flex-col bg-white border-t-white border-b-2 border-b-gray-400 shadow-[0_15px_25px_-31px_rgba(0,0,0,1)] border-[1px] border-gray-400 px-[50px] rounded-xl sh'>
          <div className="flex flex-row justify-center items-start my-4 ">
          {/* <p className="text-xl mx-6">$</p> */}
          <div className="border rounded-full border-gray-300 mx-2">
          <Image
            src={credit_icon}
            alt="credit-icon"
            height={40}
            width={40}
            className="p-2 "
            />
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-xs text-black">Nueva tarjeta</p>
              <p className="text-gray-500 text-xs">Débito</p>

            </div>
            <Image 
              src={next_arrow}
              alt="next-arrow"
              width={25}
              height={25}
              className="ml-80"
            />
        
          </div>
          <hr className="-mx-[50px] bg-gray-200 border-1" />
          <div className="flex flex-row justify-center items-start my-4 ">
          {/* <p className="text-xl mx-6">$</p> */}
          <div className="border rounded-full border-gray-300 mx-2">
          <Image
            src={transfer_spei}
            alt="credit-icon"
            height={40}
            width={40}
            className="p-2 "
            />
            </div>
            <div className="flex flex-col justify-start items-start mt-1">
              <p className="text-xs text-black">Transferencias SPEI</p>
              <p className="text-gray-500 text-xs">Paga con cualquier banco a través de tu banca en línea.</p>

            </div>
            <Image 
              src={next_arrow}
              alt="next-arrow"
              width={25}
              height={25}
              className="ml-[100px]"
            />
        
          </div>

        </div>
        <div className='flex flex-col items-start justify-start w-[350px] bg-white border-t-white border-b-2 border-b-gray-400 shadow-[0_15px_25px_-31px_rgba(0,0,0,1)] border-[1px] border-gray-400  ml-4 rounded-xl sh'>
          <p className="py-6 pl-4 font-medium text-black">Detalle</p>
          {/* <hr className="w-[350px] bg-black border-1" /> */}

          <div className="flex flex-row justify-between pt-1 pb-12 pl-4">
            <p className="text-sm text-black" >Ingresas</p>
            <p className="ml-52">$ 600</p>
          </div>

        </div>
      </section>
    </div>

  )
}

export default TransferOptions;
