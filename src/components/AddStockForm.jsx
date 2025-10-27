import { useState, useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function AddStockForm() {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState(0);
  const { portfolio, setPortfolio } = useContext(PortfolioContext);

  const handleAdd = () => {
    if (!symbol) return;
    setPortfolio([...portfolio, { symbol: symbol.toUpperCase(), quantity: Number(quantity) }]);
    setSymbol("");
    setQuantity(0);
  };

  return (
    <div className="stock-form">
      <input
        type="text"
        placeholder="Stock Symbol (e.g., AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddStockForm;
