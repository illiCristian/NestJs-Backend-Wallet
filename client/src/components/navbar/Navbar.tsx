import Link from 'next/link'
import Image from 'next/image'
import './styles.css'

const Navbar = (): JSX.Element => {
  return (
    <nav className='flex justify-between items-center p-4 md:px-8'>
      <ul className='flex items-center gap-6'>
        <li className='font-semibold text-xl'>
          <Link href='/'>Team MP</Link>
        </li>
      </ul>
      <ul className='flex items-center gap-6'>
        <li className='text-black/60 text-lg'>Para ti</li>
        <li className='text-black/60 text-lg'>Para tu negocio</li>
        <li>
          <Link
            href='/'
            // className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <button className='gh bg-light-grey text-primary-blue rounded-md w-40 h-10 text-sm'>
              Iniciar sesión
            </button>
          </Link>
        </li>
        <li>
          <Link
            href='/'
            // className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <button className='gh bg-primary-blue text-white rounded-md w-40 h-10 text-sm'>
              Crear cuenta gratis
            </button>
          </Link>
        </li>
        <li className='text-lg'>
          <Link
            href='/'
            // className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Ayuda
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
