import { Routes, Route } from "react-router-dom";
import "../Styles/App.css";
import Layout from "../Layout/Layout";
import Dashboard from "../Routes/Dashboard";
import Home from "../Routes/Home";
import Balance from "../Routes/Balance";
import Markets from "../Routes/Markets";
import Error404 from "../Routes/404Error";
import Doge from "../Routes/Doge";
import Bnb from "../Routes/Bnb";
import Btc from "../Routes/Btc";
import Eth from "../Routes/Eth";
import Xrp from "../Routes/Xrp";
import Sol from "../Routes/Sol";

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
        <Route path="/Bnb" element={<Bnb />} />
        <Route path="/Btc" element={<Btc />} />
        <Route path="/Eth" element={<Eth />} />
        <Route path="/Doge" element={<Doge />} />
        <Route path="/Xrp" element={<Xrp />} />
        <Route path="/Sol" element={<Sol />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
