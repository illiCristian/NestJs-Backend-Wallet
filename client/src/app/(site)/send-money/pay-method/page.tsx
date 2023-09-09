import AddCard from '@/components/SendMoney/SelectMethod/AddCard'
import Card from '@/components/SendMoney/SelectMethod/Card'
import TransferButton from '@/components/SendMoney/SelectMethod/TransferButton'
import TransferDetail from '@/components/SendMoney/SelectMethod/TransferDetail'

export default function page() {
  return (
    <>
      <div className="text-black px-72 text-[25px] font-semibold leading-normal mt-10">
        Agrega una tarjeta
      </div>
      <div className="flex justify-center">
        <section className="w-[1013px] h-[740px] flex flex-col bg-white rounded-lg shadow-[0px_4px_4px_4px_#00000025] mt-10">
          <TransferDetail />
          <div className="flex justify-center gap-16 mt-10">
            <AddCard />
            <Card />
          </div>
          <TransferButton />
        </section>
      </div>
    </>
  )
}
