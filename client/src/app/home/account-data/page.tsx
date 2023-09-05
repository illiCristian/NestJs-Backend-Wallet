import Link from 'next/link'
import AccountData from '@/components/AccountData/AccountData'

const pageAccountData = () => {
  return (
    <section className=" max-w-6xl m-auto">
      <Link href={'/'} className="m-4 text-lg text-primary font-bold py-2 px-4">
        &#11013; Volver
      </Link>
      <h1 className="m-6 font-bold text-2xl">Datos de tu cuenta</h1>
      <AccountData />
    </section>
  )
}

export default pageAccountData
