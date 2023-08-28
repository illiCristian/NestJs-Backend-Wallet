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
    <div>
      <section className='successful-debit-transfer'>
        <div>
          <Image src={Success} alt='success' width='100' height='100' />
          <p>¡Listo! Se acreditó tu pago</p>
          <p>Número de Operación: {numberOperationTransferDebit}</p>
        </div>
        <div>
          <p>Fecha y hora:</p>
        </div>
        <Link href='/'>
          <button className='btn btn-primary'>Continuar</button>
        </Link>
      </section>
    </div>
  )
}
