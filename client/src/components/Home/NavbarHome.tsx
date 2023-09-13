'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import bell from '../../../public/assets/dashboard/bell.svg'
import { usePathname } from 'next/navigation'
import { io } from 'socket.io-client'
import { useUserProfile } from '@/store/userStore'

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

  //---------------
  const [mySocket, setMySocket] = useState<any>(undefined)
  const [notifications, setNotifications] = useState<any>([])
  const [open, setOpen] = useState(false)
  const { _id } = useUserProfile()

  // ------- Handle notifications ----------
  const displayNotification = (msg: string) => {
    return (
      <span
        className="p-2 text-white bg-green-400 rounded-md cursor-pointer"
        onClick={handleRead}
      >
        {msg}
      </span>
    )
  }

  const handleRead = () => {
    setNotifications([])
    setOpen(false)
  }

  // --------- Handle sockets ----------
  useEffect(() => {
    const socket = io(
      'https://s10-02-n-node-next-mercadopago-production.up.railway.app/',
    )

    setMySocket(socket)
  }, [])

  useEffect(() => {
    mySocket?.on('connect', () => {
      console.log('Conectado!!')
      mySocket?.emit('newUser', _id)
    })

    mySocket?.on('notification', (data: any) => {
      console.log(data)
      console.log('Llego la notificacion!!')

      setNotifications((prev: any) => [...prev, data])
    })
  }, [_id, mySocket])

  return (
    <>
      <header className="w-full h-16 bg-tertiary drop-shadow-xl flex justify-between items-center px-5">
        {/* Sección del logo */}
        <p className="inline-flex w-auto text-lg font-bold text-white">
          {pageTitle}
        </p>
        {/* Icono de ayuda */}
        <figure
          className="relative w-6 h-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image src={bell} alt="bell" />
          {notifications.length > 0 && (
            <div className="absolute flex items-center justify-center w-5 h-5 text-sm font-semibold text-white bg-red-500 rounded-full left-[40%] top-[-40%]">
              {notifications.length}
            </div>
          )}
        </figure>
        {open && (
          <div className="absolute top-[105%] right-4 flex flex-col gap-1 items-end">
            {notifications.map((n: string) => displayNotification(n))}
          </div>
        )}
      </header>
    </>
  )
}
