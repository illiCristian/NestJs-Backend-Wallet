'use client'
import Link from 'next/link'
import Image from 'next/image'
import PersonalInfo from '../../../../../public/assets/profile/personal-info.png'
import AccountDetail from '../../../../../public/assets/profile/account-detail.png'
import Security from '../../../../../public/assets/profile/security.png'
import BankCard from '../../../../../public/assets/profile/bank-card.png'
import Direction from '../../../../../public/assets/profile/direction.png'
import Privacity from '../../../../../public/assets/profile/privacity.png'
import Network from '../../../../../public/assets/profile/network.png'
import Suscription from '../../../../../public/assets/profile/suscription.png'
import Go from '../../../../../public/assets/profile/go.png'
import Check from '../../../../../public/assets/profile/check.png'
import './styles.css'


export default function ProfileCard({ }) {
    return (
      <section>
      <div className='profile-container'>
        {/* Bloque 1 INFORMACIÓN PERSONAL*/}
        <div className='profile-info1 flex text-center w-2/3 h-36 mt-30 relative'>
          <div>
            <div className='flex profile-icons relative'>
              <Image
                src={PersonalInfo}
                alt='Admin'
                className='cursor-pointer '
                width='50'
                height='50'
              />
            </div>
            <div className='absolute ml-28 -mt-6 bg-white'>
              <Image src={Check} alt='Admin' width='20' height='20' />
            </div>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <p className='text-lg font-semibold mt-2'>Información personal</p>
            <p className='text-base font-light mt-2'>
              Información de tu identificación oficial y tu actividad fiscal.
            </p>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <Link href='/'>
              <Image
                src={Go}
                alt='go'
                width='15'
                height='15'
                className='go-go cursor-pointer'
              />
            </Link>
          </div>
        </div>
        {/* Bloque 2 DATOS DE LA CUENTA */}
        <div className='profile-info2 flex text-center w-2/3 h-36 relative'>
          <div>
            <div className='flex profile-icons relative'>
              <Image
                src={AccountDetail}
                alt='Admin'
                className='cursor-pointer '
                width='50'
                height='50'
              />
            </div>
            <div className='absolute ml-28 -mt-6 bg-white'>
              <Image src={Check} alt='Admin' width='20' height='20' />
            </div>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <p className='text-lg font-semibold mt-2'>Datos de tu cuenta</p>
            <p className='text-base font-light mt-2'>
              Datos que representan a la cuenta de mercado pago y mercado
              libre.
            </p>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <Link href='/'>
              <Image
                src={Go}
                alt='go'
                width='15'
                height='15'
                className='go-go cursor-pointer'
              />
            </Link>
          </div>
        </div>
        {/* Bloque 3 SECURITY */}
        <div className='profile-info3 flex text-center w-2/3 h-36 relative'>
          <div>
            <div className='flex profile-icons relative'>
              <Image
                src={Security}
                alt='Admin'
                className='cursor-pointer '
                width='50'
                height='50'
              />
            </div>
            <div className='absolute ml-28 -mt-6 bg-white'>
              <Image src={Check} alt='Admin' width='20' height='20' />
            </div>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <p className='text-lg font-semibold mt-2'>Seguridad</p>
            <p className='text-base font-light mt-2'>
              Tienes configurada la seguridad de tu cuenta.
            </p>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <Link href='/'>
              <Image
                src={Go}
                alt='go'
                width='15'
                height='15'
                className='go-go cursor-pointer'
              />
            </Link>
          </div>
        </div>
        {/* Bloque 4 TARJETAS DE BANCO */}
        <div className='profile-info4 flex text-center w-2/3 h-36 relative'>
          <div>
            <div className='flex profile-icons relative'>
              <Image
                src={BankCard}
                alt='Admin'
                className='cursor-pointer '
                width='50'
                height='50'
              />
            </div>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <p className='text-lg font-semibold mt-2'>Tarjetas</p>
            <p className='text-base font-light mt-2'>
              Tienes configurada la seguridad de tu cuenta.
            </p>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <Link href='/'>
              <Image
                src={Go}
                alt='go'
                width='15'
                height='15'
                className='go-go cursor-pointer'
              />
            </Link>
          </div>
        </div>
        {/* Bloque 5 DIRECTION */}
        <div className='profile-info5 flex text-center w-2/3 h-36 relative'>
          <div>
            <div className='flex profile-icons relative'>
              <Image
                src={Direction}
                alt='Admin'
                className='cursor-pointer '
                width='50'
                height='50'
              />
            </div>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <p className='text-lg font-semibold mt-2'>Direcciones</p>
            <p className='text-base font-light mt-2'>
              Direcciones guardadas en tu cuenta.
            </p>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <Link href='/'>
              <Image
                src={Go}
                alt='go'
                width='15'
                height='15'
                className='go-go cursor-pointer'
              />
            </Link>
          </div>
        </div>
        {/* Bloque 6 PRIVACITY */}
        <div className='profile-info6 flex text-center w-2/3 h-36 relative'>
          <div>
            <div className='flex profile-icons relative'>
              <Image
                src={Privacity}
                alt='Admin'
                className='cursor-pointer '
                width='50'
                height='50'
              />
            </div>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <p className='text-lg font-semibold mt-2'>Privacidad</p>
            <p className='text-base font-light mt-2'>
              Preferencias y control sobre el uso de tus datos.
            </p>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <Link href='/'>
              <Image
                src={Go}
                alt='go'
                width='15'
                height='15'
                className='go-go cursor-pointer'
              />
            </Link>
          </div>
        </div>
        {/* Bloque 7 COMUNICACIONES */}
        <div className='profile-info7 flex text-center w-2/3 h-36 relative'>
          <div>
            <div className='flex profile-icons relative'>
              <Image
                src={Network}
                alt='Admin'
                className='cursor-pointer '
                width='50'
                height='50'
              />
            </div>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <p className='text-lg font-semibold mt-2'>Comunicaciones</p>
            <p className='text-base font-light mt-2'>
              Elige el tipo de información que quieres recibir.
            </p>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <Link href='/'>
              <Image
                src={Go}
                alt='go'
                width='15'
                height='15'
                className='go-go cursor-pointer'
              />
            </Link>
          </div>
        </div>
        {/* Bloque 8 SUSCRIPCIONES*/}
        <div className='profile-info8 flex text-center w-2/3 h-36 mb-32 relative'>
          <div>
            <div className='flex profile-icons relative'>
              <Image
                src={Suscription}
                alt='Admin'
                className='cursor-pointer '
                width='50'
                height='50'
              />
            </div>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <p className='text-lg font-semibold mt-2'>Suscripciones</p>
            <p className='text-base font-light mt-2'>
              Gestiona tus suscripciones.
            </p>
          </div>
          <div className='leading-loose text-left ml-10 mt-10'>
            <Link href='/'>
              <Image
                src={Go}
                alt='go'
                width='15'
                height='15'
                className='go-go cursor-pointer'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
    );
  }