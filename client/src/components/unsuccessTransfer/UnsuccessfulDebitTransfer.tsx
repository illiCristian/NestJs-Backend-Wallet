import Image from 'next/image'
import Link from 'next/link'
import Unsuccess from '@/../public/assets/transfer-debit/unsuccess2.png'
import './styles.css'

export default function UnsuccessfulDebitTransfer() {
  return (
    <div className="mt-32 unsuccess-container">
      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-col justify-center align-middle bg-orange-500 rounded-lg shadow-lg unsuccess-debit_transfer shadow-slate-400">
          <div>
            <Image
              src={Unsuccess}
              alt="unsuccess"
              width="180"
              height="180"
              className="bg-white border-2 unsuccess-image"
            />
            <div className="pb-32 mt-10 text-center text-white ">
              <p className="text-3xl font-normal unsuccess-text">
                Algo salió mal...
              </p>
              <p className="text-4xl font-semibold unsuccess-text">
                No pudimos procesar tu pago
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-20 text-3xl unsuccess-creditcard">
        <h2 className="font-bold">¿Qué puedo hacer?</h2>
        <h2 className="pb-10 mt-5 font-normal">
          Usa un método de pago distinto
        </h2>
      </section>
      <section>
        <Link href="/">
          <button className="w-64 text-lg font-bold text-white rounded-md unsuccess-button btn btn-primary bg-tertiary h-14 hover:bg-tertiaryDark">
            Pagar con otro medio
          </button>
        </Link>
      </section>
    </div>
  )
}
