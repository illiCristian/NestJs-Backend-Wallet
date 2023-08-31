'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Success from '../../../public/assets/vectors/success.png'
import './styles.css'

export default function SuccessfulDebitTransfer () {
  const [numberOperationTransferDebit, setNumberOperationTransferDebit] =
    useState('')

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const numberOperation = urlParams.get('numberOperationTransferDebit')
    if (numberOperation) {
      setNumberOperationTransferDebit(numberOperation)
    }
  }, [])

  return (
    <div className='success-container flex flex-col justify-center items-center'>
      <section className='success-debit_transfer flex flex-col align-middle justify-center bg-green-500 rounded-md w-2/4 h-80'>
        <div>
          <Image
            src={Success}
            alt='success'
            width='180'
            height='180'
            className='success-image border-2 bg-white mt-5'
          />
          <div className='text-center text-white mt-5 font-semibold text-2xl'>
            <p>¡Listo! Se acreditó tu pago</p>
            <p>Número de Operación: {numberOperationTransferDebit}</p>
          </div>
        </div>
      </section>
      <section className='success-creditcard'>
        <div>
          <Image src={Success} alt='success' width='100' height='100' />
        </div>
        <div>
          <p>Ingresaste a tu cuenta</p>
          <p>VISA 7895</p>
          <p>
            En el resúmen de tu tarjeta verás el cargo a nombre de "MERCADO
            PAGO"
          </p>
        </div>
      </section>
      <section className='success-button'>
        <Link href='/success'>
          <button className='btn btn-primary'>Continuar</button>
        </Link>
      </section>
    </div>
  )
}
