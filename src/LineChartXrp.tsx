import {
  ChartOptions,
  ChartData,
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register components with ChartJS
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

// Your data and options
const data: ChartData<"line"> = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "XRP Trading Analysis Current Year 2025",
      data: [
        0.49, 0.5, 0.55, 0.66, 0.68, 0.4, 1.47, 1.54, 1.59, 1.78, 2.51, 2.0,
      ],
      fill: false,
      borderColor: "#9932CC",
      tension: 0.1,
    },
    {
      label: "XRP Trading Analysis Previous Year",
      data: [
        0.58, 0.78, 0.22, 0.32, 0.98, 0.9, 1.89, 1.9, 2.2, 3.0, 2.01, 1.94,
      ],
      fill: false,
      borderColor: "#8FBC8F",
      tension: 0.1,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Trading Analysis",
    },
  },
};

const LineChart = () => {
  return <Line data={data} options={options} />;
};

export default LineChart;
