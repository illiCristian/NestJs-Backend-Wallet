import Image from "next/image";
import chip from '../../../../public/chip.png'; 
import {MouseEventHandler} from 'react';

interface props {
  component: string,
  nextStep: MouseEventHandler<HTMLButtonElement>
}



function ConfirmTransfer({component, nextStep}: props) {
  return (
    <div className={`${component} flex-col justify-start items-start ml-[20px] h-min-[1000px] w-full mt-20`}>
      <h1 className="text-left mr-[750px] mb-5 font-semibold">Completa los datos de tu tarjeta</h1>
      <section className="flex flex-row justify-center items-start">
        <div className='flex flex-col bg-white border-t-white border-b-2 border-b-gray-400 shadow-[0_15px_25px_-31px_rgba(0,0,0,1)] border-[1px] border-gray-400 px-[50px] rounded-xl sh mb-20'>
          <div className="flex flex-col justify-center items-start my-4 bg-[#BFBFBF] mx-24 mt-12 border rounded-lg shadow-[7px_15px_25px_-18px_rgba(0,0,0,1)]">
            <div className="flex flex-row justify-between items-center mx-4 mt-3 ">
              <Image 
                src={chip}
                alt="chip-image"
                width={15}
                height={15}
              />
              <p className="ml-32 text-black my-3 text-xs">
                Expired 10/28
              </p>
            
            </div>
            <p className="ml-4 mt-6 ">
                5168 1234 4567 7890
              </p>
              <p className="ml-4 mt-1 text-sm mb-4">
                Aurora Martínez
              </p>

          </div>
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <div className="flex flex-col justify-center items-start">
              <label 
                htmlFor="numero-tarjeta">
                Número de tarjeta
              </label>
              <input 
                type="number"
                name="numero-tarjeta"
                className="py-3 border border-gray-200 rounded-md w-72"
                />

            </div>
            <div className="flex flex-col justify-center items-start">
              <label 
                htmlFor="numero-tarjeta">
                Vencimiento
              </label>
              <input 
                type="number"
                name="numero-tarjeta"
                className="py-3 border border-gray-200 rounded-md w-44"
                />
            </div>
            
          </div>
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <div className="flex flex-col justify-center items-start">
              <label 
                htmlFor="numero-tarjeta">
                Nombre del Titular
              </label>
              <input 
                type="number"
                name="numero-tarjeta"
                className="py-3 border border-gray-200 rounded-md w-72"
                />

            </div>
            <div className="flex flex-col justify-center items-center">
              <label 
                htmlFor="numero-tarjeta">
                CVV
              </label>
              <input 
                type="number"
                name="numero-tarjeta"
                className="py-3 border border-gray-200 rounded-md w-44"
                />
            </div>
            
          </div>
          <div className="flex flex-row justify-end items-end gap-3 mt-4 mb-9">
            <button 
              className="bg-secondary px-10 text-xs py-2 font-medium text-[#00B1EA] rounded-md cursor-pointer"
              onClick={nextStep}
            >
              Volver
            </button>
            <button 
              className="bg-[#00B1EA] px-10 text-xs py-2 font-medium text-white rounded-md"
              >
              Continuar
            </button>
            
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

export default ConfirmTransfer;
