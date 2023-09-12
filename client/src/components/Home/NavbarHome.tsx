'use client'

import Image from 'next/image'
import React from 'react'
import bell from '../../../public/assets/dashboard/bell.svg'
import { usePathname } from 'next/navigation'

export default function NavbarHome() {
  const pathname = usePathname()

  const routesAndTitles = [
    { path: '/home', title: 'Inicio' },
    { path: '/profile', title: 'Perfil' },
    { path: '/balance', title: 'Tu dinero' },

    { path: '/send-money', title: 'Enviar dinero' },
    { path: '/send-money/deposit-money', title: 'Enviar dinero' },
    {
      path: '/send-money/pay-method',
      title: 'Enviar dinero',
    },
    {
      path: '/send-money/search-user',
      title: 'Enviar dinero',
    },
    { path: '/spei', title: 'Enviar dinero' },
    { path: '/money-charge', title: 'Ingresar dinero' },
    { path: '/money-charge/transfer-debit', title: 'Ingresar dinero' },
  ]

  const matchedRoute = routesAndTitles.find((route) => route.path === pathname)
  const pageTitle = matchedRoute ? matchedRoute.title : ''

  return (
    <>
      <header className="w-full h-16 bg-tertiary drop-shadow-xl">
        {/* Sección del logo */}
        <section className="w-auto h-16 flex-col justify-center ps-14 gap-2.5 inline-flex">
          {/* Imagen del logo */}
          <p className="inline-flex w-auto text-lg font-bold text-white">
            {pageTitle}
          </p>
        </section>
        {/* Sección de registro de imagen */}
        <section className="image-register w-11 p-2.5 left-[1768px] top-[20px] absolute">
          {/* Contenido del registro de imagen */}
        </section>
        {/* Icono de ayuda */}
        <figure className="w-6 h-6 left-[1832px] top-[20px] absolute">
          <Image src={bell} alt="bell" />
        </figure>
      </header>
    </>
  )
}
