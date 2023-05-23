import { useState } from "react";
import HistoryCard from "../components/HistoryCard/HistoryCard";
import HistoryControl from "../components/HistoryControl/HistoryControl";

const History = ({ incomes, expenses, transactions, balances }) => {
    const [showI, setShowI] = useState(true)
    const [showE, setShowE] = useState(true)
    const [showT, setShowT] = useState(true)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "1200px",
        padding: "30px",
      }}
    >
        <h1 style={{margin:"20px 0"}}>History</h1>
        <HistoryControl i={showI} e={showE} t={showT} switchT={()=>setShowT(!showT)} switchE={()=>setShowE(!showE)} switchI={()=>setShowI(!showI)}/>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {showI ? incomes.map((i, id) => {
          return <HistoryCard key={id} type={"income"} data={i} balances={balances} />;
        }) : null}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {showE ? expenses.map((i, id)=>{
            return <HistoryCard key={id} type={"expense"} data={i} balances={balances} />;
        }):null}
        
      </div>
      <div  style={{
          display: "flex",
          flexDirection: "column-reverse",
        }}>
       {showT? transactions.map((i, id) => {
          return (
            <HistoryCard key={id} type={"transaction"} data={i} balances={balances} />
          );
        }):null}
      </div>
    </div>
  );
};

export default History;
