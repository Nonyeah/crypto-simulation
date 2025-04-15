import { useState, ReactNode, useEffect } from "react";
import bitcoin from "./assets/bitcoin.jpg";
import bnb from "./assets/bnb.jpg";
import doge from "./assets/dogecoin.jpg";
import ethereum from "./assets/ethereum.jpg";
import solana from "./assets/solana.jpg";
import xrp from "./assets/xrp.jpg";
import { NavLink } from "react-router-dom";

interface CoinData {
  id: number;
  name: any;
  price: number;
  change: number;
  src: string;
}

interface Data {
  id: number;
  name: string;
  content: string | Array<CoinData>;
}

const data: Array<Data> = [
  {
    id: 0,
    name: "holding",
    content: "Holding coin prices will be displayed here",
  },
  {
    id: 1,
    name: "most traded",
    content: [
      { id: 4, name: "xrp", price: 1.59, change: -1.02, src: xrp },
      { id: 0, name: "bnb", price: 454.8, change: -2.86, src: bnb },
      { id: 2, name: "eth", price: 1382.23, change: -6.45, src: ethereum },
      { id: 3, name: "sol", price: 89.42, change: -11.72, src: solana },
      { id: 5, name: "doge", price: 0.1228114, change: 7.64, src: doge },
      { id: 1, name: "btc", price: 63494.86, change: -4.96, src: bitcoin },
    ],
  },
  { id: 2, name: "favourite", content: "No records can be found" },
];

interface LabelObj {
  id: number;
  name: string;
}

const navLabels: LabelObj[] = [
  { id: 0, name: "holding" },
  { id: 1, name: "most traded" },
  { id: 2, name: "favourite" },
];

type TableHeader = {
  id: number;
  label: string;
};

//create table headers
const tableHeader: Array<TableHeader> = [
  { id: 0, label: "coin" },
  { id: 1, label: "name" },
  { id: 2, label: "price" },
  { id: 3, label: "change" },
];

