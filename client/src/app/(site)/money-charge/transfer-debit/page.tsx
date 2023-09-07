'use client'

import ConfirmTransfer from '@/components/transferDebit/confirmTransfer/ConfirmTransfer'
import DepositMoney from '@/components/transferDebit/depositMoney/DepositMoney'
import TransferOptions from '@/components/transferDebit/transferOptions/TransferOptions'
import { Fragment, useState } from 'react'

const depositMoney = () => {
  const [first, setFirst] = useState('flex')
  const [second, setSecond] = useState('hidden')
  const [third, setThird] = useState('hidden')

  return (
    <Fragment>
      <div className="min-h-[653px]">
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
      </div>
    </Fragment>
  )
}

export default depositMoney
