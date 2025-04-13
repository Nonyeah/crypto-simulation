import { useState, ReactNode } from "react";

interface MainTopNav {
  id: number;
  "label name": string;
  content: string[];
}

const mainTopNav: MainTopNav[] = [
  {
    id: 0,
    "label name": "buy crypto",
    content: ["buy crypto via bank card", "buy crypto via P2P", "buy Nft's"],
  },
  { id: 1, "label name": "markets", content: ["latest market trends"] },
  {
    id: 2,
    "label name": "trade",
    content: ["convert", "spot exchange", "margin exchange", "trading bots"],
  },
  {
    id: 3,
    "label name": "support",
    content: [
      "submit live chat",
      "support centre",
      "trading fees",
      "trading rule",
    ],
  },
];



export default function Bnb() {
  const [hoverpanel, sethoverpanel] = useState<null | ReactNode>(null);
  const [idmatch, setidmatch] = useState<number>(10);

  function showInnerList(id: number) {
    const contentRef: MainTopNav | undefined = mainTopNav.find(
      (content) => content.id === id
    );
    let hiddenList = contentRef!.content.map((listItem) => (
      <li key={listItem}>{listItem}</li>
    ));
    setidmatch(id);
    sethoverpanel(hiddenList);
  }

  const navlist = mainTopNav.map((label) => (
    <li
      key={label.id}
      onMouseOver={() => showInnerList(label.id)}
      onMouseOut={() => setidmatch(10)}
    >
      {label["label name"]}
      <ul
        className={`innerlist ${
          idmatch === label.id ? "showinner" : "hideinner"
        }`}
      >
        {hoverpanel}
      </ul>
    </li>
  ));
  return (
    <div className="bnb-container">
      <div className="bnb-topnav">
        <ul>{navlist}</ul>
      </div>
    </div>
  );
}






/*function MobileTabMenu() {
    const [isOpen, setIsOpen] = useState<IsOpenState>({
      id: 10,
      istabopen: false,
    });
  
    function displayTab(buttonId: number) {
      if (!isOpen.istabopen) {
        setIsOpen({ id: buttonId, istabopen: true });
      } else {
        setIsOpen({ id: buttonId, istabopen: false });
      }
    }
  
    const footerMenu = bottomNav.map((navButton) => {
      return (
        <div className="bottomnav" key={navButton.id}>
          <button
            type="button"
            onClick={() => {
              displayTab(navButton.id);
            }}
          >
            <span>{navButton.tabName}</span>
          </button>
          <div
            className={
              isOpen.id === navButton.id && isOpen.istabopen
                ? "divshow"
                : "divhide"
            }
          >
            <p>
              <ul>
                {navButton.links.map((link) => (
                  <li key={navButton.id}>{link}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      );
    });
  
    return <div className="footermenu">{footerMenu}</div>;
  } */

 
 