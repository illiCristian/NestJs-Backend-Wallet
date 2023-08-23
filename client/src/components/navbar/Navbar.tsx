'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './styles.css'
import Banner from '../navbar-banner/Banner'

const Navbar = (): JSX.Element => {
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)

  const toggleParaTiModal = () => {
    setShowModal1(!showModal1)
  }

  const toggleNegocioModal = () => {
    setShowModal2(!showModal2)
  }

  return (
    <>
      <nav className='nav-container flex justify-between items-center p-4 md:px-8'>
        <ul className='flex items-center gap-6'>
          <li className='font-semibold text-xl'>
            <Link href='/'>Team MP</Link>
          </li>
        </ul>
        <ul className='flex items-center gap-6'>
          <section>
            <li className='text-black text-lg bg-white'>
              <div className='modal-wrapper'>
                <button onClick={toggleParaTiModal} className='modal-trigger'>
                  Para ti <span className='arrow-icon'>&#x25BE;</span>
                </button>
                {showModal1 && (
                  <div className='foryou-modal'>
                    <h2 className='font-medium mt-6 mb-6 ml-5'>Para ti</h2>
                    <div className='text-sm'>
                      <p className='flex items-center mb-6 ml-5'>
                        Cuenta digital
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Tarjeta de crédito Mercado Pago
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Línea de crédito
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Inversiones con GBM
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Tarjeta Debit Mastercard
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Envíos y recibos de dinero
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Pago de servicios y recargas
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Seguros y garantías
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </section>
          <section>
            <li className='text-black text-lg bg-white'>
              <div className='modal-wrapper' onClick={toggleNegocioModal}>
                <button onClick={toggleNegocioModal} className='modal-trigger'>
                  Para tu negocio <span className='arrow-icon'>&#x25BE;</span>
                </button>
                {showModal2 && (
                  <div
                    className={`busissnes-modal ${
                      showModal2 ? 'show-modal' : ''
                    }`}
                  >
                    <h2 className='font-medium mt-6 mb-6 ml-5'>
                      Para tu negocio
                    </h2>
                    <div className='text-sm'>
                      <p className='flex items-center mb-6 ml-5'>
                        Cobrar con Point
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Cobrar con link de pago
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Cobrar en un sitio web
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Planes de suscripción
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Crear tu tienda online
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Créditos para vendedores
                      </p>
                      <p className='flex items-center mb-6 ml-5'>
                        Ser revendedor Point
                      </p>
                      <p className='flex items-center mb-6 ml-5'>Developers</p>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </section>
          <li>
            <Link
              href='/'
              // className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button className='nav_button gh bg-light-grey text-primary-blue hover:bg-dark-grey'>
                Iniciar sesión
              </button>
            </Link>
          </li>
          <li>
            <Link
              href='/'
              // className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button className='nav_button gh bg-primary-blue text-white hover:bg-blue-hover'>
                Crear cuenta gratis
              </button>
            </Link>
          </li>
          <li className='text-lg'>
            <Link
              href='/'
              // className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Ayuda
            </Link>
          </li>
        </ul>
      </nav>
      <Banner />
    </>
  )
}

export default Navbar
