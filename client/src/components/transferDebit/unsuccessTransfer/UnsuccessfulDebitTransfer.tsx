'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Unsuccess from '../../../../public/assets/transfer-debit/unsuccess2.png'
import './styles.css'

export default function UnsuccessfulDebitTransfer () {
  return (
    <div className='unsuccess-container mt-32'>
      <div className='flex flex-col justify-center items-center'>
        <section className='unsuccess-debit_transfer flex flex-col align-middle justify-center bg-orange-500 rounded-lg shadow-lg shadow-slate-400'>
          <div>
            <Image
              src={Unsuccess}
              alt='unsuccess'
              width='180'
              height='180'
              className='unsuccess-image border-2 bg-white'
            />
            <div className=' text-center text-white mt-10 pb-32'>
              <p className='unsuccess-text text-3xl font-normal'>
                Algo salió mal...
              </p>
              <p className='unsuccess-text text-4xl font-semibold'>
                No pudimos procesar tu pago
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className='unsuccess-creditcard mt-20 text-3xl'>
        <h2 className='font-bold'>¿Qué puedo hacer?</h2>
        <h2 className='mt-5 pb-10 font-normal'>
          Usa un método de pago distinto
        </h2>
      </section>
      <section>
        <Link href='/'>
          <button className='unsuccess-button btn btn-primary bg-tertiary text-white w-64 h-14 rounded-md font-bold text-lg hover:bg-tertiaryDark'>
            Pagar con otro medio
          </button>
        </Link>
      </section>
    </div>
  )
}
