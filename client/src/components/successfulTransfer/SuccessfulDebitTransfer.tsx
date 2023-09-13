import Success from '@/../public/assets/transfer-debit/success.png'
import Visa from '@/../public/assets/transfer-debit/visa.png'
import Image from 'next/image'
import Link from 'next/link'
import './styles.css'

export default function SuccessfulDebitTransfer() {
  return (
    <div className="flex flex-col items-center justify-center mt-32 success-container">
      <section className="flex flex-col justify-center align-middle bg-green-500 rounded-lg shadow-lg success-debit_transfer shadow-slate-400">
        <div>
          <Image
            src={Success}
            alt="success"
            width="180"
            height="180"
            className="bg-white border-2 success-image"
          />
          <div className="relative pb-32 mt-5 text-3xl font-semibold text-center text-white success-text">
            <p>¡Listo! Se acreditó tu pago</p>
            <p>Número de Operación: 123456789</p>
          </div>
        </div>
      </section>
      <section className="absolute flex w-1/3 mb-20 bg-white rounded-lg shadow-md success-creditcard mt-96 shadow-slate-400">
        <div>
          <Image
            src={Visa}
            alt="success"
            width="70"
            height="70"
            className="mt-5 ml-5"
          />
        </div>
        <div className="mt-5 ml-10 pr-18">
          <p>Ingresaste a tu cuenta</p>
          <p className="text-sm font-light">VISA 7895</p>
          <p className="pb-10 mt-5 text-xs font-light">
            En el resúmen de tu tarjeta verás el cargo a nombre de "MERCADO
            PAGO"
          </p>
        </div>
      </section>
      <section className="">
        <Link href="/home">
          <button className="w-48 mt-24 text-lg font-bold text-white rounded-md success-button btn btn-primary bg-tertiary h-14 hover:bg-tertiaryDark">
            Continuar
          </button>
        </Link>
      </section>
    </div>
  )
}
