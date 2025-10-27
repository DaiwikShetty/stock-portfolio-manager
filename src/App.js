import { useContext, useEffect } from "react";
import { PortfolioContext } from "./context/PortfolioContext";
import { fetchPrice } from "./services/stockAPI";
import AddStockForm from "./components/AddStockForm";
import PortfolioSummary from "./components/PortfolioSummary";
import PortfolioChart from "./components/PortfolioChart";
import PerformanceTrends from "./components/PerformanceTrends";
import DiversificationScore from "./components/DiversificationScore";

function App() {
  const { portfolio, setPrices } = useContext(PortfolioContext);

  useEffect(() => {
    const updatePrices = async () => {
      const updated = {};
      for (let stock of portfolio) {
        const price = await fetchPrice(stock.symbol);
        updated[stock.symbol] = price;
      }
      setPrices(updated);
    };

    updatePrices();
    const interval = setInterval(updatePrices, 10000);
    return () => clearInterval(interval);
  }, [portfolio]);

  return (
    <div className="app-container">
      <h1>📈 Stock Portfolio Manager</h1>
      <AddStockForm />
      <PortfolioSummary />
      <PortfolioChart />
      <PerformanceTrends />
      <DiversificationScore />
    </div>
  );
}

export default App;