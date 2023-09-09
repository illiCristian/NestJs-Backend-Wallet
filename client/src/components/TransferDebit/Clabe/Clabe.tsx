'use client'

import Image from 'next/image'
import arrow from '@/../public/assets/dashboard/arrow2.svg'
import { useUserProfile } from '@/store/userStore'

export default function Clabe() {
  const { walletId, name } = useUserProfile()

  return (
    <>
      <div className="w-[1142px] h-[216px] bg-white rounded-lg shadow-[0px_4px_4px_0px_#00000025] p-4 flex justify-between ">
        <div className="flex flex-col space-y-2">
          <div className="text-base font-normal leading-normal text-black">
            {walletId.cvu}
          </div>
          <div className="text-base font-normal leading-normal text-neutral-500">
            CLABE interbancaria
          </div>
          <div className="text-base font-normal leading-normal text-black">
            {name}
          </div>
          <div className="text-base font-normal leading-normal text-neutral-500">
            Beneficiario
          </div>
          <div className="text-base font-normal leading-normal text-black">
            STP
          </div>
          <div className="text-base font-normal leading-normal text-neutral-500">
            Banco receptor
          </div>
        </div>
        <div className="text-xs font-normal leading-normal text-sky-500">
          Copiar
        </div>
      </div>
      <div className="w-[1142px] h-[237px] bg-white rounded-lg shadow-[0px_4px_4px_0px_#00000025] p-4 flex justify-between mt-5">
        <div className="flex flex-col space-y-2">
          <div className="text-base font-semibold leading-normal text-black">
            Como ingresar dinero por SPEI
          </div>
          <div className="w-[708px]">
            <span className="text-base font-normal leading-normal text-neutral-500">
              Comparte tus datos para que puedan transferirte desde otra cuenta
              o hazlo desde tu banca en línea:
              <br />
            </span>
            <span className="text-base font-normal leading-normal text-neutral-500">
              1. Desde el portal de tu banco, selecciona la opción para
              transferir a una nueva cuenta.
              <br />
              2. Elige “Sistema de Transferencias y Pagos” (STP) como banco
              receptor.
              <br />
              3. Ingresa tus datos y los 18 dígitos de tu CLABE.
              <br />
              4. Indica el monto que quieres transferir y confirma.
              <br />
            </span>
            <span className="text-base font-normal leading-normal text-neutral-500">
              Tu dinero estará disponible al instante.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
