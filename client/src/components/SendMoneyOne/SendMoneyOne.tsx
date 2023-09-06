"use client"

import Image from 'next/image';
import React, { useState } from 'react'


const SendMoneyOne = () => {
  const [input, setInput] = useState<{description: string; quantity: number}>({
    quantity: 0,
    description: ""
  });

  // const handleChange = (e: any): void => {
  //   e.preventDefault()
  //   setInput({
  //     ...input, 
  //     [e.target.name] : e.target.value
  //   })
  // }

  return (
    <div className={`flex flex-col items-start mt-5 ms-40 `}>
      <h1 className="text-black text-[25px] font-semibold leading-normal mb-5">
        ¿Cuanto quieres transferir?
      </h1>
      <div className="flex flex-col justify-center items-center bg-white  rounded-lg shadow-[0px_4px_4px_4px_#00000025]">
        <div className="flex flex-row justify-start items-center mt-4 mb-20 mx-5 gap-2 mr-[450px]">
          <div className='px-[10px] py-2 bg-[#6088F7] border-none rounded-full text-md z-[0]'>AJ</div>
          <p className='text-black text-xs'>Aurora Jiménez</p>
        </div>
        {/* <div className="flex flex-row justify-center items-center my-4">
            <p className="text-xl ml-10">$</p>
        
              <input
                id="input"
                name="input"
                type="number"
                className="outline-none focus:outline-none flex items-start  border-white remove-arrow text-2xl"
                onChange={handleChange}
                value={input}
              />
        
          </div> */}
          <div className='flex flex-row gap-10 mx-44'>
            <p className='py-3 text-2xl'>$</p>
            <input 
              name='quantity'
              type="number" 
              onChange={(e)=> setInput({...input, quantity: e.target.value})}
              value={input.quantity}
              className='outline-none focus:outline-none w-[165px] py-3 text-2xl remove-arrow ml-16'
              />

          </div>
        <hr className=" bg-gray-200 border-1 w-[300px] mt-4" />
        <div className="flex flex-row items-center justify-center my-4 gap-10 mx-auto">
          <button
            name='500'
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={(e) => setInput({...input, quantity: 500})}
          >
            $500
          </button>
          <button
            name='1000'
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={(e) => setInput({...input, quantity: 1000})}
          >
            $1000
          </button>
          <button
            name='2000'
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={() => setInput({...input, quantity: 2000})}
          >
            $2000
          </button>
          <button
            name='3000'
            className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200"
            onClick={(): any => setInput({...input, quantity: 3000})}
          >
            $3000
          </button>
        </div>
        <hr className="bg-gray-200 border-1 w-full mt-4" />

          <input 
            name='subject'
            type="text" 
            placeholder='¿Quieres decirle algo?'
            className='border border-gray-300 rounded-md py-3 text-black my-4 text-sm w-[540px]'
            onChange={(e)=> {setInput({...input, description: e.target.value})}}
            value={input.description}
          />
        <button
          className={`${
            input.quantity === null || input.quantity < 1
              ? `bg-gray-400 text-gray-700`
              : `bg-[#00B1EA] text-white font-medium`
          } mt-3 mb-16  text-base rounded-md w-[200.23px] h-[46.69px] ml-[340px]  `}
          // onClick={nextStep}
        >
          Continuar
        </button>
 
      </div>
     
    </div>
  )
}

export default SendMoneyOne

