import { MainTopNav } from "./TopNavData";
import { useState } from "react";

export default function DisplayListBlock({
  id,
  labelName,
  content,
}: MainTopNav) {
  const [showpanel, setshowpanel] = useState<boolean>(false);
  return (
    <li className="main-top-list"
      onMouseOver={() => setshowpanel(true)}
      onMouseOut={() => setshowpanel(false)}
      key={id}
    >
      {labelName} 
      <ul className={`innerlist ${showpanel ? "showinner" : "hideinner"}`}>
          {content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        
      </ul>
    </li>
  );
}
