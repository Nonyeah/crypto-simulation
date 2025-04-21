import { useState, ReactNode } from "react";
import LineChart from "./LineChartDoge";
import { useNavigate } from "react-router-dom";
import MiniChartDoge from "./MiniChartDoge";

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

export default function Doge() {
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
            <MiniChartDoge />
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
          <p>0.000 Doge</p>
        </section>

        <section>
          <h4>Sum Buy Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Buy Price</h4>
          <p>0.000 USTD/Doge</p>
        </section>

        <section>
          <h4>Latest Position Value</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="middle-box">
        <section>
          <h4>Sum Sell Amount</h4>
          <p>0.000 Doge</p>
        </section>

        <section>
          <h4>Sum Sell Total</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Sell Price</h4>
          <p>0.000 USTD/Doge</p>
        </section>

        <section>
          <h4>Realised PNL</h4>
          <p>0.000 USTD</p>
        </section>
      </div>
      <div className="right-box">
        <section>
          <h4>Current Position</h4>
          <p>0.000 Doge</p>
        </section>

        <section>
          <h4>Total Position Cost</h4>
          <p>0.000 USDT</p>
        </section>

        <section>
          <h4>Average Position Price</h4>
          <p>0.000 USTD/Doge</p>
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
    label: "Historical High",
    text: "The highest price this asset has reached in its \
        history",
  },
  {
    id: 7,
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
      <h2>Doge</h2>
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
            <li>No.8</li>
            <li>$23,517.71M</li>
            <li>0.847%</li>
            <li>148,948,826,383 DOGE</li>
            <li>148,948,826,383 DOGE</li>
            <li>2013-12-12</li>
            <li>$0.7375666</li>
            <li>$0.000085474399384111</li>
          </ul>
        </div>
        <div className="right-container">
          <h3>Intro</h3>
          <p>
            Dogecoin (DOGE) is a novelty cryptocurrency originally launched as a
            “memecoin” within the cryptocurrency community. Over time, however,
            Dogecoin has grown into a large blockchain network and is one of the
            most popular altcoins available in the market. There is also a
            serious basis and reason for the creation and development of
            Dogecoin. Co-founders, Jackson Palmer and Billy Markus, two software
            engineers by professional background and experience, wanted to make
            cryptocurrency accessible to individuals outside of Bitcoin. It was
            expressed by the founders that the oversaturation and difficulty in
            mining Bitcoin from the time of its creation to the start of
            Dogecoin, made it difficult for the common person to participate in
            the mining process. This was because of limited resources as well as
            technological experience. Dogecoin was envisioned as an entry for
            the less experienced to become involved in the crypto industry. The
            launch of Bitcoin in 2009 catalyzed the creation and launch of many
            different cryptocurrencies, each offering different use cases and
            functionality. Dogecoin, however, offers no specific use cases —
            DOGE was a collaborative effort by the crypto community and is now
            listed on most major exchange platforms. Dogecoin was originally
            based on Litecoin and was launched in 2013. Primarily designed to
            provide a light-hearted means of communicating the basic function of
            cryptocurrency to mainstream audiences, Dogecoin is based on the
            “Doge” Shiba Inu meme. DOGE price is updated and available in real
            time on CryptoNight.
          </p>
        </div>
      </div>
    </div>
  );
}
