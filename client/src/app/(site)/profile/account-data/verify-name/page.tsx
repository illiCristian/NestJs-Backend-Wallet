"use client"

import FrameVerifyName from "@/components/FrameVerifyName/FrameVerifyName";
import { ChangeEvent, useState } from "react";

function Frame() {
  const [name, setName] = useState("")

  return (
    <div>
      <FrameVerifyName name={name} user={((e:ChangeEvent<HTMLInputElement>): void=> setName(e.target.value))}/>
    </div>
  )
}

export default Frame;