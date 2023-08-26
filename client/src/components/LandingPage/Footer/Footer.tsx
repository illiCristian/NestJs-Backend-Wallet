import Image from 'next/image';
import userFinancial from '../../../../public/usuario-financiero-orange.jpg';
import superSeguro from '../../../../public/super-seguro.jpg';
import Link from 'next/link';
import logo from '../../../../public/mercado.svg';
import message from '../../../../public/message.png';
import facebookLogo from '../../../../public/face-logo.png';
import twitterLogo from '../../../../public/twitter-logo.png';
import linkedInLogo from '../../../../public/linkedin-logo.svg';
import youtubeLogo from '../../../../public/youtube-logo.jpg'



const Footer = () => {
  return (
    <footer>

      <div className='bg-gray-100 w-full flex flex-col justify-center items-center'>
        <div className='mt-36'>
        <hr className=" bg-black border-1 dark:bg-black -mx-[650px] " />
        </div>

        <div className='flex flex-col justify-center items-center'>

          <p className='text-gray-500 text-[9px] -ml-[310px] mt-6'>
            Mercado Fondo es un fondo común de inversión regulado por la Comisión Nacional de Valores, administrado por Industrial Asset Management S.G.F.C.I.S.A. y custodiado por BIND-Banco Industrial S.A.
          </p>
          <p className='text-gray-500 text-[9px] mx-[91px]  mt-6'>
            Mercado Pago ofrece servicios de pago y no está autorizado por el Banco Central a operar como entidad financiera. Los fondos acreditados en cuentas de pago no constituyen depósitos en una entidad financiera ni están garantizados conforme legislación aplicable a depósitos en entidades financieras.
          </p>
          <p className='text-gray-500 text-[9px] -ml-[595px]  mt-6'>
            Conocé las normas que aplican cuando usás Mercado Pago. 
            <span className='text-blue-500'> 
              Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor
            </span>
          </p>
          </div>
          <div className='flex flex-row -ml-[795px] mt-6'>
            <div className='flex flex-col justify-start'>
              <p className='text-gray-500 text-[10px]'>Información al usuario financiero</p>
              <Image src={userFinancial} width={150} height={50} alt='user-financial' className='mt-3'/>
              
            </div>
            {/* <div className='flex flex-col justify-start ml-10'> */}
            <div className="inline-block h-[100px] min-h-[1em] w-[1px] ml-4 self-stretch bg-gray-200 opacity-100 dark:opacity-50">
          </div>
            <div className='flex flex-col justify-start ml-3'>
              <p className='text-gray-500 text-[10px]'>Información sobre seguros</p>
              <Image src={superSeguro} width={150} height={50} alt='user-financial' className='mt-3'/>
              
            </div>
              
            {/* </div> */}

          </div>
          <div className='flex flex-row justify-start items-center -ml-[940px] mb-3'>
            <Image
              src={message}
              alt='message'
              width={25}
              height={25}
            />
            <p className='text-blue-500 text-xs ml-2 '>
              ayuda@mercadopago.com.ar
            </p>
          </div>
      </div>
      <div className='bg-white  w-full  flex flex-row justify-between row-span-6 '>
        <div className=' mr-64 ml-3 mt-10'>
          <Image 
            src={logo}
            width={170}
            height={90}
            alt='logo-mercadopago1' 
          />
        </div>
        <div className='text-black text-xs mt-10'>
          <Link href={`/pages/modals`}>
            <p className=' hover:text-blue-500'>Cuenta Mercado Pago</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Generar rendimientos con Mercado Fondo</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Pagar con código QR</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Pagar servicios y hacer recargas</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Hacer transferencias</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Tarjeta Mercado Pago</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Línea de crédito</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Seguros y garantías</p>
          </Link>
          <br />

        </div>
         
        <div className='text-black text-xs mt-10'>
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Cuenta Mercado Pago</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Generar rendimientos con Mercado Fondo</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Pagar con código QR</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Pagar servicios y hacer recargas</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Hacer transferencias</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Tarjeta Mercado Pago</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Línea de crédito</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Seguros y garantías</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Línea de crédito</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Seguros y garantías</p>
          </Link>
          <br />

        </div>
        <div className='text-black text-xs mt-10'>
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Cuenta Mercado Pago</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Generar rendimientos con Mercado Fondo</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Pagar con código QR</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Pagar servicios y hacer recargas</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Hacer transferencias</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Tarjeta Mercado Pago</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Línea de crédito</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Seguros y garantías</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Línea de crédito</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=' hover:text-blue-500'>Seguros y garantías</p>
          </Link>
          <br />

        </div>
   

      </div>
      <div className='bg-gray-100 w-full'>
       <div className='flex -flex-col justify-around text-gray-500 text-[11px] py-5 pr-36 pl-3'>
        <p>Pagá con código QR</p>
        <p>Recargá tu celular</p>
        <p>Cargá tu sube</p>
        <p>Pagá tus servicios</p>
        <p>Generá rendimientos con Mercado Fondo</p>
        <p>Enviá y pedí dinero</p>
        <p>Accedé a un crédito</p>
        <p>Pedí delivery de comida</p>

       </div>
       <hr className=" bg-black border-[1px] dark:bg-black mx-20" />

       {/* <div className='text-gray-500 text-[11px] py-5 pr-36 pl-[30px]'> */}
       <div className='text-gray-500 text-[11px] py-5 flex flex-row justify-between'>
        <div className='ml-[30px]'>
         <p>Copyright © 2023 MercadoLibre S.R.L. Caseros 3039, Piso 2, Ciudad Autónoma de Buenos Aires, Argentina</p>
        </div>
        <div className='flex flex-row justify-center items-center mr-8'>
        <Image 
          src={facebookLogo}
          alt='face-logo'
          width={25}
          height={25}
          className='ml-3'

        />
        <Image 
          src={twitterLogo}
          alt='face-logo'
          width={25}
          height={25}
          className='ml-3'

        />
        <Image 
          src={linkedInLogo}
          alt='face-logo'
          width={25}
          height={25}
          className='ml-3'

        />
        <Image 
          src={youtubeLogo}
          alt='face-logo'
          width={25}
          height={25}
          className='ml-3'
        />
        </div>
       </div>
        
      </div>
    </footer>
    // <h1>Hola</h1>
  )
}

export default Footer;
