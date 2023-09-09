import Image from 'next/image'
import userFinancial from '../../../../public/usuario-financiero-orange.jpg'
import superSeguro from '../../../../public/super-seguro.jpg'
import Link from 'next/link'
import logo from '../../../../public/mercado.svg'
import message from '../../../../public/message.png'
import facebookLogo from '../../../../public/face-logo.png'
import twitterLogo from '../../../../public/twitter-logo.png'
import linkedInLogo from '../../../../public/linkedin-logo.svg'
import youtubeLogo from '../../../../public/youtube-logo.jpg'

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-100 w-full flex flex-col justify-center items-center">
        <div className="mt-10 px-96">
          <hr className="" />
        </div>

        <div className="flex flex-col ">
          <p className="text-gray-500 text-[9px] px-96 mt-6">
            *Servicios y/o productos operados por MP Agregador, S. de R.L. de
            C.V. ("Mercado Pago Standard").
          </p>
          <p className="text-gray-500 text-[9px] px-96  mt-6">
            MercadoLibre, S.A. de C.V., Institución de Fondos de Pago
            Electrónico (identificada bajo la marca "Mercado Pago Wallet"), es
            una Institución de Tecnología Financiera que se encuentra
            autorizada, regulada y supervisada por la CNBV, el Banco de México y
            la CONDUSEF, de conformidad con la Ley para Regular las
            Instituciones de Tecnología Financiera. Asimismo, se informa que el
            Gobierno Federal y las Entidades de la Administración Pública
            Paraestatal no podrán responsabilizarse o garantizar los recursos de
            los Usuarios que sean utilizados en las operaciones que celebren los
            Usuarios con Mercado Pago Wallet o frente a otros, ni asumir alguna
            responsabilidad por las obligaciones contraídas por Mercado Pago
            Wallet o por algún Usuario de ésta frente a otro, en virtud de las
            operaciones que celebren.
          </p>
          <p className="text-gray-500 text-[9px] -ml-[595px]  mt-6">
            Conocé las normas que aplican cuando usás Mercado Pago.
            <span className="text-blue-500">
              Ver contratos de adhesión - Ley N.º 24.240 de Defensa del
              Consumidor
            </span>
          </p>
        </div>
        <div className="flex flex-row -ml-[795px] mt-6">
          <div className="flex flex-col justify-start">
            <p className="text-gray-500 text-[10px]">
              Información al usuario financiero
            </p>
            <Image
              src={userFinancial}
              width={150}
              height={50}
              alt="user-financial"
              className="mt-3"
            />
          </div>

          <div className="inline-block h-[100px] min-h-[1em] w-[1px] ml-4 self-stretch bg-gray-200 opacity-100 dark:opacity-50"></div>
          <div className="flex flex-col justify-start ml-3">
            <p className="text-gray-500 text-[10px]">
              Información sobre seguros
            </p>
            <Image
              src={superSeguro}
              width={150}
              height={50}
              alt="user-financial"
              className="mt-3"
            />
          </div>
        </div>
        <div className="flex flex-row justify-start items-center -ml-[940px] mb-3">
          <Image src={message} alt="message" width={25} height={25} />
          <p className=" text-sky-600 text-xs ml-2 ">
            ayuda@mercadopago.com.ar
          </p>
        </div>
      </div>
      <div className="bg-white  w-full  flex flex-row  mr-44 gap-40  py-10">
        <div className=" ml-80 mt-10">
          <Image src={logo} width={170} height={90} alt="logo-mercadopago1" />
        </div>
        <div className="text-gray-500 text-xs mt-10">
          <Link href={`/`}>
            <p className=" font-semibold mb-2 ">Para Ti</p>
          </Link>
          <br />
          <Link href={`/pages/modals`}>
            <p className=" hover:text-sky-600">Cuenta digital</p>
          </Link>
          <br />
          <Link href="/transferDebit">
            <p className=" hover:text-sky-600">
              Tarjeta de crédito Mercado Pago
            </p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Línea de crédito</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Tarjeta Debit Mastercard®</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Inversiones con GBM</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Envíos y recibos de dinero</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Pago de servicios y recargas</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Seguros y garantías</p>
          </Link>
          <br />
        </div>

        <div className="text-gray-500 text-xs mt-10">
          <Link href={`/`}>
            <p className=" font-semibold mb-2 ">Para Tu Negocio</p>
          </Link>
          <br />
          <Link href={`/pages/modals`}>
            <p className=" hover:text-sky-600">Cobrar con Point</p>
          </Link>
          <br />
          <Link href="/transferDebit">
            <p className=" hover:text-sky-600">Cobrar con link de pago</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Cobrar en un sitio web</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Planes de suscripción</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Crear tu tienda onlinep</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Ser revendedor Point</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Developers</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Créditos para vendedores</p>
          </Link>
          <br />
        </div>
        <div className="text-gray-500  text-xs mt-10 first:mb-10">
          <Link href={`/`}>
            <p className=" font-semibold mb-2  text-gray-500">Acerca de</p>
          </Link>
          <br />
          <Link href={`/pages/modals`}>
            <p className=" hover:text-sky-600">Ayuda</p>
          </Link>
          <br />
          <Link href="/transferDebit">
            <p className=" hover:text-sky-600">Términos y condiciones</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Blog</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Investor relations</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Cómo cuidamos tu privacidad</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Accesibilidad</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">Consulta de costos</p>
          </Link>
          <br />
          <Link href={`/`}>
            <p className=" hover:text-sky-600">UNE y complementarios</p>
          </Link>
          <br />
        </div>
      </div>
      <div className="bg-gray-100 w-full">
        <div className="flex text-gray-500 text-[11px] py-5 pr-36  gap-10 ml-96">
          <p>Recargá tu celular</p>
          <p>Pagá tus recibos</p>
          <p>Envia y pide dinero</p>
        </div>
        <hr className=" bg-black border-[1px] dark:bg-black mx-96" />

        <div className="text-gray-500 text-[11px] py-5 flex justify-center gap-36 ">
          <div className="">
            <p>
              Copyright © 2023 "MP Agregador, S. de R.L. de C.V." Insurgentes
              Sur 1602, Piso 4, Suite 400, Crédito Constructor, Benito Juárez,
              03940, Ciudad de México, CDMX, México.
            </p>
          </div>
          <div className="flex">
            <Image
              src={facebookLogo}
              alt="face-logo"
              width={16}
              height={16}
              className="ml-3"
            />
            <Image
              src={twitterLogo}
              alt="face-logo"
              width={16}
              height={16}
              className="ml-3"
            />
            <Image
              src={linkedInLogo}
              alt="face-logo"
              width={16}
              height={16}
              className="ml-3"
            />
            <Image
              src={youtubeLogo}
              alt="face-logo"
              width={16}
              height={16}
              className="ml-3"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
