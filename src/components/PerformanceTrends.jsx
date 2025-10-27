import { useContext } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { PortfolioContext } from "../context/PortfolioContext";

function PerformanceTrends() {
  const { portfolio, prices } = useContext(PortfolioContext);

  // Dummy trend data for demonstration (you can update with historical API later)
  const data = portfolio.map((stock) => ({
    name: stock.symbol,
    value: stock.quantity * (prices[stock.symbol] || 0),
  }));

  return (
    <div className="trends-container">
      <h3>Performance Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#00e0ff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceTrends;
