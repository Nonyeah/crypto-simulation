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
      label: "BTC Trading Analysis Current Year 2025",
      data: [
        40000, 50000, 60000, 70000, 90000, 35000, 50000, 25000, 60000, 82000,
        65000, 59000,
      ],
      fill: false,
      borderColor: "#e7d534",
      tension: 0.1,
    },
    {
      label: "BTC Trading Analysis Previous Year",
      data: [
        35000, 20000, 51000, 50000, 59000, 62000, 31000, 82000, 80000, 75000,
        69000, 37000,
      ],
      fill: false,
      borderColor: "#808000",
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
