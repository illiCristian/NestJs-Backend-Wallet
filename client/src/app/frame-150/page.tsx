"use client"

import FrameVerifyName from "@/components/FrameVerifyName/FrameVerifyName";
import { useState } from "react";


FrameVerifyName
function Frame() {
  const [name, setName] = useState("")

  const handleChange = (e: any) => {
    e.preventDefault();
    setName(e.target.value)
    console.log(setName(e.target.value));
  }
  return (
    <div>
      <FrameVerifyName name={name} user={((e:any )=> setName(e.target.value))}/>
    </div>
  )
}

export default Frame;