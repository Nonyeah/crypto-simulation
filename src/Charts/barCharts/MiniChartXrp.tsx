import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
  } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
  
  // Register required chart.js components
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  // Define types
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        
      },
      title: {
        display: true,
        text: 'Money Flow Analysis',
      },
    },
  };

  function ChartDescription(){
    return (
<div className="chart-description">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Buy (XRP)</th>
        <th>Sell (XRP)</th>
        <th>Inflow</th>
      </tr>
      </thead>
      <tbody>
        <tr>
         <td>Large</td>
         <td>214,492.00</td>
         <td>77,798.00</td>
         <td>136,694.00</td>
        </tr>
        <tr>
        <td>Medium</td>
         <td>154,330.00</td>
         <td>233,690.00</td>
         <td>-80,060.00</td>
        </tr>
        <tr>
        <td>Small</td>
         <td>460,894.00</td>
         <td>469,697.00</td>
         <td>-8,803.00</td>
        </tr>
        <tr>
        <td>Total</td>
         <td>544,844.00</td>
         <td>656,848.00</td>
         <td>-112,004.00</td>
        </tr>
      </tbody>
  </table>
  <hr />
  
  <div className="legend-box">
    
    <div className="top-section">
    <section>
      <p className="ls"></p><span>Large Sells</span>
    </section>
    <section>
      <p className="ms"></p><span>medium sells</span>
    </section>
    <section>
      <p className="ss"></p><span>small sells</span>
    </section>
    </div>

    <div className="bottom-section">
    <section>
      <p className="lb"></p><span>large buys</span>
    </section>
    <section>
      <p className="mb"></p><span>medium buys</span>
    </section>
    <section>
      <p className="sb"></p><span>small buys</span>
    </section>
    </div>
  </div>
</div>
    )
  }
  
  const data: ChartData<'doughnut'> = {
    labels: ['Large Sells', 'Medium Sells', 'Small Sells', 'Large Buys', 'Medium Buys', 'Small Buys'],
    datasets: [
      {
        label: 'Money Flow: 15 Minute Period',
        data: [30.2, 15.8, 5.9, 36, 8.5, 1.9],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };
  
  const MiniChartXrp = () => {
    return (
      <>
    <div className="doughnut-container">
    <Doughnut data={data} options={options} />
    </div>
    <ChartDescription />
    </>
  );
  };
  
  export default MiniChartXrp;