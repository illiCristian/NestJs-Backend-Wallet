import Link from 'next/link';
import Image from 'next/image';
import ActivityBox from '@/components/Dashboard/ActivityBox';
import MoneyCharge from '@/components/Dashboard/MoneyCharge';
import BalanceWallet from '@/components/Dashboard/BalanceWallet';
import arrow from '../../../public/assets/dashboard/arrow2.svg';
import image from '../../../public/assets/dashboard/image.png';

export default function page() {
  return (
    <>
      <section className='flex px-12 gap-10 py-10'>
        <div className=' flex flex-col gap-7'>
          <section className='flex justify-between py-2 w-[370px] h-[60px] bg-white rounded-lg shadow-[0.0px_4.0px_4.0px_rgba(0,0,0,0.25)]'>
            <h3 className='text-center py-3 px-5 text-black text-base font-semibold leading-normal'>
              Haz crecer tu dinero
            </h3>
            <div className='flex py-3 px-3 gap-3'>
              <div className='flex w-[61px] h-6 bg-sky-500 rounded-[37px]'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mt-1'
                >
                  <g clip-path='url(#clip0_776_2310)'>
                    <path d='M3.5 7L6 4.5L8.5 7H3.5Z' fill='white' />
                  </g>
                  <defs>
                    <clipPath id='clip0_776_2310'>
                      <rect width='12' height='12' fill='white' />
                    </clipPath>
                  </defs>
                </svg>

                <p className='text-center py-1 text-white text-xs font-semibold leading-normal'>
                  10.3%
                </p>
              </div>
              <Image src={arrow} alt='arrow' className=' w-6 h-6 relative' />
            </div>
          </section>
          <BalanceWallet />
          <MoneyCharge />
          <div className=' text-start text-black text-base font-semibold leading-normal'>
            Descubre más
          </div>
          <Image className=' w-[375px] h-[199px]' src={image} alt='image' />
          <Link
            href={'#'}
            className=' w-[370px] h-[60px] flex justify-center py-4 bg-white rounded-lg shadow-[0.0px_4.0px_4.0px_rgba(0,0,0,0.25)]'
          >
            <p className=' text-center text-black text-base font-normal leading-normal'>
              Gana hasta $365 con point y más
            </p>
          </Link>
          <Link
            href={'#'}
            className=' w-[370px] h-[60px] flex justify-center py-4 bg-white rounded-lg shadow-[0.0px_4.0px_4.0px_rgba(0,0,0,0.25)]'
          >
            <p className=' ttext-center text-black text-base font-normal leading-normal'>
              Gana ¡150! por recomendar la App!
            </p>
          </Link>
        </div>
        <ActivityBox />
      </section>
    </>
  );
}
