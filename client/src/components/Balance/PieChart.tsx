'use client'
import { Pie } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import 'chart.js/auto'
import arrow from '../../../public/assets/dashboard/arrow2.svg'
import Image from 'next/image'

type Props = {
  data: number[]
  labels: string[]
}

const initialState = {
  labels: ['', '', ''],
  datasets: [
    {
      data: [0, 0, 0],
      backgroundColor: ['', '', ''],
    },
  ],
}

const PieChart = ({ data, labels }: Props) => {
  const [chartData, setChartData] = useState(initialState)

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 13, 0.6)',
            'rgba(200, 9, 132, 0.6)',
          ],
        },
      ],
    })
  }, [data, labels])

  return (
    <div className="w-[693px] h-[870px] rounded-lg shadow-[0px_1px_4px_2px_#00000025]">
      <article className="relative">
        <h1 className="text-black text-base font-semibold leading-normal ml-10 pt-4 mb-2">
          Tus gastos
        </h1>
        <p className="text-neutral-500 text-base font-normal leading-normal ml-10 mb-2 ">
          Analiza tus categorías y presupuesto mensual para controlar tus
          finanzas
        </p>
        <hr />
        <Pie className="p-24" data={chartData} />
        <div className="w-[320px] h-[320px] rounded-full bg-white absolute bottom-[230px] left-[190px] flex flex-col justify-center items-center">
          <p className="text-center text-black text-[31px] font-semibold leading-normal">
            $75.000
          </p>
          <p className="text-neutral-500 text-base font-normal leading-normal">
            Total Agosto
          </p>
        </div>
        <hr />
        <div className="flex justify-between px-10 py-4">
          <span className="text-sky-500 text-base font-semibold leading-normal">
            Analizar gastos
          </span>
          <Image src={arrow} alt="arrow" />
        </div>
      </article>
    </div>
  )
}

export default PieChart
