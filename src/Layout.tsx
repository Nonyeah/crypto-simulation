import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";

interface NavObjects {
  id: number;
  tabName: string;
  links: string[];
}

const bottomNav: NavObjects[] = [
  {
    id: 0,
    tabName: "Company",
    links: ["About Us", "Enquiries", "Careers", "Press"],
  },
  {
    id: 1,
    tabName: "Support",
    links: ["Suport Center", "24/7 Chat Support", "Fees", "Trading Rules"],
  },
  { id: 2, tabName: "Legal", links: ["Terms", "Privacy Notice"] },
  {
    id: 3,
    tabName: "Compliance",
    links: [
      "Risk Warning",
      "Law Enforcement Request",
      "Licences & Registrations",
    ],
  },
  { id: 4, tabName: "Products", links: ["Spot", "OCBS", "Convert", "NFT"] },
];

interface BurgerMenu {
  id: number;
  name: string;
  content: string[] | [];
}

const burgerMenu: BurgerMenu[] = [
  { id: 0, name: "Buy Crypto", content: ["Buy Crypto via Bank Card"] },
  { id: 1, name: "Markets", content: [] },
  {
    id: 2,
    name: "Trade",
    content: ["Convert", "Spot Exchange", "Margin Exchange", "Trading Bots"],
  },
  { id: 3, name: "Earn", content: ["Launch Platform", "Auto Invest"] },
  {
    id: 4,
    name: "Support",
    content: [
      "Submit Live Chat",
      "Support Centre",
      "Trading Fees",
      "Trading Fees",
      "Trading Rule",
    ],
  },
  { id: 5, name: "24/7 Chat Support", content: [] },
  { id: 6, name: "Download", content: [] },
  { id: 7, name: "GBP", content: [] },
];

function CreateList({ id, name, content }: BurgerMenu) {
  const [objId, setobjId] = useState<number>(10);

  function displayInnerList(id: number) {
    const objRef: BurgerMenu | undefined = burgerMenu.find(
      (obj) => obj.id === id
    );
    if (objRef) {
      if (objId === id) {
        setobjId(10);
      } else {
        setobjId(id);
      }
    }
  }

  return (
    <li onClick={() => displayInnerList(id)} className="outer-list" key={id}>
      {name}
      <ul className={`hidden-list ${objId === id ? "show" : "hide"}`}>
        {content.map((innerlist) => (
          <li>{innerlist}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Layout() {
  const [showmenu, setshowmenu] = useState<boolean>(false);
  const domRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (showmenu) {
      setTimeout(() => {
        domRef.current!.style.width = "100%";
        domRef.current!.style.height = "auto";
      }, 1000);
    } else {
      setTimeout(() => {
        domRef.current!.style.width = "0";
        domRef.current!.style.height = "auto";
      }, 1000);
    }
  }, [showmenu]);

  const burgerNav = burgerMenu.map((category) => (
    <CreateList
      id={category.id}
      name={category.name}
      content={category.content}
    />
  ));

  function showMenu() {
    setshowmenu(!showmenu);
  }

  return (
    <>
      <div className="topnav">
        <span className="title">CryptoNight</span>
        <p>
          <span>&#128100;</span>
          <span onClick={showMenu} className="burger-tab">
            &#9776;
          </span>
        </p>
        <div ref={domRef} className="burger-menu">
          <ul>{burgerNav}</ul>
        </div>
      </div>
      <Outlet />
      <div className="footermenu">
        {bottomNav.map((tabsection) => {
          return (
            <NewTabMenu
              id={tabsection.id}
              tabName={tabsection.tabName}
              links={tabsection.links}
            />
          );
        })}
      </div>
    </>
  );
}

function NewTabMenu({ id, tabName, links }: NavObjects) {
  const [isOpen, setIsOpen] = useState(false);

  function displayTab() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div key={id} className="bottomnav">
      <button type="button" onClick={displayTab}>
        <span>{tabName}</span>
      </button>
      <div className={isOpen ? "divshow" : "divhide"}>
        <ul>
          {links.map((link) => (
            <li>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/*function NewTabMenu({ id, tabName, links }: NavObjects) {
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

  return (
    <div key={id} className="bottomnav">
      <button type="button" onClick={() => displayTab(id)}>
        <span>{tabName}</span>
      </button>
      <div
        className={isOpen.id === id && isOpen.istabopen ? "divshow" : "divhide"}
      >
        <p>
          <ul>
            {links.map((link) => (
              <li key={id}>{link}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
} */
