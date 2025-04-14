import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Balance from "./Balance";
import Markets from "./Markets";
import Error404 from "./404Error";
import Doge from "./Doge";
import Bnb from "./Bnb";
import Btc from "./Btc";
import Eth from "./Eth";
import Xrp from "./Xrp";
import Sol from "./Sol";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home>
              <Dashboard />
              <Balance />
              <Markets />
            </Home>
          }
        />
        <Route path="Bnb" element={<Bnb />} />
        <Route path="Btc" element={<Btc />} />
        <Route path="Eth" element={<Eth />} />
        <Route path="Doge" element={<Doge />} />
        <Route path="Xrp" element={<Xrp />} />
        <Route path="Sol" element={<Sol />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
