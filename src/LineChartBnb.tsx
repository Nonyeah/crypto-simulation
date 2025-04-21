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
      label: "BNB Trading Analysis Current Year 2025",
      data: [50, 40, 60, 70, 90, 120, 180, 25, 50, 35, 200, 150],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "BNB Trading Analysis Previous Year",
      data: [10, 20, 140, 50, 120, 129, 225, 10, 75, 185, 100, 300],
      fill: false,
      borderColor: "#852203",
      tension: 0.1,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 400
      }
    },
  
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
