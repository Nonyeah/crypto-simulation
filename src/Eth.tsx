import { useState, ReactNode } from "react";
import LineChart from "./LineChartEth";
import { useNavigate } from "react-router-dom";
import MiniChartEth from "./MiniChartEth";

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

export default function Eth() {
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

  function selectTab(numId: number) {
    const category: ChartHouseNav | undefined = chartHouseNav.find(
      (category) => category.id === numId
    );
    if (category) {
      setinfodisplay(category.name.toLowerCase());
    }
  }

  const topnav: ReactNode = chartHouseNav.map((label) => (
    <li key={label.id}>
      <button onClick={() => selectTab(label.id)}>{label.name}</button>
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
            <MiniChartEth />
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
          <p>0.000 ETH</p>
        </section>

        <section>
          <h4>Sum Buy Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Buy Price</h4>
          <p>0.000 USTD/ETH</p>
        </section>

        <section>
          <h4>Latest Position Value</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="middle-box">
        <section>
          <h4>Sum Sell Amount</h4>
          <p>0.000 ETH</p>
        </section>

        <section>
          <h4>Sum Sell Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Sell Price</h4>
          <p>0.000 USTD/ETH</p>
        </section>

        <section>
          <h4>Realised PNL</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="right-box">
        <section>
          <h4>Current Position</h4>
          <p>0.000 ETH</p>
        </section>

        <section>
          <h4>Total Position Cost</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Position Price</h4>
          <p>0.000 USTD/ETH</p>
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
  { id: 5, label: "Issue Date", text: "Asset initial offering date" },

  {
    id: 6,
    label: "Issue Price",
    text: "The price at which the asset was first issued",
  },

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
      <h2>ETH</h2>
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
            <li>No.2</li>
            <li>$190,509.95M</li>
            <li>6.8612%</li>
            <li>120,708,156 ETH</li>
            <li>120,708,156 ETH</li>
            <li>2014-07-24</li>
            <li>$0.308</li>
            <li>$4,891.704697551414</li>
            <li>$0.4208970069885254</li>
          </ul>
        </div>
        <div className="right-container">
          <h3>Intro</h3>
          <p>
            Ethereum was created in 2015 by Vitalik Buterin, a Russian-Canadian
            programmer. The platform is based on the principle of
            decentralization, which means that it is not controlled by any
            single entity. Ethereum allows users to build and deploy software,
            commonly in the form of DApps, which are then powered by a global
            distributed network of computers running Ethereum. The network is
            decentralized, making it highly resistant to any form of censorship
            or downtime. In addition, Ethereum is an open-source blockchain
            platform that runs on the usage of its native currency, called Ether
            or ETH. All network transaction fees, or gas fees, are paid in ETH.
            ETH specifically used by the Ethereum blockchain to pay for
            transactions, and is responsible for powering just about everything
            that occurs on the network. The Ethereum network can be used by
            anybody to create and run smart contracts, which are software
            programs that run autonomously, without user intervention.
            Ethereum’s growth can be attributed in part to its smart contract
            capability, which has enabled a growing ecosystem of DApps,
            non-fungible tokens (NFTs) and more. Ethereum completed its switch
            from a PoW to a PoS consensus mechanism in September 2022. In a PoS
            consensus mechanism, users can stake 32 ETH to validate transactions
            rather than solving computational puzzles using mining equipment,
            making the process more energy-efficient. The Shanghai upgrade
            brought in a range of technical enhancements to the Ethereum
            platform. One of the key features introduced is the ability for
            users to access and unstake their Ethereum tokens that were
            previously locked in a smart contract as validators on the Beacon
            Chain.
          </p>
        </div>
      </div>
    </div>
  );
}
