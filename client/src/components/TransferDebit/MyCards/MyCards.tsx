'use client'

import Card from '@/components/SendMoney/SelectMethod/Card'
import { getCreditCards } from '@/services'
import { useQuery } from '@tanstack/react-query'

const MyCards = () => {
  const { data } = useQuery(['cards'], getCreditCards)
  const cards = data?.data

  return (
    <div className="flex flex-wrap justify-center h-full gap-4 w-[1300px] mt-10">
      {cards?.map((card: any) => <Card />)}
    </div>
  )
}
export default MyCards
