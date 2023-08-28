import Image from 'next/image';
import Link from 'next/link';
import userImg from '../../../public/assets/dashboard/user-img.png';
import arrow from '../../../public/assets/dashboard/arrow.svg';
import home from '../../../public/assets/dashboard/home.svg';
import wallet from '../../../public/assets/dashboard/wallet.svg';
import activity from '../../../public/assets/dashboard/activity.svg';
import sendMoney from '../../../public/assets/dashboard/send-money.svg';
import loan from '../../../public/assets/dashboard/loan.svg';
import charge from '../../../public/assets/dashboard/charge.svg';
import link from '../../../public/assets/dashboard/link.svg';
import money from '../../../public/assets/dashboard/money.svg';
import market from '../../../public/assets/dashboard/market.svg';
import bill from '../../../public/assets/dashboard/bill.svg';
import help from '../../../public/assets/dashboard/help.svg';
import phone from '../../../public/assets/dashboard/phone.svg';
import logout from '../../../public/assets/dashboard/logout.svg';

export default function Drawer() {
  return (
    <section>
      <section className='flex flex-col'>
        <figure className='w-[320px] h-[64px] bg-sky-600 flex gap-3 px-4 pt-1'>
          <Image
            src={userImg}
            className='w-[41px] h-[41px] rounded-full'
            alt='image-user'
          />
          <section className='flex flex-col'>
            <h5 className='text-center text-white text-2xl font-semibold'>
              Hola, Rosa Pérez
            </h5>
            <Link href={'/profile'} className='flex gap-3'>
              <h6 className=' text-center text-white text-base font-normal leading-normal'>
                Tu perfil
              </h6>
              <Image src={arrow} alt='arrow' className='Atom w-6 h-6' />
            </Link>
          </section>
        </figure>
        <div className='w-[319px] h-[1080px] bg-white border-r py-6'>
          <section className=' space-y-6'>
            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={home} alt='home' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Inicio
              </h6>
            </Link>

            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={help} alt='help' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Ayuda
              </h6>
            </Link>
          </section>
          <div className=' w-80 h-px bg-zinc-300 mt-2'> </div>

          <section className='space-y-6 py-4'>
            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500 '
            >
              <Image src={wallet} alt='wallet' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Tu Dinero
              </h6>
            </Link>

            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={activity} alt='activity' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Actividad
              </h6>
            </Link>

            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={sendMoney} alt='sendMoney' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Enviar Dinero
              </h6>
            </Link>
          </section>
          <div className='w-80 h-px bg-zinc-300'> </div>
          <section className='py-4'>
            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={loan} alt='loan' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Préstamos
              </h6>
            </Link>
          </section>
          <div className='w-80 h-px bg-zinc-300'> </div>
          <section className='space-y-6 py-4'>
            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={charge} alt='charge' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Cobrar en tu local
              </h6>
            </Link>

            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={link} alt='link' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Link de pago
              </h6>
            </Link>

            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={bill} alt='bill' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Informes y Facturación
              </h6>
            </Link>

            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={money} alt='help' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Planes de suscripción
              </h6>
            </Link>
            <Link
              href={'/dashboard'}
              className='flex gap-5 px-3 text-neutral-500'
            >
              <Image src={market} alt='help' className='' />
              <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
                Tu negocio
              </h6>
            </Link>
          </section>
          <div className=' w-80 h-px bg-zinc-300  mb-3'> </div>
          <Link
            href={'/dashboard'}
            className='flex gap-5 px-3 text-neutral-500'
          >
            <Image src={logout} alt='help' className='' />
            <h6 className='text-center  text-base font-semibold text-tertiary leading-normal'>
              Salir
            </h6>
          </Link>
          <div className='Rectangle429 w-80 h-px bg-zinc-300 mt-2'> </div>

          <section className='flex gap-5 px-3 text-neutral-500 mt-4'>
            <Image src={phone} alt='phone' className='' />
            <div>
              <h6 className='text-neutral-500 text-xs font-semibold leading-normal'>
                Tu celular es tu nueva billetera.
              </h6>
              <h6 className='text-sky-500 text-xs font-bold leading-normal mt-1'>
                Descarga la app
              </h6>
            </div>
          </section>

          <div className=' w-80 h-px bg-zinc-300 mt-2'> </div>
          <section className='mt-6 px-14'>
            <div className='text-sky-500 text-xs font-semibold leading-7'>
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
  );
}
