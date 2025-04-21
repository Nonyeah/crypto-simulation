import { useState, ReactNode } from "react";
import LineChart from "./LineChartBtc";
import { useNavigate } from "react-router-dom";
import MiniChartBtc from "./MiniChartBtc";

interface MainTopNav {
  id: number;
  labelName: string;
  content: string[];
}

const mainTopNav: MainTopNav[] = [
  {
    id: 0,
    labelName: "buy crypto",
    content: ["buy crypto via bank card", "buy crypto via P2P", "buy Nft's"],
  },
  { id: 1, labelName: "markets", content: ["latest market trends"] },
  {
    id: 2,
    labelName: "trade",
    content: ["convert", "spot exchange", "margin exchange", "trading bots"],
  },
  {
    id: 3,
    labelName: "support",
    content: [
      "submit live chat",
      "support centre",
      "trading fees",
      "trading rule",
    ],
  },
];

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

export default function Btc() {
  const navigate = useNavigate();

  const navlist = mainTopNav.map((label) => (
    <DisplayListBlock
      id={label.id}
      labelName={label.labelName}
      content={label.content}
    />
  ));
  return (
    <div className="coin-container">
      <div className="coin-topnav">
        <ul>{navlist}</ul>
      </div>
      <ChartHouse />
      <div className="previous">
        <button onClick={() => navigate("/")}>prev page</button>
      </div>
    </div>
  );
}

function DisplayListBlock({ id, labelName, content }: MainTopNav) {
  const [showpanel, setshowpanel] = useState<boolean>(false);
  return (
    <li
      onMouseOver={() => setshowpanel(true)}
      onMouseOut={() => setshowpanel(false)}
      key={id}
    >
      {labelName}
      <ul className={`innerlist ${showpanel ? "showinner" : "hideinner"}`}>
        <li>
          {content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </li>
      </ul>
    </li>
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
            <MiniChartBtc />
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
          <p>0.000 BTC</p>
        </section>

        <section>
          <h4>Sum Buy Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Buy Price</h4>
          <p>0.000 USTD/BTC</p>
        </section>

        <section>
          <h4>Latest Position Value</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="middle-box">
        <section>
          <h4>Sum Sell Amount</h4>
          <p>0.000 BTC</p>
        </section>

        <section>
          <h4>Sum Sell Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Sell Price</h4>
          <p>0.000 USTD/BTC</p>
        </section>

        <section>
          <h4>Realised PNL</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="right-box">
        <section>
          <h4>Current Position</h4>
          <p>0.000 BTC</p>
        </section>

        <section>
          <h4>Total Position Cost</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Position Price</h4>
          <p>0.000 USTD/BTC</p>
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
    label: "Maximum Supply",
    text: "The total number of coins that will be issued in an asset's lifetime",
  },
  {
    id: 5,
    label: "Total Supply",
    text: "The total number of tokens created versus the number of \
      total tokens destroyed",
  },
  { id: 6, label: "Issue Date", text: "Asset initial offering date" },

  {
    id: 7,
    label: "Historical High",
    text: "The highest price this asset has reached in its \
        history",
  },
  {
    id: 8,
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
      <h2>BTC</h2>
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
            <li>No.1</li>
            <li>$1,731,950.49M</li>
            <li>62.3401%</li>
            <li>19,854,409 BTC</li>
            <li>21,000,000 BTC</li>
            <li>19,854,409 BTC</li>
            <li>2008-11-01</li>
            <li>$109,114.88483408831</li>
            <li>$0.04864654</li>
          </ul>
        </div>
        <div className="right-container">
          <h3>Intro</h3>
          <p>
            Bitcoin (BTC) is a peer-to-peer cryptocurrency that aims to function
            as a means of exchange that is independent of any central authority.
            BTC can be transferred electronically in a secure, verifiable, and
            immutable way. Launched in 2009, BTC is the first virtual currency
            to solve the double-spending issue by timestamping transactions
            before broadcasting them to all of the nodes in the Bitcoin network.
            The Bitcoin Protocol offered a solution to the Byzantine Generals'
            Problem with a blockchain network structure, a notion first created
            by Stuart Haber and W. Scott Stornetta in 1991. Bitcoin’s whitepaper
            was published pseudonymously in 2008 by an individual, or a group,
            with the pseudonym “Satoshi Nakamoto”, whose underlying identity has
            still not been verified. The Bitcoin protocol uses an SHA-256d-based
            Proof-of-Work (PoW) algorithm to reach network consensus. Its
            network has a target block time of 10 minutes and a maximum supply
            of 21 million tokens, with a decaying token emission rate. To
            prevent fluctuation of the block time, the network's block
            difficulty is re-adjusted through an algorithm based on the past
            2016 block times. With a block size limit capped at 1 megabyte, the
            Bitcoin Protocol has supported both the Lightning Network, a
            second-layer infrastructure for payment channels, and Segregated
            Witness, a soft-fork to increase the number of transactions on a
            block, as solutions to network scalability.
          </p>
        </div>
      </div>
    </div>
  );
}
