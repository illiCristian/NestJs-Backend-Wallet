"use client"

import { useState } from 'react';
import Modal from './components/modal';
import Modal1 from './components/modal1';
import Modal2 from './components/modal2';


function Modals() {
  const [showModal, setShowModal] = useState("hidden");
  const [showModal1, setShowModal1] = useState("hidden");
  const [showModal2, setShowModal2] = useState("hidden");


 
  return (
    <div className="flex flex-col justify-center items-center mt-5 w-full">
      <h1>Términos y condiciones</h1>
      <div className="flex flex-row justify-center space-x-6 text-white mt-3">
        <button 
          className="px-3 py-2 bg-blue-700 rounded-lg outline-none " 
          onClick={() => setShowModal("flex")}>
          Contraseña
        </button>
        <button 
          className="px-3 py-2 bg-blue-700 rounded-lg"
          onClick={() => setShowModal1("flex")}>
          Creada
        </button>
        <button 
          className="px-3 py-2 bg-blue-700 rounded-lg"
          onClick={() => setShowModal2("flex")}>
          Genial
        </button>

      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal("hidden")} isVisible1={() => setShowModal1("flex")}/>
      <Modal1 isVisible={showModal1} onClose={() => setShowModal1("hidden")} isVisible2={() => setShowModal2("flex")}/>
      <Modal2 isVisible={showModal2} onClose={() => setShowModal2("hidden")}/>

    </div>
  )
}

export default Modals;
