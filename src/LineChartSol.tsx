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
      label: "Solana Trading Analysis Current Year 2025",
      data: [100, 110, 105, 125, 113, 120, 136, 125, 150, 165, 142, 150],
      fill: false,
      borderColor: "#FFC0CB",
      tension: 0.1,
    },
    {
      label: "Solana Trading Analysis Previous Year",
      data: [148, 158, 155, 125, 109, 189, 198, 145, 166, 135, 180, 175],
      fill: false,
      borderColor: "#008080",
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
