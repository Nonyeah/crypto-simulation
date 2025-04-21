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
      label: "Etherium Trading Analysis Current Year 2025",
      data: [
        2700, 2600, 2500, 2850, 2950, 2658, 3115, 3200, 3000, 1875, 1658, 1789,
      ],
      fill: false,
      borderColor: "#8B4513",
      tension: 0.1,
    },
    {
      label: "Etherium Trading Analysis Previous Year",
      data: [
        1500, 1550, 1650, 1400, 1720, 1459, 1800, 2000, 2100, 2600, 1987, 2147,
      ],
      fill: false,
      borderColor: "#8B008B",
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
   <Line data={data} options={options} />;
  </div>
  )
};

export default LineChart;
