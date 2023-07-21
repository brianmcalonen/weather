import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Weekly Highs & Lows",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const WeeklyHighs = ({ weather }) => {
  const { daily } = weather;

  console.log("daily", daily);

  const data = {
    labels,
    datasets: [
      {
        label: "High temp",
        data: daily.map((day) => day.temp.max), // replace with actual temperature data
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Low temp",
        data: daily.map((day) => day.temp.min), // replace with actual humidity data
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default WeeklyHighs;
