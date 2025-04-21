import { useState, useRef, useEffect, RefObject } from "react";
import fundImage from "./assets/fund.jpg";
import lockImage from "./assets/lock.jpg";

export default function Dashboard() {
  const [showfund, setshowfund] = useState<boolean>(false);
  const [closefund, setclosefund] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current && !closefund) {
      setTimeout(() => {
        divRef.current!.style.height = "100%";
      }, 400);
    } else if (divRef.current && closefund) {
      setTimeout(() => {
        divRef.current!.style.height = "0";
        setTimeout(() => {
          //divRef.current!.remove();
          setclosefund(false);
          setshowfund(false);
        }, 1500);
      }, 400);
    }
  }, [showfund, closefund]);

  if (!showfund && !closefund) {
    //default state
    return (
      <div className="dashboard-container">
        <div className="dashboard-inner-container">
          <p className="dashboard-home">
            <span className="home-icon">&#8962;</span>
            <span className="d-text">Dashboard</span>
          </p>

          <div className="user-details">
            <p>
              <span className="user-icon">&#128100;</span>{" "}
              <span className="u-text">User 345-789T</span>
            </p>
          </div>
        </div>

        <div className="complete-account">
          <h3>Complete your account</h3>
          <table>
            <tbody>
              <tr>
                <td rowSpan={2}>
                  <span className="user-icon">&#128100;</span>
                </td>
                <td>Verify Your Account</td>
              </tr>
              <tr>
                <td className="green">completed</td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <img src={fundImage}  alt="money icon" />
                </td>
                <td>Fund Your Account</td>
              </tr>
              <tr>
                <td
                  className="green not-completed"
                  onClick={() => setshowfund(true)}
                >
                  <button type="button">not completed &gt;</button>
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <img src={lockImage} alt="padlock icon" />
                </td>
                <td>Secure Your Account</td>
              </tr>
              <tr>
                <td className="green">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (showfund && closefund) {
    //prepare to close state
    return (
      <>
        <div className="dashboard-container">
          <div className="dashboard-inner-container">
            <p className="dashboard-home">
              <span className="home-icon">&#8962;</span>
              <span className="d-text">Dashboard</span>
            </p>

            <div className="user-details">
              <p>
                <span className="user-icon">&#128100;</span>{" "}
                <span className="u-text">User 345-789T</span>
              </p>
            </div>
          </div>

          <div className="complete-account">
            <h3>Complete your account</h3>
            <table>
              <tbody>
                <tr>
                  <td rowSpan={2}>
                    <span className="user-icon">&#128100;</span>
                  </td>
                  <td>Verify Your Account</td>
                </tr>
                <tr>
                  <td className="green">completed</td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    <img src={fundImage} alt="money icon" />
                  </td>
                  <td>Fund Your Account</td>
                </tr>
                <tr>
                  <td className="green not-completed">
                    <button type="button">not completed</button>{" "}
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    <img src={lockImage} alt="padlock icon" />
                  </td>
                  <td>Secure Your Account</td>
                </tr>
                <tr>
                  <td className="green">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <FundAccount
          divContainer={divRef}
          setshowfund={setshowfund}
          setclosefund={setclosefund}
        />
      </>
    );
  } else if (showfund && !closefund) {
    //active state
    return (
      <>
        <div className="dashboard-container">
          <div className="dashboard-inner-container">
            <p className="dashboard-home">
              <span className="home-icon">&#8962;</span>
              <span className="d-text">Dashboard</span>
            </p>

            <div className="user-details">
              <p>
                <span className="user-icon">&#128100;</span>{" "}
                <span className="u-text">User 345-789T</span>
              </p>
            </div>
          </div>

          <div className="complete-account">
            <h3>Complete your account</h3>
            <table>
              <tbody>
                <tr>
                  <td rowSpan={2}>
                    <span className="user-icon">&#128100;</span>
                  </td>
                  <td>Verify Your Account</td>
                </tr>
                <tr>
                  <td className="green">completed</td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    <img src={fundImage} alt="money icon" />
                  </td>
                  <td>Fund Your Account</td>
                </tr>
                <tr>
                  <td className="green">
                    <button type="button">not completed</button>{" "}
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2}>
                    <img src={lockImage} alt="padlock icon" />
                  </td>
                  <td>Secure Your Account</td>
                </tr>
                <tr>
                  <td className="green">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <FundAccount
          divContainer={divRef}
          setshowfund={setshowfund}
          setclosefund={setclosefund}
        />
      </>
    );
  }
}

interface FundType {
  id: number;
  name: string;
  text: string;
  action: string;
}

const fundObj: Array<FundType> = [
  {
    id: 0,
    name: "Buy Crypto",
    text: "Deposit flat currencies (e.g. EUR) from your bank account to buy crypto",
    action: "Buy Now",
  },
  {
    id: 1,
    name: "Deposit Crypto",
    text: "If you already have cryto currency, you can \
    use deposit function to transfer them from another trading platform \
    or walllet to your CryptoKnight account",
    action: "Deposit Now",
  },

  {
    id: 2,
    name: "Receive Crypto",
    text: "Receive crypto from other users via CryptoKnight pay",
    action: "Receive Now",
  },
];

interface fundAccountObj {
  divContainer: RefObject<HTMLDivElement | null>;
  setshowfund: (param: boolean) => void;
  setclosefund: (param: boolean) => void;
}

function FundAccount({
  divContainer,
  setshowfund,
  setclosefund,
}: fundAccountObj) {
  const [details, setDetails] = useState<FundType>({
    id: 0,
    name: "Buy Crypto",
    text: "Deposit flat currencies (e.g. EUR) from your bank account to buy crypto",
    action: "Buy Now",
  });

  function changeTab(tabId: number) {
    const tabInfoObj = fundObj.find((tabinfo) => tabinfo.id === tabId);
    if (tabInfoObj) {
      setDetails({ ...tabInfoObj });
    }
  }

  const fundList = fundObj.map((fundtype) => {
    return (
      <li key={fundtype.id}>
        <button
          type="button"
          className="fund-tab-buttons"
          onClick={() => {
            changeTab(fundtype.id);
          }}
        >
          {fundtype.name}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="outer-fund-cover">
        <div ref={divContainer} className="outer-fund-container">
          <div className="fund-account">
            <p
              onClick={() => {
                setshowfund(true);
                setclosefund(true);
              }}
              className="close"
            >
              &#9932;
            </p>
            <h3>fund your account</h3>
            <ul>{fundList}</ul>
          </div>
          <div className="fund-text">{details.text}</div>

          <p className="learn-more">
            <a href="#" onClick={(e) => e.preventDefault()}>
              Learn More &gt;
            </a>
          </p>
          <p className="action-button">
            <button>{details.action}</button>
          </p>
        </div>
      </div>
    </>
  );
}
