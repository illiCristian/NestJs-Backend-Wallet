'use client'

import ConfirmTransfer from '@/components/TransferDebit/confirmTransfer/ConfirmTransfer'
import DepositMoney from '@/components/TransferDebit/depositMoney/DepositMoney'
import TransferOptions from '@/components/TransferDebit/transferOptions/TransferOptions'
import { Fragment, useState } from 'react'

const depositMoney = () => {
  const [first, setFirst] = useState('flex')
  const [second, setSecond] = useState('hidden')
  const [third, setThird] = useState('hidden')

  return (
    <Fragment>
      <DepositMoney
        component={first}
        nextStep={() => {
          setFirst('hidden')
          setSecond('flex')
        }}
      />
      <TransferOptions
        component={second}
        nextStep={() => {
          setSecond('hidden')
          setThird('flex')
        }}
      />
      <ConfirmTransfer
        component={third}
        nextStep={() => {
          setThird('hidden')
          setSecond('flex')
        }}
      />
    </Fragment>
  )
  // const [value, setValue] = useState(0);

  // return (
  //   <div className='flex flex-col justify-start items-center h-min-[700px] w-full'>
  //     <h1 className="text-left mr-52 mb-5">Cuanto quieres ingresar?</h1>
  //     <div className='flex flex-col bg-white border-t-white border-b-2 border-b-gray-400 shadow-[0_15px_25px_-31px_rgba(0,0,0,1)] border-[1px] border-gray-400 px-[30px] rounded-xl sh'>
  //       <div className="flex flex-row justify-center items-center my-4 mx-5">
  //       <p className="text-xl mx-3">$</p>
  //       <form action="">
  //         <input
  //           type="number"
  //           className=" border-none hover:border-none focus:border-none"
  //           onChange={() => setValue(value)}

  //          />
  //       </form>
  //       </div>
  //       <hr className="-mx-[30px] bg-gray-200 border-1" />
  //       <div className="flex flex-row items-center justify-around my-4">
  //         <button className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200">
  //           $500
  //         </button>
  //         <button className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200">
  //           $1000
  //         </button>
  //         <button className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200">
  //           $2000
  //         </button>
  //         <button className="text-xs border-[1px] rounded-2xl text-gray-500 py-2 px-3 border-gray-200">
  //           $3000
  //         </button>

  //       </div>

  //     </div>
  //     <button className="bg-gray-400 px-8 py-2 mt-4 ml-64 text-xs rounded-md text-gray-700">
  //         Continuar
  //       </button>
  //   </div>
  // )
}

export default depositMoney
