import { useState } from "react";
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

export default function Layout() {
  return (
    <>
      <div className="topnav">
        <span className="title">CryptoNight</span>
        <p>
          <span>&#128100;</span>
          <span>&#9776;</span>
        </p>
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
