import { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [prices, setPrices] = useState({});

  return (
    <PortfolioContext.Provider value={{ portfolio, setPortfolio, prices, setPrices }}>
      {children}
    </PortfolioContext.Provider>
  );
};
