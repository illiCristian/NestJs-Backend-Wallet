import Image from 'next/image';
import securityicon from '../../../public/security1.svg';

function Modal(props: any) {
  if (!props.isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black 
    bg-opacity-25 
    flex justify-center items-center ${props.isVisible}`}
    >
      {/* Modal */}
      <button onClick={() => props.onClose()}>X</button>
      <div className='w-[800px] h-[604px] bg-white flex flex-col  shadow-[0px_1px_4px_2px_#00000025]  rounded-lg '>
        <h1 className=' origin-top-left  text-black text-2xl font-semiboldd mt-9 ml-24'>
          Para continuar debes aceptar los terminos y condiciones
        </h1>
        <p className='origin-top-left text-sky-500 text-base font-normal  ml-24 leading-normal mt-12 '>
          Términos y condiciones
        </p>
        <button
          onClick={() => {
            props.onClose();
            props.isVisible1();
          }}
          className='w-[451px] h-[51px] ml-44  bg-sky-500 rounded-md justify-center items-center  inline-flex mt-24 text-center text-white text-base font-bold leading-normal'
        >
          He leído y acepto los terminos y condiciones
        </button>
        <hr className='w-full bg-black border-1 mt-20' />
        <div className='flex flex-row items-center justify-center mt-12 mb-24 gap-1'>
          <Image src={securityicon} alt='security' width={24} height={24} />
          <p className=' origin-top-left  text-black text-xs font-normal leading-normal'>
            Tu información está protegida con altos estándares de seguridad
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
