"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [846, 755, 629, 512, 994, 438, 618, 586, 872, 804],
      backgroundColor: "rgba(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [356, 310, 788, 165, 588, 750, 152, 580, 853, 266],
      backgroundColor: "rgba(53, 162, 235)",
    },
  ],
};

export default function Graph() {
  return (
    <div className=" min-w-64 w-full border border-blue-500 p-2 rounded-lg ">
      <Bar options={options} data={data} />
    </div>
  );
}
