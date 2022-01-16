import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, sorter, onBought}) {

  function sortAlpha(x, y){
    if (x.name < y.name){return -1;}
    if (x.name > y.name){return 1;}
    return 0
  }
  function sortPrice(x, y){
    if (x.price < y.price){return 1;}
    if (x.price > y.price){return -1;}
    return 0
  }

  console.log(stocks, sorter)
  if (sorter==="Alphabetically") {
    stocks.sort(sortAlpha)}
  if (sorter==="Price"){
    stocks.sort(sortPrice)
  }

  console.log(stocks)
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => (
        <Stock onClick={() => onBought(stock)} key={stock.name} stock={stock} />
      ))}
    </div>
  );
}

export default StockContainer;

