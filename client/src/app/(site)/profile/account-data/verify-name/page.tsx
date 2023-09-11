"use client"

import FrameVerifyName from "@/components/FrameVerifyName/FrameVerifyName";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

function Frame() {
  const [name, setName] = useState("")

  return (
    <section className="max-w-6xl mt-6 m-auto ">
      <Link
        href="/profile/account-data"
        className="px-4 py-2 m-4 text-lg font-bold text-primary"
      >
        &#11013; Volver
      </Link>
      <FrameVerifyName name={name} user={((e:ChangeEvent<HTMLInputElement>): void=> setName(e.target.value))}/>
    </section>
  )
}

export default Frame;