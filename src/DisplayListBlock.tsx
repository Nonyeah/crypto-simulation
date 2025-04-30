import { MainTopNav } from "./TopNavData";
import { useState } from "react";

export default function DisplayListBlock({
  id,
  labelName,
  content,
}: MainTopNav) {
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
