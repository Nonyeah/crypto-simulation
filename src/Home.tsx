import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Home({ children }: Props) {
  return <div className="container">{children}</div>;
}
