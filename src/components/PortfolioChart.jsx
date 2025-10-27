import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { PortfolioContext } from "../context/PortfolioContext";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#AA00FF"];

function PortfolioChart() {
  const { portfolio, prices } = useContext(PortfolioContext);

  const data = portfolio.map((stock) => ({
    name: stock.symbol,
    value: stock.quantity * (prices[stock.symbol] || 0),
  }));

  return (
    <div className="chart-container">
      <h3>Portfolio Allocation</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default PortfolioChart;