import React from 'react'

export default function Spinner() {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center ">
        <div className="border-t-transparent border-solid animate-spin rounded-full border-sky-600 border-4 h-24 w-24"></div>
      </div>
    </>
  )
}
