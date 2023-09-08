import React from 'react'

export default function TransferDetail() {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-[892px] h-[282px] flex flex-col  bg-white rounded-lg shadow-[0px_4px_4px_4px_#00000025] mt-10">
          <div className="flex flex-col justify-center items-center mt-7 mb-20 mx-5 gap-4">
            <div className="px-[10px] py-2 bg-[#6088F7] border-none rounded-full text-md z-[0]">
              AJ
            </div>
            <p className="text-black text-base">Aurora Jiménez</p>
          </div>
          <hr className="mb-5" />
          <div className="text-black text-center text-[25px] font-normal leading-normal">
            Total: $ 100{' '}
          </div>
        </div>
      </section>
    </>
  )
}
