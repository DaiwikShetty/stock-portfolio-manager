import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function PortfolioSummary() {
  const { portfolio, prices } = useContext(PortfolioContext);

  const totalPortfolioValue = portfolio.reduce((total, stock) => {
    const price = prices[stock.symbol] || 0;
    return total + stock.quantity * price;
  }, 0);

  const riskLevel = (() => {
    if (portfolio.length === 0) return "N/A";
    const riskyStocks = ["TSLA", "GME", "AMC", "BBBY"];
    const riskyCount = portfolio.filter((s) => riskyStocks.includes(s.symbol)).length;
    const riskRatio = riskyCount / portfolio.length;
    if (riskRatio > 0.5) return "High";
    if (riskRatio > 0.2) return "Moderate";
    return "Low";
  })();

  return (
    <div className="portfolio-summary">
      <h2>Your Portfolio</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Current Price</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((stock) => {
            const currentPrice = prices[stock.symbol] || 0;
            const totalValue = stock.quantity * currentPrice;

            return (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                <td>{stock.quantity}</td>
                <td>${currentPrice.toFixed(2)}</td>
                <td>${totalValue.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3 className="total-value">Total Portfolio Value: ${totalPortfolioValue.toFixed(2)}</h3>
      <p className="risk-tag">Risk Level: <strong>{riskLevel}</strong></p>
    </div>
  );
}

export default PortfolioSummary;
