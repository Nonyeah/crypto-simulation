import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register required chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define types
const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Money Flow Analysis",
    },
  },
};

function ChartDescription() {
  return (
    <div className="chart-description">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Buy (ETH)</th>
            <th>Sell (ETH)</th>
            <th>Inflow</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Large</td>
            <td>1,343.8388</td>
            <td>938.2794</td>
            <td>25.4446</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>739.8244</td>
            <td>580.4544</td>
            <td>159.3700</td>
          </tr>
          <tr>
            <td>Small</td>
            <td>393.9164</td>
            <td>219.1998</td>
            <td>174.7166</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>2,097.4648</td>
            <td>1,737.9336</td>
            <td>359.5312</td>
          </tr>
        </tbody>
      </table>
      <hr />

      <div className="legend-box">
        <div className="top-section">
          <section>
            <p className="ls"></p>
            <span>Large Sells</span>
          </section>
          <section>
            <p className="ms"></p>
            <span>medium sells</span>
          </section>
          <section>
            <p className="ss"></p>
            <span>small sells</span>
          </section>
        </div>

        <div className="bottom-section">
          <section>
            <p className="lb"></p>
            <span>large buys</span>
          </section>
          <section>
            <p className="mb"></p>
            <span>medium buys</span>
          </section>
          <section>
            <p className="sb"></p>
            <span>small buys</span>
          </section>
        </div>
      </div>
    </div>
  );
}

const data: ChartData<"doughnut"> = {
  labels: [
    "Large Sells",
    "Medium Sells",
    "Small Sells",
    "Large Buys",
    "Medium Buys",
    "Small Buys",
  ],
  datasets: [
    {
      label: "Money Flow: 15 Minute Period",
      data: [
        1,343.8388, 739.8244, 393.9164, 938.2794, 580.4544, 174.7166

      ],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      borderWidth: 1,
    },
  ],
};

const MiniChartEth = () => {
  return (
    <>
      <div className="doughnut-container">
        <Doughnut data={data} options={options} />
      </div>
      <ChartDescription />
    </>
  );
};

export default MiniChartEth;
