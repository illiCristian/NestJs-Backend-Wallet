"use client"
import { useUserProfile } from '@/store/userStore'
import Link from 'next/link';

type CardProps = {
  title?: string
  subtitle: string
  description: string
  buttonText: string
}

const Card = ({ title, subtitle, description, buttonText }: CardProps) => {


  return (
    <section className="w-4/5 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 pb-4 text-green-500 border-b border-gray-200">
          {title}
        </div>
        <p className="text-gray-900 font-semibold text-lg">{subtitle}</p>
        <p className="text-gray-700 text-base">{description}</p>
        <Link href="/profile/account-data/verify-name">
        <span className="mt-2 flex items-center justify-end  text-primary cursor-pointer font-bold py-2 px-4">
          {buttonText}
        </span>
        </Link>
        <br />
      </div>
    </section>
  )
}

const AccountData = () => {
  const data = useUserProfile();

  
  return (
    <section className="w-[980px] m-4 flex flex-col gap-4">
      <Card
        title="&#x2714; Validado"
        subtitle="E- mail"
        description={data.email === ""? " " : data.email}
        buttonText="Modificar"
      />
      <Card
        subtitle="Teléfono de contacto"
        description="Tus compradores de Mercado Libre te podrán contactar a través de este número"
        buttonText="Modificar"
      />
      <Card
        subtitle="Nombre de Usuario"
        description={data.name === ""? " " : data.name}
        buttonText="Modificar"
      />
      <Card
        subtitle="Clave"
        description="Para ingresar y recibir dinero"
        buttonText="Consultar"
      />
    </section>
  )
}

export default AccountData
