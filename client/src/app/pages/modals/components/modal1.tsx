import Image from 'next/image';
import formIcon from '../../../../../public/form-icon-conditions.svg';

function Modal1(props : any) {
  return (
    <div className={`fixed inset-0 bg-black 
    bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center ${props.isVisible}`}>
      <button onClick={() => props.onClose()}>
          X
      </button>
      <div className='w-[400px] bg-white flex flex-col justify-center items-center rounded border-2 border-gray-400'>
      <Image
            src={formIcon}
            alt='security'
            width={90}
            height={90}
            className='mt-9'
          />
        <h1 className='my-3 font-semibold'>Términos y condiciones</h1>
        <p className='my-3 text-blue-400 text-xs mr-[75px]'>Validado con éxito</p>
        <button 
          onClick={() => {
            props.onClose();
            props.isVisible2();
          }}
          className='bg-[#00B1EA] py-3 px-12 text-white rounded-lg mt-6 mb-12 text-xs font-semibold'>
          Continuar
        </button>
      </div>
    </div>
  )
}

export default Modal1;
