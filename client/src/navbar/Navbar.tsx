import Link from 'next/link'
import Image from 'next/image'

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      {/* Lado izquierdo con el logo */}
      <div className='flex items-center'>
        <Image
          src='/path/to/logo.png'
          alt='Logo'
          width={600}
          height={300}
          className='w-8 h-8 mr-2'
        />
        <span className='text-lg font-semibold'>Mi Logo</span>
      </div>

      {/* Lado derecho con textos, botones y enlace */}
      <div className='flex items-center space-x-4'>
        <button className='cursor-pointer'>Texto 1</button>
        <button className='cursor-pointer'>Texto 2</button>
        <Link href='/otra-pagina' className='text-blue-500'>
          Ir a Otra Página
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
