import { ReactNode, useState } from "react";
import LineChart from "./LineChartBnb";
import { useNavigate } from "react-router-dom";
import MiniChartBnb from "./MiniChartBnb";

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

export default function Bnb() {
  const navigate = useNavigate();

  const navlist: ReactNode = mainTopNav.map((label) => (
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
            <MiniChartBnb />
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
          <p>0.000 BNB</p>
        </section>

        <section>
          <h4>Sum Buy Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Buy Price</h4>
          <p>0.000 USTD/BNB</p>
        </section>

        <section>
          <h4>Latest Position Value</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="middle-box">
        <section>
          <h4>Sum Sell Amount</h4>
          <p>0.000 BNB</p>
        </section>

        <section>
          <h4>Sum Sell Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Sell Price</h4>
          <p>0.000 USTD/BNB</p>
        </section>

        <section>
          <h4>Realised PNL</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="right-box">
        <section>
          <h4>Current Position</h4>
          <p>0.000 BNB</p>
        </section>

        <section>
          <h4>Total Position Cost</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Position Price</h4>
          <p>0.000 USTD/BNB</p>
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
    text: "The price at which the first asset was issued",
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
      <h2>BNB</h2>
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
            <li>No.5</li>
            <li>$82,005.85M</li>
            <li>3.136%</li>
            <li>142,470,828 BNB</li>
            <li>142,470,828 BNB</li>
            <li>2017-07-08</li>
            <li>$0.15</li>
            <li>$793.3505040971822</li>
            <li>$0.09610939770936966</li>
          </ul>
        </div>
        <div className="right-container">
          <h3>Intro</h3>
          <p>
            BNB is a cryptocurrency that can be used to trade and pay fees on
            the Binance cryptocurrency exchange. BNB is also the cryptocurrency
            coin that powers the BNB Chain ecosystem. As one of the world's most
            popular utility tokens, BNB is useful to users in a wide range of
            applications and use cases. BNB was launched through an Initial Coin
            Offering (or ICO) that took place from June 26th to July 3rd, 2017 -
            11 days before the Binance Exchange opened for trading. The issue
            price was 1 ETH for 2,700 BNB or 1 BTC for 20,000 BNB. Although BNB
            was launched through an ICO, BNB does not provide users with a claim
            on Binance profits and does not represent an investment in Binance.
            With various applications both within the BNB Chain ecosystem and
            beyond, BNB serves numerous purposes. Originally launched as an
            ERC-20 token on the Ethereum blockchain, BNB has now migrated to the
            main BNB Chain. Although the initial total supply was set at 200
            million coins, the supply is gradually decreasing as a result of
            frequent coin burns. The current price of BNB is updated and
            available in real-time on Binance.
          </p>
        </div>
      </div>
    </div>
  );
}
