"use client";
import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import "chart.js/auto";

type Props = {
  data: number[];
  labels: string[];
};

const initialState = {
  labels: ["", "", ""],
  datasets: [
    {
      data: [0, 0, 0],
      backgroundColor: ["", "", ""],
    },
  ],
};

const PieChart = ({ data, labels }: Props) => {
  const [chartData, setChartData] = useState(initialState);

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 99, 13, 0.6)",
            "rgba(200, 9, 132, 0.6)",
          ],
        },
      ],
    });
  }, [data, labels]);

  return (
    <div className="w-9/12 h-5/6 border p-8 m-8 shadow-lg">
      <article>
        <h1 className="text-lg font-bold">Tus gastos</h1>
        <p className="text-gray-400">
          Analiza tus categorías y presupuesto mensual para controlar tus
          finanzas
        </p>
        <br />
        <hr />
        <br />
        <Pie className="w-96 h-96" data={chartData} />
        <br />
        <hr />
        <br />
        <span className="text-primary">Analizar gastos</span>
      </article>
    </div>
  );
};

export default PieChart;
