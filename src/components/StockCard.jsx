const StockCard = ({ stock }) => {
    const gain = ((stock.currentPrice - stock.buyPrice) / stock.buyPrice) * 100;
  
    return (
      <div className="p-4 border rounded shadow">
        <h2 className="font-bold text-lg">{stock.symbol}</h2>
        <p>Shares: {stock.shares}</p>
        <p>Buy Price: ${stock.buyPrice.toFixed(2)}</p>
        <p>Current Price: ${stock.currentPrice.toFixed(2)}</p>
        <p className={gain >= 0 ? "text-green-600" : "text-red-600"}>
          Gain/Loss: {gain.toFixed(2)}%
        </p>
      </div>
    );
  };
  
  export default StockCard;
  