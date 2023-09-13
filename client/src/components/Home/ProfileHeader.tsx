'use client'

import arrow from '@/../../public/assets/dashboard/arrow.svg'
import { useUserProfile } from '@/store/userStore'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import userImg from '../../../public/assets/dashboard/user-default.png'

function ProfileHeader() {
  const { getUserData, name } = useUserProfile()

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <figure className="w-[320px] h-[64px] bg-sky-600 flex gap-3 items-center pl-4 hover:bg-tertiary drop-shadow-xl">
      <Image src={userImg} className="w-[41px] h-[41px]" alt="image-user" />
      <section className="flex flex-col">
        <h5 className="text-2xl font-semibold text-white">
          Hola {name ? name.split(' ')[0] : '. . .'}
        </h5>
        <Link href={'/profile'} className="flex gap-3">
          <h6 className="text-base font-normal leading-normal text-center text-white ">
            Tu perfil
          </h6>
          <Image src={arrow} alt="arrow" className="w-6 h-6 Atom" />
        </Link>
      </section>
    </figure>
  )
}

export default ProfileHeader
