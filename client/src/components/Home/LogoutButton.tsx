'use client'

import { signOut } from 'next-auth/react'
import logout from '../../../public/assets/dashboard/logout.svg'
import Image from 'next/image'

function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="flex gap-5 px-3 transition-all text-neutral-500  hover:text-primary  p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors"
    >
      <Image src={logout} alt="logout button" />
      <h6 className="text-base font-semibold leading-normal  text-center">
        Salir
      </h6>
    </button>
  )
}
export default LogoutButton
