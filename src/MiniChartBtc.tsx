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
        <th>Buy (BTC)</th>
        <th>Sell (BTC)</th>
        <th>Inflow</th>
      </tr>
      </thead>
      <tbody>
        <tr>
         <td>Large</td>
         <td>69.8700</td>
         <td>69.8319</td>
         <td>0.0381</td>
        </tr>
        <tr>
        <td>Medium</td>
         <td>22.4607</td>
         <td>39.7696</td>
         <td>-17.3089</td>
        </tr>
        <tr>
        <td>Small</td>
         <td>15.1708</td>
         <td>24.9392</td>
         <td>-9.7684</td>
        </tr>
        <tr>
        <td>Total</td>
         <td>107.5015</td>
         <td>134.5407</td>
         <td>-27.0393</td>
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
        data: [25.3, 18.9, 8.6, 32, 12, 2.2],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };
  
  const MiniChartBtc = () => {
    return (
      <>
    <div className="doughnut-container">
    <Doughnut data={data} options={options} />
    </div>
    <ChartDescription />
    </>
  );
  };
  
  export default MiniChartBtc;