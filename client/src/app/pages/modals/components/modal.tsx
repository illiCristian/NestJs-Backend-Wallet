import Image from 'next/image';
import React, { useState } from 'react'
import securityicon from '../../../../../public/security 1.svg';


function Modal(props : any) {
  if(!props.isVisible) return null;
  const [showModal, setShowModal] = useState("flex");
  console.log(typeof props.onClose);
  console.log(props);
  

  return (
    <div className={`fixed inset-0 bg-black 
    bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center ${props.isVisible}`}>
      {/* Modal */}
      <button onClick={() => props.onClose()}>X</button>
      <div className='w-[600px] bg-white flex flex-col justify-center items-center rounded border-2  border-gray-400'>
        <h1 className='my-3 font-semibold'>Para continuar debes aceptar los terminos y condiciones</h1>
        <p className='my-3 text-blue-400 text-xs mr-[300px]'>Términos y condiciones</p>
        <button 
          onClick={() => {
            props.onClose()
            props.isVisible1()
          }}
          className='bg-[#00B1EA] py-2 px-10 font-semibold text-white rounded-lg mt-9 mb-16 text-xs'>
          He leído y acepto los terminos y condiciones
        </button>
        <hr className='border-1 bg-black w-full'/>
        <div className='flex flex-row justify-center items-center mt-12 mb-24'>
          <Image
            src={securityicon}
            alt='security'
            width={15}
            height={15}
          />
        <p className='text-black text-[10px]'>Tu información está protegida con altos estándares de seguridad</p>

        </div>

      </div>
    </div>
  )
}

export default Modal;
