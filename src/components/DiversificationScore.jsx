import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function DiversificationScore() {
  const { portfolio } = useContext(PortfolioContext);

  const symbols = portfolio.map((s) => s.symbol);
  const uniqueCount = new Set(symbols).size;
  const totalCount = symbols.length;

  let score = 0;
  if (totalCount === 0) {
    score = 0;
  } else {
    score = Math.min(100, Math.round((uniqueCount / totalCount) * 100));
  }

  const label =
    score > 80 ? "Excellent" :
    score > 50 ? "Good" :
    score > 30 ? "Average" : "Low";

  return (
    <div className="diversification-score">
      <h3>Diversification Score</h3>
      <p>Score: <strong>{score}/100</strong></p>
      <p>Status: <strong>{label}</strong></p>
    </div>
  );
}

export default DiversificationScore;
