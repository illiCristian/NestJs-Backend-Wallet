import Link from 'next/link'
import AccountData from '@/components/AccountData/AccountData'

const pageAccountData = () => {
  return (
    <section className="max-w-6xl mt-6 m-auto ">
      <Link
        href="/profile"
        className="px-4 py-2 m-4 text-lg font-bold text-primary"
      >
        &#11013; Volver
      </Link>
      <h1 className="m-6 text-2xl font-bold">Datos de tu cuenta</h1>
      <AccountData />
    </section>
  )
}

export default pageAccountData
