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
      label: "Doge Trading Analysis Current Year 2025",
      data: [
        0.09, 0.08, 0.12, 0.15, 0.11, 0.15, 0.05, 0.04, 0.18, 0.33, 0.34, 0.31,
      ],
      fill: false,
      borderColor: "#006400",
      tension: 0.1,
    },
    {
      label: "Doge Trading Analysis Previous Year",
      data: [
        0.01, 0.02, 0.03, 0.08, 0.11, 0.15, 0.15, 0.1, 0.17, 0.2, 0.25, 0.26,
      ],
      fill: false,
      borderColor: "#00CED1",
      tension: 0.1,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
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
 return ( 
 <div style={{ position: "relative", width: "100%", height: "500px" }}>
  <Line data={data} options={options} />
 </div>
 )
};

export default LineChart;
