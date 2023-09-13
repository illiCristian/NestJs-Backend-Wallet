import BalanceMoney from '@/components/Balance/BalanceMoney'
import Image from 'next/image'
import men from '../../../../public/assets/balance/men.svg'
import image from '../../../../public/assets/dashboard/image-item.png'
import PieChart from '../../../components/Balance/PieChart'

const pageBalance = (): JSX.Element => {
  const numbers = [45, 45, 10]
  const labels = ['42', '34', '45']

  return (
    <section className="flex justify-start p-12 gap-7 ">
      <div className="w-[370px] h-[493px] bg-white rounded-lg shadow-[0px_1px_4px_2px_#00000025] p-4">
        <div className="flex justify-between">
          <h4 className="text-base font-normal leading-normal text-neutral-500">
            {' '}
            Dinero disponible
          </h4>
          <Image src={men} alt="men" />
        </div>
        <BalanceMoney />
        <div className="flex justify-between py-2">
          <div className="text-xs font-normal leading-normal text-neutral-500">
            Invertido
          </div>
          <p className="text-base font-semibold leading-normal text-black">
            $ 0
          </p>
        </div>
        <hr />
        <div className="flex justify-between py-2">
          <div className="text-xs font-normal leading-normal text-neutral-500">
            No invertido
          </div>
          <p className="text-base font-semibold leading-normal text-black">
            $ 0
          </p>
        </div>
        <hr />
        <div className="mt-5 text-base font-semibold leading-normal text-black">
          Movimientos de tu dinero
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex gap-3">
            <Image className="w-6 h-6" src={image} alt="iamge" />
            <div className="flex flex-col">
              <p className="text-base font-normal leading-normal text-black text-start">
                Recarga de celular
              </p>
              <p className="text-xs font-normal leading-normal text-start text-neutral-500">
                Claro
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-base font-normal leading-normal text-black text-end">
              -$300
            </p>
            <p className="text-xs font-normal leading-normal text-end text-neutral-500">
              Ayer
            </p>
          </div>
        </div>
        <div className="mt-40 text-base font-semibold leading-normal text-sky-500">
          Consultar más movimientos
        </div>
      </div>
      <PieChart data={numbers} labels={labels} />
    </section>
  )
}

export default pageBalance
