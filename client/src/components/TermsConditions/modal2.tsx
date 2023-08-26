import Image from 'next/image';
import congratsAccount from '../../../public/congrats-account.png';

function Modal2(props: any) {
  return (
    <div
      className={`fixed inset-0 bg-black 
    bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center ${props.isVisible}`}
    >
      <button onClick={() => props.onClose()}>X</button>
      <div className='w-[500px] bg-white flex flex-col justify-center items-center'>
        <Image
          src={congratsAccount}
          alt='security'
          width={110}
          height={110}
          className='mt-10'
        />
        <h1 className='my-3 font-semibold'>
          ¡Genial! Ya puedes utilizar tu cuenta
        </h1>
        <p className='my-3 text-blue-400 text-xs mr-[140px]'>
          Cuenta creada con éxito
        </p>
        <p className='mb-3 text-xs mr-[14px]'>
          Inicia sesión con tu móvil o número de teléfono.
        </p>
        <button className='bg-[#00B1EA] py-2 px-7 text-white rounded-lg mt-9 mb-16 text-xs font-semibold'>
          Continuar
        </button>
      </div>
    </div>
  );
}

export default Modal2;
