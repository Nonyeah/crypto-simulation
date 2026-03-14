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
        <th>Buy (BNB)</th>
        <th>Sell (BNB)</th>
        <th>Inflow</th>
      </tr>
      </thead>
      <tbody>
        <tr>
         <td>Large</td>
         <td>1578.40</td>
         <td>580.03</td>
         <td>98.37</td>
        </tr>
        <tr>
        <td>Medium</td>
         <td>855.14</td>
         <td>578.38</td>
         <td>276.76</td>
        </tr>
        <tr>
        <td>Small</td>
         <td>326.34</td>
         <td>199.36</td>
         <td>126.98</td>
        </tr>
        <tr>
        <td>Total</td>
         <td>2759.88</td>
         <td>1357.78</td>
         <td>1402.11</td>
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
        data: [32.2, 18.05, 5.6, 29.4, 12.9, 2.3],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };
  
  const MiniChartBnb = () => {
    return (
      <>
    <div className="doughnut-container">
    <Doughnut data={data} options={options} />
    </div>
    <ChartDescription />
    </>
  );
  };
  
  export default MiniChartBnb;