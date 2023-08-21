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
            <button className='nav_button gh bg-light-grey text-primary-blue hover:bg-dark-grey'>
              Iniciar sesión
            </button>
          </Link>
        </li>
        <li>
          <Link
            href='/'
            // className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <button className='nav_button gh bg-primary-blue text-white hover:bg-blue-hover'>
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
