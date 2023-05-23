import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Balances from "./pages/Balances";
import Layout from "./components/Layout/Layout";
import Statistics from "./pages/Statistics";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "./api";
import History from "./pages/History";
function App() {
  const [opened, setOpened] = useState(false);
  const [which, setWhich] = useState(0);
  const [openedB, setOpenedB] = useState(false);
  const [openedBg, setOpenedBg] = useState(false);
  const [typeB, setTypeB] = useState("");
  const [balance, setBalances] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomeTypes, setIncomeTypes] = useState([]);
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [type, setType] = useState("");
  const [budget, setBudget] = useState({})
  const [openedT, setOpenedT] = useState(false)
  const [transactions, setTransactions] = useState([])
  function getBalances() {
    axios.get(api + "balances").then((res) => {
      setBalances(res.data);
    });
  }
  function getIncomeTypes() {
    axios.get(api + "balances/income/types").then((res) => {
      setIncomeTypes(res.data);
    });
  }
  function getTransactions(){
    axios.get(api+"balances/transactions").then((res)=>{
      setTransactions(res.data);
    })
  }
  function getExpenseTypes() {
    axios.get(api + "balances/expense/types").then((res) => {
      setExpenseTypes(res.data);
    });
  }
  function getIncomes() {
    axios.get(api + "balances/incomes").then((res) => {
      setIncomes(res.data);
    });
  }
  function getExpenses() {
    axios.get(api + "balances/expenses").then((res) => {
      setExpenses(res.data);
    });
  }
  function getBudget(){
    axios.get(api + "balances/budget").then((res)=>{
      setBudget(res.data);
    })
  }
  useEffect(() => {
    getBalances();
    getIncomeTypes();
    getExpenseTypes();
    getExpenses();
    getIncomes();
    getBudget();
    getTransactions();
  }, []);
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            index={true}
            element={
              <Home
                opened={opened}
                openedB={openedB}
                setOpened={setOpened}
                setOpenedB={setOpenedB}
                setType={setType}
                setTypeB={setTypeB}
                which={which}
                balance={balance}
                typeB={typeB}
                incomeTypes={incomeTypes}
                expenseTypes={expenseTypes}
                type={type}
                setWhich={setWhich}
                openedT={openedT}
                setOpenedT={setOpenedT}
                openedBg={openedBg}
                setOpenedBg={setOpenedBg}
                budget={budget}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/balances"
            element={
              <Balances
                balances={balance}
                setOpenedB={setOpenedB}
                setWhich={setWhich}
                setTypeB={setTypeB}
              />
            }
          />
          <Route
            path="/statistics"
            element={<Statistics
              incomes={incomes}
              expenses={expenses} />}
          />
          <Route
            path="/history"
            element={<History
              incomes={incomes}
              expenses={expenses}
              transactions={transactions}
              balances={balance} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
