import './styles.css'
import Image from 'next/image'
import BannerImg from '../../../../public/assets/landing/images/banner6.jpeg'
import BannerImg2 from '../../../../public/assets/landing/images/imagen-banner1.png'
import Vector from '../../../../public/assets/landing/vectors/vector.png'
import Vector1 from '../../../../public/assets/landing/vectors/vector1.png'
import Dot from '../../../../public/assets/landing/vectors/dot.png'
import Bar from '../../../../public/assets/landing/vectors/barra.png'

interface BannerProps {
  bannerClasses: string
}

const Banner: React.FC<BannerProps> = ({ bannerClasses }) => {
  return (
    <div className='banner-container'>
      <section className={`banner-sections relative ${bannerClasses}`}>
        <div className='section-uno max-w-full px-0 py-0 items-center justify-center flex-col'>
          <div className='section-uno max-w-full px-0 py-0 items-center justify-center flex-col relative'>
            <Image
              className='banner-image w-full object-cover object-center opacity-80 relative'
              alt='hero'
              src={BannerImg}
              layout='responsive'
              width={720}
              height={100}
            />
            <div className='flex absolute top-0 left-0 w-full h-full ml-0 mt-10 font-black text-center z-10'>
              <div>
                <Image
                  className='banner-dot'
                  alt='vector '
                  src={Dot}
                  width={250}
                  height={100}
                />
              </div>
              <div className='bar-banner'>
                <Image alt='vector ' src={Bar} width={100} height={100} />
              </div>
              <div>
                <h2 className='text-banner text-white text-left text-4xl mb-2 tracking-wider '>
                  HAZ MÁS
                  <br />
                  CON TU DINERO
                  <br />
                  ¡ES AHORA!
                </h2>
              </div>
            </div>
          </div>
          <div className='banner-img2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Image
              className={`banner-image2 object-cover object-center rounded ${bannerClasses}`}
              alt='hero'
              src={BannerImg2}
              width={720}
              height={600}
            />
          </div>
        </div>
      </section>
      <div className='vector-container flex'>
        <section className='vector-container1 flex relative'>
          <div className='flex flex-1 container mx-auto px-5 py-24 items-center justify-center flex-col'>
            <div className='flex space-x-4'>
              <div className={`card flex items-center `}>
                <Image
                  className={`card-vector1 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded`}
                  alt='hero'
                  src={Vector1}
                  width={200}
                  height={100}
                />
                <div className='text-and-button'>
                  <div>
                    <h2 className='w-full'>
                      Maneja tus finanzas, y transfiere gratis
                    </h2>
                    <p className='w-full'>
                      Puedes hacer crecer tus ahorros con GBM, comprar en meses
                      y pagar servicios desde el celular.
                    </p>
                  </div>
                  <div>
                    <button className='w-full  bg-tertiary text-white hover:bg-tertiaryDark'>
                      Conoce tus cuentas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
            <div className='card flex items-center'>
              <Image
                className='card-vector2 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
                alt='hero'
                src={Vector}
                width={200}
                height={100}
              />
              <div className='text-and-button'>
                <div>
                  <h2 className='w-full'>Vende y ten tu dinero al instante</h2>
                  <p className='w-full'>
                    Cobra con los medios de pago más usados y accede a un
                    crédito sin complicaciones.
                  </p>
                </div>
                <div>
                  <button className='w-full bg-tertiary text-white hover:bg-tertiaryDark'>
                    Conoce tus cuentas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Banner
