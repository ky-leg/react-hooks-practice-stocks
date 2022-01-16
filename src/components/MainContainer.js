import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks}) {
  // const [displayStocks, setDisplayStocks] = useState(stocks)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("Alphabetically")
  const [botStocks, setBotStocks] = useState([])

  const displayStocks = stocks.filter(stock => {
    if (!search){
      return stock
    }
    else return stock.type === search 
  })
  
  function onBought(stock){
    if (!botStocks.find(botStock => botStock === stock)){
      setBotStocks([...botStocks, stock])
    }
    
  }

  function onSold(stock){setBotStocks(
    botStocks.filter(botStock =>
      {return botStock!==stock}
    )
  )   
  }
  

  return (
    <div>
      <SearchBar onSearch={setSearch} setSort={setSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer sorter={sort} stocks={displayStocks} search= {search} onBought={onBought}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={botStocks} onSold={onSold}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
