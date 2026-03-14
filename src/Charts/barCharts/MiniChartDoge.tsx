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
        <th>Buy (DOGE)</th>
        <th>Sell (DOGE)</th>
        <th>Inflow</th>
      </tr>
      </thead>
      <tbody>
        <tr>
         <td>Large</td>
         <td>1,044,658.00
         </td>
         <td>1,772,014.00
         </td>
         <td>2,080,002.00</td>
        </tr>
        <tr>
        <td>Medium</td>
         <td>1,220,412.00
         </td>
         <td>1,244,562.00
         </td>
         <td>-24,150.00</td>
        </tr>
        <tr>
        <td>Small</td>
         <td>215,950.00
         </td>
         <td>238,968.00
         </td>
         <td>-23,018.00</td>
        </tr>
        <tr>
        <td>Total</td>
         <td>5,288,378.00

         </td>
         <td>3,255,544.00

         </td>
         <td>2,032,834.00</td>
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
        data: [1044,658.00, 1,220,412.00, 215,950.00, 1,772,114.00, 1,244,562.00, 238,968.00],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };
  
  const MiniChartDoge = () => {
    return (
      <>
    <div className="doughnut-container">
    <Doughnut data={data} options={options} />
    </div>
    <ChartDescription />
    </>
  );
  };
  
  export default MiniChartDoge;