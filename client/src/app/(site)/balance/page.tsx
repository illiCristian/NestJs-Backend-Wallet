import BalanceWallet from '@/components/Home/BalanceWallet'
import PieChart from '../../../components/Balance/PieChart'
import Image from 'next/image'
import men from '../../../../public/assets/balance/men.svg'
import arrow from '../../../../public/assets/dashboard/arrow2.svg'
import image from '../../../../public/assets/dashboard/image-item.png'

const pageBalance = (): JSX.Element => {
  const numbers = [45, 45, 10]
  const labels = ['42', '34', '45']

  return (
    <section className="flex justify-start p-12 gap-7 ">
      <div className="w-[370px] h-[493px] bg-white rounded-lg shadow-[0px_1px_4px_2px_#00000025] p-4">
        <div className="flex justify-between">
          <h4 className="text-neutral-500 text-base font-normal leading-normal">
            {' '}
            Dinero disponible
          </h4>
          <Image src={men} alt="men" />
        </div>
        <div className="flex justify-between py-2">
          <div className="text-black text-[31px] font-semibold leading-normal">
            $ 90.000
          </div>
          <Image src={arrow} alt="arrow" />
        </div>
        <div className="flex justify-between py-2">
          <div className="text-neutral-500 text-xs font-normal leading-normal">
            Invertido
          </div>
          <p className="text-black text-base font-semibold leading-normal">
            $ 0
          </p>
        </div>
        <hr />
        <div className="flex justify-between py-2">
          <div className="text-neutral-500 text-xs font-normal leading-normal">
            No invertido
          </div>
          <p className="text-black text-base font-semibold leading-normal">
            $ 0
          </p>
        </div>
        <hr />
        <div className="text-black text-base font-semibold leading-normal mt-5">
          Movimientos de tu dinero
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex gap-3">
            <Image className="w-6 h-6" src={image} alt="iamge" />
            <div className="flex flex-col">
              <p className="text-start text-black text-base font-normal leading-normal">
                Recarga de celular
              </p>
              <p className="text-start text-neutral-500 text-xs font-normal leading-normal">
                Claro
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-black text-base font-normal leading-normal text-end">
              -$300
            </p>
            <p className="text-end text-neutral-500 text-xs font-normal leading-normal">
              Ayer
            </p>
          </div>
        </div>
        <div className="text-sky-500 text-base font-semibold leading-normal mt-40">
          Consultar más movimientos
        </div>
      </div>

      <article className="">
        {/* <section className="flex justify-between py-2 w-[370px] h-[60px] bg-white rounded-lg shadow-lg">
          <BalanceWallet />
        </section> */}
        {/* <div className="w-[370px] h-[570px] flex flex-col bg-white rounded-lg shadow-lg">
          <header className="">
            <h3 className="text-start text-black text-base font-semibold leading-normal px-16 mt-5">
              Movimientos de tu dinero
            </h3>
            <div className=" w-[370px] h-px bg-zinc-300 mt-3" />
          </header>
          <section className="px-16">
            <input className=" w-[270px] h-[41px] bg-zinc-300 rounded-lg absolute focus:border-2 focus:border-primary mt-5 ps-10 px-10 focus:outline-none" />
            <Image
              src={search}
              alt="search"
              className="top-7 left-3  w-6 h-6 relative"
            ></Image>
          </section>
          <br />
          <hr />
          <br />
          <Link href={'/home'}>
            <span className="text-primary">Consultar más movimientos</span>
          </Link>
        </div> */}
      </article>
      <PieChart data={numbers} labels={labels} />
    </section>
  )
}

export default pageBalance
