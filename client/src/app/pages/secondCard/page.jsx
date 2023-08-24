import Image from 'next/image';
import cuenta from '../../../../public/cuenta.png';


const SecondCard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mx-auto px-4 bg-gray-100 flex flex-row justify-between items-center my-4 border rounded-md w-[600px]'>
        <div>
          <Image
            // src="https://http2.mlstatic.com/frontend-assets/home-landing/f1c133f9baa6b0285066dcef08bdd7.webp"
            src={cuenta}
            alt='scan-pay'
            height={250}
            width={250}
            className='my-5'
          />

        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-black font-semibold text-2xl mx-16 mt-4'>
            Tené una cuenta gratis y sin burocracia
          </p>

          <p className='mx-16 mt-2'>
            100% digital, la abrís en minutos y podés manejar tus finanzas como quieras.
          </p>

          <button className=' bg-blue-400 text-white text-sm py-3 mx-16 border rounded-lg mt-2 mb-3'>
            Conocé la cuenta
          </button>

        </div>
      </div>
    </div>
  )
}

export default SecondCard;
