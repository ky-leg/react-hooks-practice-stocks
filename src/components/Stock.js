import React from "react";

function Stock({stock, onClick}) {

  const {name, price, ticker} = stock

  return (
    <div>
      <div 
      onClick={onClick}
      className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
