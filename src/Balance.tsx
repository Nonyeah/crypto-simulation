import { useState, useRef, useEffect, RefObject } from "react";

export default function Balance() {
  const [coin, setcoin] = useState<string>("ustd");
  const [showcurrency, setshowcurrency] = useState<boolean>(false);
  const [closecurrency, setclosecurrency] = useState<boolean>(false);
  const [navlabeltext, setnavlabeltext] = useState<string>(" ");
  const currencyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showcurrency && !closecurrency) {
      setTimeout(() => {
        currencyRef.current!.style.height = "100%";
      }, 1000);
    } else if (showcurrency && closecurrency) {
      setTimeout(() => {
        currencyRef.current!.style.height = "0";
        setTimeout(() => {
          //currencyRef.current!.remove();
          setshowcurrency(false);
          setclosecurrency(false);
        }, 1500);
      }, 700);
    }
  }, [showcurrency, closecurrency]);

  function tabNav(id: number) {
    const objLabelMatch: TabMenu | undefined = tabMenu.find(
      (topnav) => topnav.id === id
    );
    if (objLabelMatch) {
      setnavlabeltext(objLabelMatch.message);
    }
  }

  //active state
  if (showcurrency && !closecurrency) {
    return (
      <div className="balance-cover">
        <div className="balance-container">
          <h5>Estimated Balance</h5>
          <p className="currency">
            <span className="amount">0.00</span>{" "}
            <span className="coin">{coin}</span>{" "}
            <button type="button"> &#129171;</button>
          </p>
          <p className="currency"> &#8776; £0.00 </p>
          <p className="text">
            Your account does not currently have any assets. Complete identity
            verification in order to make deposits to your account.
          </p>
          <div className="static-buttons">
            {tabMenu.map((title) => (
              <button onClick={() => tabNav(title.id)} key={title.id}>
                {title.label}
              </button>
            ))}
          </div>
          <div className="message-container">{navlabeltext}</div>
        </div>
        <ShowBalance
          setcoin={setcoin}
          currencyRef={currencyRef}
          setshowcurrency={setshowcurrency}
          setclosecurrency={setclosecurrency}
        />
      </div>
    );
  } else if (showcurrency && closecurrency) {
    //prepare to close state

    return (
      <div className="balance-cover">
        <div className="balance-container">
          <h5>Estimated Balance</h5>
          <p className="currency">
            <span className="amount">0.00</span>{" "}
            <span className="coin">{coin}</span>{" "}
            <button type="button"> &#11167;</button>
          </p>
          <p className="currency"> &#8776; £0.00 </p>
          <p>
            Your account does not currently have any assets. Complete identity
            verification in order to make deposits to your account.
          </p>
          <div className="static-buttons">
            {tabMenu.map((title) => (
              <button onClick={() => tabNav(title.id)} key={title.id}>
                {title.label}
              </button>
            ))}
          </div>
          <div className="message-container">{navlabeltext}</div>
        </div>
        <ShowBalance
          setcoin={setcoin}
          currencyRef={currencyRef}
          setshowcurrency={setshowcurrency}
          setclosecurrency={setclosecurrency}
        />
      </div>
    );
  } else {
    //default state

    return (
      <div className="balance-cover">
        <div className="balance-container">
          <h5>Estimated Balance</h5>
          <p className="currency">
            <span className="amount">0.00</span>{" "}
            <span className="coin">{coin}</span>{" "}
            <button onClick={() => setshowcurrency(true)} type="button">
              {" "}
              &#11167;
            </button>
          </p>
          <p className="currency"> &#8776; £0.00 </p>
          <p className="text">
            Your account does not currently have any assets. Complete identity
            verification in order to make deposits to your account.
          </p>
          <div className="static-buttons">
            {tabMenu.map((title) => (
              <button onClick={() => tabNav(title.id)} key={title.id}>
                {title.label}
              </button>
            ))}
          </div>
          <div className="message-container">{navlabeltext}</div>
        </div>
      </div>
    );
  }
}

interface TabMenu {
  id: number;
  label: string;
  message: string;
}

const tabMenu: Array<TabMenu> = [
  {
    id: 0,
    label: "deposit",
    message: "Add your credit/debit card to deposit funds to your account.",
  },

  {
    id: 1,
    label: "widthdraw",
    message:
      "You need to have sufficient funds in your account in order to make a widthdrawl.",
  },

  {
    id: 2,
    label: "Buy Crypto",
    message:
      "You need to add your credit/debit card in order to make a purchase for crypto currency.",
  },
];

interface CryptoCoin {
  id: number;
  name: string;
}

const coinType: Array<CryptoCoin> = [
  { id: 0, name: "btc" },
  { id: 1, name: "usdt" },
  { id: 2, name: "eth" },
  { id: 3, name: "bnb" },
];

interface BalanceCurrency {
  setcoin: (param: string) => void;
  currencyRef: RefObject<HTMLDivElement | null>;
  setshowcurrency: (param: boolean) => void;
  setclosecurrency: (param: boolean) => void;
}

function ShowBalance({
  setcoin,
  currencyRef,
  setshowcurrency,
  setclosecurrency,
}: BalanceCurrency) {
  function coinSelect(coinId: number) {
    const whichCoin: CryptoCoin | undefined = coinType.find(
      (objcoin) => objcoin.id === coinId
    );
    if (whichCoin) {
      setcoin(whichCoin.name);
    }
  }

  const coinArray = coinType.map((coin) => (
    <li key={coin.id}>
      <button onClick={() => coinSelect(coin.id)} type="button">
        {coin.name}
      </button>
    </li>
  ));

  return (
    <div className="select-crypto-container">
      <div ref={currencyRef} className="select-crypto">
        <p
          onClick={() => {
            setshowcurrency(true);
            setclosecurrency(true);
          }}
          className="close"
        >
          {" "}
          &#9932;
        </p>
        <p>Select calculated crypto</p>
        <ul>{coinArray}</ul>
      </div>
    </div>
  );
}
