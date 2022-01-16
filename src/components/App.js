import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

const url = "http://localhost:3001/stocks"

function App() {
  const [stocks, setStocks] = useState([])
  useEffect(()=> {
    fetch(url)
    .then(r=> r.json())
    .then(r=> setStocks(r))
  }, [])

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks}/>
    </div>
  );
}

export default App;
