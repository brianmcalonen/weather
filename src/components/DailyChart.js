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
      text: "Hourly weather",
    },
  },
};

const getHour = (dt) => {
  let date = new Date(dt * 1000);
  let hour = date.getHours();
  let ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  return hour + ampm;
};

const DailyChart = ({ weather }) => {
  const next12hours = weather.hourly.slice(0, 12);

  console.log("weather", weather);

  const labels = next12hours.map((hourData) => getHour(hourData.dt));

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: next12hours.map((hourData) => hourData.temp),
        borderColor: "rgb(236, 110, 77)",
        backgroundColor: "rgba(236, 110, 77, 0.5)",
      },
      {
        label: "Humidity",
        data: next12hours.map((hourData) => hourData.humidity),
        borderColor: "rgb(77, 177, 236)",
        backgroundColor: "rgba(77, 177, 236, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default DailyChart;
