import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onSold}) {
  if (stocks){
    return (
      <div>
        <h2>My Portfolio</h2>
        {stocks.map(stock => (
          <Stock onClick={() => onSold(stock)} key={stock.ticker} stock={stock} />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
