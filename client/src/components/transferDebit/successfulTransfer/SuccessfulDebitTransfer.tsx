'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Success from '../../../../public/assets/transfer-debit/success.png'
import Visa from '../../../../public/assets/transfer-debit/visa.png'
import Master from '../../../../public/assets/transfer-debit/master.png'
import CardPay from '../../../../public/assets/transfer-debit/icon-card.png'
import './styles.css'

export default function SuccessfulDebitTransfer () {
  //--------------------------------------------------------------------
  //* TODO ESTE CODIGO ES PARA USARLO CON EL BACKEND DE MERCADO PAGO U OTRA API QUE TENGA BACKEND
  const [numberOperationTransferDebit, setNumberOperationTransferDebit] =
    useState('')

  // const [cardTypeTransfer, setCardTypeTransfer] = useState('')

  // useEffect(() => {
  //   const queryString = window.location.search
  //   const urlParams = new URLSearchParams(queryString)
  //   const numberOperation = urlParams.get('numberOperationTransferDebit')
  //   const card = urlParams.get('cardType') || ''
  //   if (numberOperation) {
  //     setNumberOperationTransferDebit(numberOperation)
  //   }
  //   setCardTypeTransfer(card.toLowerCase())
  // }, [])

  // let cardImage = CardPay // Imagen por defecto

  // if (cardTypeTransfer === 'visa') {
  //   cardImage = Visa
  // } else if (cardTypeTransfer === 'master') {
  //   cardImage = Master
  // } else if (cardTypeTransfer === 'amex') {
  //   cardImage = CardPay
  // }
  //--------------------------------------------------------------------

  return (
    <div className='success-container flex flex-col justify-center items-center mt-32'>
      <section className='success-debit_transfer flex flex-col align-middle justify-center bg-green-500 rounded-lg shadow-lg shadow-slate-400'>
        <div>
          <Image
            src={Success}
            alt='success'
            width='180'
            height='180'
            className='success-image border-2 bg-white'
          />
          <div className='success-text text-center text-white mt-5 font-semibold text-3xl pb-32 relative'>
            <p>¡Listo! Se acreditó tu pago</p>
            <p>Número de Operación: {numberOperationTransferDebit} 123456789</p>
          </div>
        </div>
      </section>
      <section className='success-creditcard flex absolute mt-96 mb-20 bg-white w-1/3 rounded-lg shadow-md shadow-slate-400'>
        <div>
          <Image
            src={Visa}
            alt='success'
            width='70'
            height='70'
            className='ml-5 mt-5'
          />
        </div>
        <div className='ml-10 mt-5 pr-18'>
          <p>Ingresaste a tu cuenta</p>
          <p className='font-light text-sm'>VISA 7895</p>
          <p className='mt-5 font-light text-xs pb-10'>
            En el resúmen de tu tarjeta verás el cargo a nombre de "MERCADO
            PAGO"
          </p>
        </div>
      </section>
      <section className=''>
        <Link href='/'>
          <button className='success-button btn btn-primary mt-24 bg-tertiary text-white w-48 h-14 rounded-md font-bold text-lg hover:bg-tertiaryDark'>
            Continuar
          </button>
        </Link>
      </section>
    </div>
  )
}
