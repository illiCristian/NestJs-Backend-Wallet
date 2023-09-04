import React, { MouseEventHandler, useState } from 'react'

interface props {
  component: string
  nextStep: MouseEventHandler<HTMLButtonElement>
}

const DepositMoney = ({ component, nextStep }: props) => {
  const [quantity, setQuantity] = useState(0)

  const handleChange = (e: any): void => {
    e.preventDefault()
    setQuantity(e.target.value)
    console.log('funciona')
  }

  return (
    <div className={`${component} flex-col items-start d w-full mt-5 ms-96 `}>
      <h1 className="text-black text-[25px] font-semibold leading-normal mb-5">
        ¿Cuanto quieres ingresar?
      </h1>
      <div className="flex flex-col bg-white  rounded-lg shadow-[0px_4px_4px_0px_#00000025] w-[544px]  px-[50px]  sh">
        <div className="flex flex-row justify-start items-center my-4 mx-5">
          <p className="text-xl">$</p>
          <form action="">
            <input
              id="quantity"
              name="quantity"
              type="number"
              className=" outline-none focus:outline-none flex items-center border-white w-32 remove-arrow ms-44"
              onChange={handleChange}
              value={quantity}
            />
          </form>
        </div>
        <hr className="-mx-[50px] bg-gray-200 border-1" />
        <div className="flex flex-row items-center justify-center my-4 gap-5">
          <button
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={() => setQuantity(500)}
          >
            $500
          </button>
          <button
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={() => setQuantity(1000)}
          >
            $1000
          </button>
          <button
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={() => setQuantity(2000)}
          >
            $2000
          </button>
          <button
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={() => setQuantity(3000)}
          >
            $3000
          </button>
        </div>
      </div>
      <div className="">
        <button
          className={`${
            quantity === null || quantity < 1
              ? `bg-gray-400 text-gray-700`
              : `bg-[#00B1EA] text-white font-medium`
          } mt-4  text-base rounded-md w-[200.23px] h-[48.69px] ml-[345px]  `}
          onClick={nextStep}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

export default DepositMoney
