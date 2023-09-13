import Image from 'next/image'
import Link from 'next/link'
import activity from '../../../public/assets/dashboard/activity.svg'
import bill from '../../../public/assets/dashboard/bill.svg'
import charge from '../../../public/assets/dashboard/charge.svg'
import help from '../../../public/assets/dashboard/help.svg'
import home from '../../../public/assets/dashboard/home.svg'
import link from '../../../public/assets/dashboard/link.svg'
import loan from '../../../public/assets/dashboard/loan.svg'
import market from '../../../public/assets/dashboard/market.svg'
import money from '../../../public/assets/dashboard/money.svg'
import phone from '../../../public/assets/dashboard/phone.svg'
import sendMoney from '../../../public/assets/dashboard/send-money.svg'
import wallet from '../../../public/assets/dashboard/wallet.svg'
import LogoutButton from './LogoutButton'
import ProfileHeader from './ProfileHeader'

export default function Drawer() {
  return (
    <section>
      <section className="flex flex-col">
        <ProfileHeader />
        <div className="w-[319px] h-[1080px] bg-white border-r py-6">
          <section className="space-y-1 ">
            <Link
              href={'/home'}
              className="flex gap-5 text-neutral-500 p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors group  focus:bg-slate-100"
            >
              <Image src={home} alt="home" className="" />
              <h6 className="text-base font-semibold leading-normal text-center  text-tertiary  group-focus:text-sky-600  ">
                Inicio
              </h6>
            </Link>

            <Link
              href={'/home'}
              className="flex gap-5  text-neutral-500 p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors"
            >
              <Image src={help} alt="help" className="" />
              <h6 className="text-base font-semibold leading-normal text-center text-tertiary">
                Ayuda
              </h6>
            </Link>
          </section>
          <div className="h-px mt-2 w-80 bg-zinc-300"> </div>

          <section className="py-4 space-y-1">
            <Link
              href={'/balance'}
              className="flex gap-5 px-3 text-neutral-500  p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors group  focus:bg-slate-100 "
            >
              <Image src={wallet} alt="wallet" className="" />
              <h6 className="text-base font-semibold leading-normal text-center transition-all text-tertiary  group-focus:text-sky-600 ">
                Tu Dinero
              </h6>
            </Link>

            <Link
              href={'/home'}
              className="flex gap-5 px-3 text-neutral-500  p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors  group  focus:bg-slate-100 "
            >
              <Image src={activity} alt="activity" className="" />
              <h6 className="text-base font-semibold leading-normal text-center text-tertiary group-focus:text-sky-600">
                Actividad
              </h6>
            </Link>

            <Link
              href={'/send-money'}
              className="flex gap-5 px-3 text-neutral-500  p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors group  focus:bg-slate-100"
            >
              <Image src={sendMoney} alt="sendMoney" className="" />
              <h6 className="text-base font-semibold leading-normal text-center transition-all text-tertiary group-focus:text-sky-600">
                Enviar Dinero
              </h6>
            </Link>
          </section>
          <div className="h-px w-80 bg-zinc-300"> </div>
          <section className="py-2">
            <Link
              href={'/home'}
              className="flex gap-5 px-3 text-neutral-500  p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors focus:bg-slate-100"
            >
              <Image src={loan} alt="loan" className="" />
              <h6 className="text-base font-semibold leading-normal text-center text-tertiary">
                Préstamos
              </h6>
            </Link>
          </section>
          <div className="h-px w-80 bg-zinc-300"> </div>
          <section className="py-4 space-y-1">
            <Link
              href={'/home'}
              className="flex gap-5 px-3 text-neutral-500  p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors focus:bg-slate-100"
            >
              <Image src={charge} alt="charge" className="" />
              <h6 className="text-base font-semibold leading-normal text-center text-tertiary">
                Cobrar en tu local
              </h6>
            </Link>

            <Link
              href={'/home'}
              className="flex gap-5 px-3 text-neutral-500  p-3 hover:bg-slate-100 hover:trasition-all hover:transition- focus:bg-slate-100"
            >
              <Image src={link} alt="link" className="" />
              <h6 className="text-base font-semibold leading-normal text-center text-tertiary">
                Link de pago
              </h6>
            </Link>

            <Link
              href={'/home'}
              className="flex gap-5 px-3 text-neutral-500  p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors focus:bg-slate-100"
            >
              <Image src={bill} alt="bill" className="" />
              <h6 className="text-base font-semibold leading-normal text-center text-tertiary">
                Informes y Facturación
              </h6>
            </Link>

            <Link
              href={'/home'}
              className="flex gap-5 px-3 text-neutral-500  p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors focus:bg-slate-100"
            >
              <Image src={money} alt="help" className="" />
              <h6 className="text-base font-semibold leading-normal text-center text-tertiary">
                Planes de suscripción
              </h6>
            </Link>
            <Link
              href={'/home'}
              className="flex gap-5 px-3 text-neutral-500  p-3 hover:bg-slate-100 hover:trasition-all hover:transition-colors focus:bg-slate-100"
            >
              <Image src={market} alt="help" className="" />
              <h6 className="text-base font-semibold leading-normal text-center text-tertiary">
                Tu negocio
              </h6>
            </Link>
          </section>
          <div className="h-px mb-3 w-80 bg-zinc-300"> </div>
          <LogoutButton />
          <div className="h-px mt-2 Rectangle429 w-80 bg-zinc-300"> </div>

          <section className="flex gap-5 px-3 mt-4 text-neutral-500">
            <Image src={phone} alt="phone" className="" />
            <div>
              <h6 className="text-xs font-semibold leading-normal text-neutral-500">
                Tu celular es tu nueva billetera.
              </h6>
              <h6 className="mt-1 text-xs font-bold leading-normal text-sky-500">
                Descarga la app
              </h6>
            </div>
          </section>

          <div className="h-px mt-2 w-80 bg-zinc-300"> </div>
          <section className="mt-6 px-14">
            <div className="text-xs font-semibold leading-7 text-sky-500">
              Cómo cuidamos tu privacidad
              <br />
              Cómo proteger tu cuenta
              <br />
              Accesibilidad
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}
