import Image from 'next/image';
import Link from 'next/link';

const InfoEmail: React.FC = () => {
  return (
    <section className='px-8 py-2 max-w-xl rounded-lg bg-white border'>
      <article className='py-6'>
        <h1 className='text-black font-semibold text-4xl'>
          Ingresa tu teléfono o E-mail de mercado pago
        </h1>
      </article>
      <article className='py-6'>
        <h6 className='pb-4 font-bold text-xs'>Reportar un problema</h6>
        <div className='bg-slate-100 max-w-md  shadow-xl py-1 px-2 mb-2'>
          <div className='flex items-center justify-between text-xs'>
            <Image
              src='/assets/login/icons/phone.svg'
              width={24}
              height={24}
              alt='phone-icon'
            />
            <span>Robo o pérdida de teléfono.</span>
            <Link href='#'>
              <Image
                src='/assets/login/icons/arrow.svg'
                width={24}
                height={24}
                alt='arrow-icon'
              />
            </Link>
          </div>
        </div>
        <div className='bg-slate-100 max-w-md shadow-xl py-1 px-2'>
          <div className='flex items-center justify-between text-xs'>
            <Image
              src='/assets/login/icons/user.svg'
              width={24}
              height={24}
              alt='user-icon'
            />
            <span>Robo de cuenta</span>
            <Link href='#'>
              <Image
                src='/assets/login/icons/arrow.svg'
                width={24}
                height={24}
                alt='arrow-icon'
              />
            </Link>
          </div>
        </div>
      </article>
      <Link className='py-6' href='#'>
        <h5 className='text-[#00B1EA] font-normal text-xs'>
          Necesito ayuda con otros temas
        </h5>
      </Link>
    </section>
  );
};

export default InfoEmail;