function CryptoTable({
  contentArray,
  sortAscending,
  sortDescending,
}: {
  contentArray: Array<CoinData> | string;
  sortAscending: (numId: number) => void;
  sortDescending: (numId: number) => void;
}) {
  const header: ReactNode = tableHeader.map((headercell) => {
    return (
      <th key={headercell.id}>
        <span>{headercell.label}</span>
        <span
          className="arrow-up"
          onClick={() => sortAscending(headercell.id)}
        ></span>
        <span
          className="arrow-down"
          onClick={() => sortDescending(headercell.id)}
        ></span>
      </th>
    );
  });

  if (typeof contentArray === "object") {
    const outputTable: ReactNode = contentArray.map((cryptocoin) => (
      <tr key={cryptocoin.id}>
        <td>
          <NavLink to={`/${cryptocoin.name}`}>
            <img src={`${cryptocoin.src}`} />
          </NavLink>
        </td>
        <td>{cryptocoin.name}</td>
        <td>{`£${cryptocoin.price}`}</td>
        <td>{`${cryptocoin.change}%`}</td>
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody>{outputTable}</tbody>
      </table>
    );
  } else {
    return (
      <table>
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody className="string-content">
          <tr>
            <td colSpan={4} className="string-only">
              {" "}
              <p>{contentArray}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default function Markets() {
  const [cryptodata, setcryptodata] = useState<string | Array<CoinData>>(
    data[1].content
  );
  const [ispositive, setispositive] = useState<boolean>(false);

  useEffect(() => {
    let timerId: number;
    if (typeof cryptodata === "object") {
      timerId = setInterval(() => {
        randomPriceChange(cryptodata, setcryptodata);
      }, 3000);
    }
    return () => clearInterval(timerId);
  }, [cryptodata]);

  function randomPriceChange(
    coinData: Array<CoinData>,
    setcryptodata: (param: Array<CoinData>) => void
  ) {
    if (Array.isArray(coinData) && ispositive) {
      const modifiedPriceArray = coinData.map((obj) => {
        const randomNumber = Number(Math.random().toFixed(4));
        const oldPrice = Number(obj.price.toFixed(4));
        let newPrice = oldPrice + randomNumber;
        newPrice = +newPrice.toFixed(4);
        let percentChange = ((newPrice - oldPrice) / oldPrice) * 100;
        percentChange = +percentChange.toFixed(4);
        return { ...obj, price: newPrice, change: percentChange };
      });

      setcryptodata(modifiedPriceArray);
      setispositive(!ispositive);
    } else if (Array.isArray(coinData) && !ispositive) {
      const modifiedPriceArray = coinData.map((obj) => {
        const randomNumber = Number(Math.random().toFixed(4));
        const oldPrice = Number(obj.price.toFixed(4));
        let newPrice = oldPrice - randomNumber;
        newPrice =
          +newPrice.toFixed(4) < 0
            ? +newPrice.toFixed(4) * -1
            : +newPrice.toFixed(4);

        let percentChange = ((newPrice - oldPrice) / oldPrice) * 100;
        percentChange = +percentChange.toFixed(4);
        return { ...obj, price: newPrice, change: percentChange };
      });
      setcryptodata(modifiedPriceArray);
      setispositive(!ispositive);
    }
  }

  function sortAscending(id: number) {
    const headerObjectRef: TableHeader | undefined = tableHeader.find(
      (elem) => elem.id === id
    );
    if (headerObjectRef?.label === "coin") return;

    if (Array.isArray(cryptodata)) {
      if (headerObjectRef && headerObjectRef.label === "name") {
        const copyStateArray = [...cryptodata];
        const sortedArray = copyStateArray.sort((categoryA, categoryB) => {
          if (categoryA.name < categoryB.name) return -1;
          if (categoryA.name > categoryB.name) return 1;
          return 0;
        });
        setcryptodata(sortedArray);
      } else if (headerObjectRef && headerObjectRef.label === "price") {
        const copyStateArray = [...cryptodata];
        const sortedArray = copyStateArray.sort(
          (categoryA, categoryB) => categoryA.price - categoryB.price
        );
        setcryptodata(sortedArray);
      } else {
        const copyStateArray = [...cryptodata];
        const sortedArray = copyStateArray.sort(
          (categoryA, categoryB) => categoryA.change - categoryB.change
        );
        setcryptodata(sortedArray);
      }
    }
  }

  function sortDescending(id: number) {
    const headerObjectRef: TableHeader | undefined = tableHeader.find(
      (elem) => elem.id === id
    );
    if (headerObjectRef?.label === "coin") return;

    if (Array.isArray(cryptodata)) {
      if (headerObjectRef && headerObjectRef.label === "name") {
        const copyStateArray = [...cryptodata];
        const sortedArray = copyStateArray.sort((categoryA, categoryB) => {
          if (categoryA.name < categoryB.name) return 1;
          if (categoryA.name > categoryB.name) return -1;
          return 0;
        });
        setcryptodata(sortedArray);
      } else if (headerObjectRef && headerObjectRef.label === "price") {
        const copyStateArray = [...cryptodata];
        const sortedArray = copyStateArray.sort(
          (categoryA, categoryB) => categoryB.price - categoryA.price
        );
        setcryptodata(sortedArray);
      } else {
        const copyStateArray = [...cryptodata];
        const sortedArray = copyStateArray.sort(
          (categoryA, categoryB) => categoryB.change - categoryA.change
        );
        setcryptodata(sortedArray);
      }
    }
  }

  const labelArray = navLabels.map((label) => (
    <li key={label.id}>
      <button
        type="button"
        onClick={() => {
          displayTable(label.id);
        }}
      >
        {label.name}
      </button>
    </li>
  ));

  const displayTable = (navlabelId: number) => {
    const buttonSelected = data.find((button) => button.id === navlabelId);
    if (buttonSelected) setcryptodata(buttonSelected.content);
  };

  return (
    <div className="markets-container">
      <h4>Markets</h4>
      <ul className="buttons-container">{labelArray}</ul>
      <div className="markets-content">
        {" "}
        <CryptoTable
          contentArray={cryptodata}
          sortAscending={sortAscending}
          sortDescending={sortDescending}
        />
      </div>
    </div>
  );
}
