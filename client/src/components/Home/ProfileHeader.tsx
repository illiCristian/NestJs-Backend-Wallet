'use client'

import arrow from '@/../../public/assets/dashboard/arrow.svg'
import { getProfile } from '@/services'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import userImg from '../../../public/assets/dashboard/user-default.png'

function ProfileHeader() {
  const { data } = useQuery(['profile'], getProfile, { staleTime: Infinity })
  const user = data?.data

  return (
    <figure className="w-[320px] h-[64px] bg-sky-600 flex gap-3 items-center pl-4">
      <Image src={userImg} className="w-[41px] h-[41px]" alt="image-user" />
      <section className="flex flex-col">
        <h5 className="text-2xl font-semibold text-center text-white">
          Hola, {user?.name.split(' ')[0]}
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
