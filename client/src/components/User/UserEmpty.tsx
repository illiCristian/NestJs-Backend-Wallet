import React from 'react'
import Image from 'next/image'
import userEmpty from '@/../public/assets/user/user-empty.png'

export default function UserEmpty() {
  return (
    <>
      <section className="flex flex-col justify-center items-center ml-40 mt-10">
        <figure className=" ">
          <Image src={userEmpty} alt="user-empty" />
        </figure>
        <span className="mt-10 text-center text-neutral-500 text-[25px] font-normal leading-normal">
          Aquí encontrarás las cuentas una vez que <br />
          comiences a transferir
        </span>
      </section>
    </>
  )
}
