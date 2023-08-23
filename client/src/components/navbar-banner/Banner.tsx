import './styles.css'
import Image from 'next/image'
import BannerImg from '../../../public/images/banner6.jpeg'
import BannerImg2 from '../../../public/images/image-banner.jpeg'

export default function Banner () {
  return (
    <div>
      <section className='banner'>
        <div className='container max-w-full px-0 py-0 items-center justify-center flex-col'>
          <div className='w-full opacity-80'>
            <Image
              className='banner-image w-full object-cover object-center rounded opacity-80'
              alt='hero'
              src={BannerImg}
              layout='responsive'
              width={720}
              height={100}
            />
          </div>
          <Image
            className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
            alt='hero'
            src={BannerImg2}
            width={720}
            height={600}
          />
        </div>
      </section>
      <section>
        <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
          {/* <Image
            className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
            alt='hero'
            src='https://dummyimage.com/720x600'
            width={720}
            height={600}
          /> */}
        </div>
        <div>
          <h1>Hola</h1>
        </div>
      </section>
      <section>
        <div>
          <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
            {/* <Image
              className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
              alt='hero'
              src='https://dummyimage.com/720x600'
              width={720}
              height={600}
            /> */}
          </div>
          <div>
            <h2>Hola</h2>
          </div>
          <div>
            <button>Click me</button>
          </div>
        </div>
        <div>
          <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
            {/* <Image
              className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
              alt='hero'
              src='https://dummyimage.com/720x600'
              width={720}
              height={600}
            /> */}
          </div>
          <div>
            <h2>Hola</h2>
          </div>
          <div>
            <button>Click me</button>
          </div>
        </div>
      </section>
    </div>
  )
}
