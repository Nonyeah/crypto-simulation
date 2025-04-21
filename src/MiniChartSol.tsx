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
            <td>14,810.07</td>
            <td>6,647.11</td>
            <td>8,162.95</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>4,528.93</td>
            <td>4,821.54</td>
            <td>-292.61</td>
          </tr>
          <tr>
            <td>Small</td>
            <td>1,829.05</td>
            <td>1,496.64</td>
            <td>332.40</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>21,168.05</td>
            <td>12,965.30</td>
            <td>8,202.75</td>
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
      data: [14,810.07, 4,528.93, 1,829.05, 4,821.54, 938.2794, -292.61, 1,829.05],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      borderWidth: 1,
    },
  ],
};

const MiniChartSol = () => {
  return (
    <>
      <div className="doughnut-container">
        <Doughnut data={data} options={options} />
      </div>
      <ChartDescription />
    </>
  );
};

export default MiniChartSol;
