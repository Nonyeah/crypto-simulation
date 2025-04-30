import { useState, ReactNode } from "react";
import LineChart from "./LineChartSol";
import { useNavigate } from "react-router-dom";
import MiniChartSol from "./MiniChartSol";


const chartHouseNav: Array<ChartHouseNav> = [
  { id: 0, name: "Chart" },
  { id: 1, name: "Info" },
  { id: 2, name: "Trading Data" },
  { id: 3, name: "Trading Analysis" },
];

type ChartHouseNav = {
  id: number;
  name: string;
};

export default function Sol() {
  const navigate = useNavigate();

  return (
    <>
    
      <ChartHouse />
      <div className="previous">
        <button onClick={() => navigate("/")}>prev page</button>
      </div>
    </>
  );
}



function ChartHouse() {
  const [infodisplay, setinfodisplay] = useState<string>("chart");
  const [active, setactive] = useState<number>(10);

  function selectTab(numId: number) {
    const category: ChartHouseNav | undefined = chartHouseNav.find(
      (category) => category.id === numId
    );
    if (category) {
      setinfodisplay(category.name.toLowerCase());
      setactive(category.id);
    }
  }

  const topnav: ReactNode = chartHouseNav.map((label) => (
    <li key={label.id}>
      <button
        className={label.id === active ? "active" : ""}
        onClick={() => selectTab(label.id)}
      >
        {label.name}
      </button>
    </li>
  ));

  if (infodisplay === "chart") {
    return (
      <>
        <div className="chart-nav">
          <ul>{topnav}</ul>
        </div>
        <div className="chart-outside-cover">
          <div className="line-chart-container">
            <LineChart />
          </div>
        </div>
      </>
    );
  } else if (infodisplay === "info") {
    return (
      <>
        <div className="chart-nav">
          <ul>{topnav}</ul>
        </div>
        <div className="chart-outside-cover">
          <ChartInfo />
        </div>
      </>
    );
  } else if (infodisplay === "trading data") {
    return (
      <>
        <div className="chart-nav">
          <ul>{topnav}</ul>
        </div>
        <div className="chart-outside-cover">
          <div className="mini-chart">
            <MiniChartSol />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="chart-nav">
          <ul>{topnav}</ul>
        </div>
        <div className="chart-outside-cover">
          <TradingAnalysis />
        </div>
      </>
    );
  }
}

function TradingAnalysis() {
  return (
    <div className="outer-box">
      <div className="left-box">
        <section>
          <h4>Sum Buy Amount</h4>
          <p>0.000 SOL</p>
        </section>

        <section>
          <h4>Sum Buy Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Buy Price</h4>
          <p>0.000 USTD/SOL</p>
        </section>

        <section>
          <h4>Latest Position Value</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="middle-box">
        <section>
          <h4>Sum Sell Amount</h4>
          <p>0.000 SOL</p>
        </section>

        <section>
          <h4>Sum Sell Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Sell Price</h4>
          <p>0.000 USTD/SOL</p>
        </section>

        <section>
          <h4>Realised PNL</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="right-box">
        <section>
          <h4>Current Position</h4>
          <p>0.000 SOL</p>
        </section>

        <section>
          <h4>Total Position Cost</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Position Price</h4>
          <p>0.000 USTD/SOL</p>
        </section>

        <section>
          <h4>Unrealised PNL</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
    </div>
  );
}

interface ChartInformation {
  id: number;
  label: string;
  text: string;
}

const chartInfo: Array<ChartInformation> = [
  {
    id: 0,
    label: "Rank",
    text: "Based on the relative target market value of the surrogate",
  },
  {
    id: 1,
    label: "Market Capitalization",
    text: "Calculated my multiplying the current circular \
    supply with current price. It includes unlocked tokens. If unlocked token data is unavailable \
    non-publicly accessible tokens are excluded",
  },
  {
    id: 2,
    label: "Market Dominance",
    text: "Tracks the total market capitalization of the asset \
      relative to the total market capitalization of all assets",
  },

  {
    id: 3,
    label: "Circulating Supply",
    text: "Tokens available for tracking including unlocked\
    tokens. If unlocked token data is unavailable non-publicly accessible tokens are excluded",
  },

  
  {
    id: 4,
    label: "Total Supply",
    text: "The total number of tokens created versus the number of \
      total tokens destroyed",
  },

  {
    id: 5,
    label: "Historical High",
    text: "The highest price this asset has reached in its \
        history",
  },
  {
    id: 6,
    label: " Historical Low",
    text: "The lowest price this asset has reached in its \
          trading history",
  },
];

function ChartInfo() {
  const [idmatch, setidmatch] = useState<number>(20);

  function showToolTip(numId: number) {
    const textRef: ChartInformation | undefined = chartInfo.find(
      (coindetails) => coindetails.id === numId
    );
    if (textRef) {
      setidmatch(textRef.id);
    }
  }

  function hideToolTip(numId: number) {
    const textRef: ChartInformation | undefined = chartInfo.find(
      (coindetails) => coindetails.id === numId
    );
    if (textRef) {
      setidmatch(20);
    }
  }

  return (
    <div className="info-cover">
      <h2>SOL</h2>
      <div className="info-container">
        <div className="left-container">
          <ul>
            {chartInfo.map((info) => (
              <li
                key={info.id}
                onMouseOver={() => showToolTip(info.id)}
                onMouseOut={() => hideToolTip(info.id)}
              >
                {info.label}
                <span
                  className={`tooltip ${
                    idmatch === info.id ? "showtip" : "hidetip"
                  }`}
                >
                  {info.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="middle-container">
          <ul>
            <li>No.6</li>
            <li>$70,222.28M</li>
            <li>2.5301%</li>
            <li>516,878,683 SOL</li>
            <li>599,025,058 SOL</li>
            <li>$294.33494870928604</li>
            <li>$0.505193636791</li>
          </ul>
        </div>
        <div className="right-container">
          <h3>Intro</h3>
          <p>
            Solana is a high-speed single-layer blockchain, currently supporting
            peak capacity of 65k transactions per second and 400ms block times
            using a network timestamp system called Proof-of-History ("PoH").
            Core technical team comes from Qualcomm, a Fortune 500 chip
            manufacturer, where they managed projects such as Firefox OS and the
            BREW Operating System. SOL is the native digital asset on the SOL
            Ledger (SOLL) blockchain, built originally for payments. SOL
            primarily facilitates transactions on the network and bridges
            currencies in the SOL Ledger's native DEX. SOL is a digital asset
            that’s native to the SOL Ledger—an open-source, permissionless and
            decentralized blockchain technology. Created in 2012 specifically
            for payments, SOL can settle transactions on the ledger in 3-5
            seconds, using a network of trusted validators to verify
            transactions on the ledger. SOL can be sent directly without needing
            a central intermediary, making it a convenient instrument in
            bridging two different currencies quickly and efficiently. It is
            freely exchanged on the open market and used in the real world for
            enabling cross-border payments and microtransactions. SOL can also
            be used to exchange different currencies and access crypto
            liquidity.
          </p>
        </div>
      </div>
    </div>
  );
}
