
 export interface MainTopNav {
 id: number;
    labelName: string;
    content: string[];
  }
  
 export  const mainTopNav: MainTopNav[] = [
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
  