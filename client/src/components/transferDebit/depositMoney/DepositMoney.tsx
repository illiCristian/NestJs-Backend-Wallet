import React, { ChangeEvent, EventHandler, MouseEventHandler, SetStateAction, useState } from 'react'

interface props {
  component: string,
  nextStep: MouseEventHandler<HTMLButtonElement>
}


const DepositMoney = ({component, nextStep}: props) => {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e: any): void => {
    e.preventDefault();
    setQuantity(e.target.value);
    console.log('funciona');
    
  };

  return (
    <div className={`${component} flex-col justify-start items-start my-[100px] ml-[200px] h-min-[700px] w-full`}>
      <h1 className="text-left mr-52 mb-5 font-semibold">¿Cuanto quieres ingresar?</h1>
      <div className='flex flex-col bg-white border-t-white border-b-2 border-b-gray-400 shadow-[0_15px_25px_-31px_rgba(0,0,0,1)] border-[1px] border-gray-400 px-[50px] rounded-xl sh'>
        <div className="flex flex-row justify-center items-center my-4 mx-10">
        <p className="text-xl mx-6">$</p>
        <form action="">
          <input 
            // name='value'
            id='quantity'
            name='quantity'
            type="number"
            className=" outline-none focus:outline-none flex items-center border-white w-32"
            onChange={handleChange}
            value={quantity}

           />
        </form>
        </div>
        <hr className="-mx-[50px] bg-gray-200 border-1" />
        <div className="flex flex-row items-center justify-around my-4 gap-3">
          <button 
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={
              () => setQuantity(500)
            }
            >
            $500
          </button>
          <button 
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={
              () => setQuantity(1000)
            }>
            $1000
          </button>
          <button 
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={
              () => setQuantity(2000)
            }
            >
            $2000
          </button>
          <button 
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={
              () => setQuantity(3000)
            }
            >
            $3000
          </button>

        </div>
       
      </div>
      <button 
        className={`${quantity === null || quantity < 1 ? `bg-gray-400 text-gray-700`:`bg-[#00B1EA] text-white font-medium`} px-8 py-2 mt-4 ml-64 text-xs rounded-md `}
        onClick={
          nextStep
        }
        >
          Continuar
        </button>
    </div>
  )
}

export default DepositMoney;
