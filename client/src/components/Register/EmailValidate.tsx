"use client";

import Image from "next/image";
import { useEffect } from "react";
import warningImg from "../../../public/assets/register/warning.svg";
import { useStepperState } from "@/store/registerStore";

export default function EmailValidate() {
  const { setStepper } = useStepperState();

  useEffect(() => {
    setStepper({ stepOne: true, stepTwo: true, stepThree: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form className="w-[423px] h-[500px] bg-primary rounded-lg shadow-[0px_1px_4px_2px_#00000025] px-11">
        {/* Título */}
        <h3 className="origin-top-left rotate-[0.55deg] text-center text-black text-2xl font-semibold flex justify-start mb-3 mt-[50px]">
          Ingresa tu e-mail
        </h3>
        {/* Subtítulo */}
        <h4 className="origin-top-left rotate-[0.55deg] text-black text-base font-normal leading-normal mb-10">
          Te enviaremos un mensaje para
          <br /> confirmarlo.
        </h4>
        <section className="">
          {/* Campo de entrada de correo */}
          <input
            type="text"
            name=""
            id=""
            className="w-[343px] h-[50px] rounded-lg border border-neutral-500 focus:border-2 focus:border-primary ps-2 focus:outline-none text-slate-800 text-base"
          />
          {/* Mensaje de advertencia */}
          <figure className="flex justify-center gap-2 mt-3">
            <Image src={warningImg} alt="warning" className="w-6 h-6" />
            <span className="text-base font-normal leading-normal text-center text-error">
              Utiliza el formato nombre@ejemplo.com.
            </span>
          </figure>
        </section>
        {/* Botón de envío */}

        <button
          type="button"
          className="mt-4 text-center text-neutral-500 text-base font-bold leading-normal w-[343.22px] h-[50.08px] py-3 bg-secondary rounded-md justify-center items-center gap-2 inline-flex"
        >
          Enviar e-mail de confirmación
        </button>
      </form>
    </>
  );
}
