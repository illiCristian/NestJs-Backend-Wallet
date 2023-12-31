'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './styles.css'
import Banner from '../Banner/Banner'
import logo from '../../../../public/mercado.svg'

const Navbar = (): JSX.Element => {
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleParaTiModal = () => {
    setShowModal1(!showModal1)
  }

  const toggleNegocioModal = () => {
    setShowModal2(!showModal2)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMouseEnterParaTi = () => {
    setShowModal1(true)
  }

  const handleMouseLeaveParaTi = () => {
    setShowModal1(false)
  }

  const handleMouseEnterNegocio = () => {
    setShowModal2(true)
  }

  const handleMouseLeaveNegocio = () => {
    setShowModal2(false)
  }

  const bannerClasses = `section-uno max-w-full px-0 py-0 items-center justify-center flex-col ${
    mobileMenuOpen ? 'mobile-menu-open' : ''
  } ${isMobile ? 'mobile-max-width' : ''}`

  return (
    <>
      <nav className="nav-container flex justify-between px-80 ">
        <ul className="flex items-center gap-6">
          <Link href="/" className="logo-nav text-primary">
            <Image src={logo} alt="logo" className="w-[160px]" />
          </Link>
        </ul>
        <ul className={`flex items-center gap-6`}>
          <nav className="mobile-menu">
            <div className="hamburger-icon" onClick={toggleMobileMenu}>
              &#9776;
            </div>
            <ul className={`menu-items ${mobileMenuOpen ? 'open' : ''}`}>
              <section>
                <li className="text-black text-lg bg-white">
                  <div
                    className="modal-wrapper"
                    onMouseEnter={handleMouseEnterParaTi}
                    onMouseLeave={handleMouseLeaveParaTi}
                  >
                    <button
                      onClick={toggleParaTiModal}
                      className="modal-trigger text-base"
                    >
                      Para ti <span className="arrow-icon">&#x25BE;</span>
                    </button>
                    {showModal1 && (
                      <div className="foryou-modal">
                        <h2 className="foryou-text font-medium mt-6 mb-6 ml-5">
                          Para ti
                        </h2>
                        <div className="foryou-items text-sm">
                          <p className="flex items-center mb-6 ml-5">
                            Cuenta digital
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Tarjeta de crédito Mercado Pago
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Línea de crédito
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Inversiones con GBM
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Tarjeta Debit Mastercard
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Envíos y recibos de dinero
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Pago de servicios y recargas
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Seguros y garantías
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </section>
              <section>
                <li className="text-black text-lg bg-white">
                  <div
                    className="modal-wrapper"
                    onMouseEnter={handleMouseEnterNegocio}
                    onMouseLeave={handleMouseLeaveNegocio}
                  >
                    <button
                      onClick={toggleNegocioModal}
                      className="modal-trigger text-base"
                    >
                      Para tu negocio{' '}
                      <span className="arrow-icon">&#x25BE;</span>
                    </button>
                    {showModal2 && (
                      <div
                        className={`busissnes-modal ${
                          showModal2 ? 'show-modal' : ''
                        }`}
                      >
                        <h2 className="forbussines-text font-medium mt-6 mb-6 ml-5">
                          Para tu negocio
                        </h2>
                        <div className="forbussines-items text-sm">
                          <p className="flex items-center mb-6 ml-5">
                            Cobrar con Point
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Cobrar con link de pago
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Cobrar en un sitio web
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Planes de suscripción
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Crear tu tienda online
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Créditos para vendedores
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Ser revendedor Point
                          </p>
                          <p className="flex items-center mb-6 ml-5">
                            Developers
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </section>
              <li>
                <Link href="/register">
                  <button className="nav_button-create2 font-medium gh bg-tertiary text-white hover:bg-tertiaryDark text-sm ">
                    Crear cuenta gratis
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          <li>
            <Link href="/login">
              <button className="nav_button-init font-medium gh bg-buttonHeader text-sky-400 hover:bg-buttonHeaderHover text-sm leading-8">
                Iniciar sesión
              </button>
            </Link>
          </li>

          <li>
            <Link
              href="/register"
              // className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button className="nav_button-create font-medium gh bg-tertiary text-white hover:bg-tertiaryDark text-sm">
                Crear cuenta gratis
              </button>
            </Link>
          </li>

          <li className="help-nav text-base">
            <Link href="/">Ayuda</Link>
          </li>
        </ul>
      </nav>
      <Banner bannerClasses={bannerClasses} />
    </>
  )
}

export default Navbar
