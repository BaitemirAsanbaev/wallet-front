import { useEffect, useState } from "react";
import ActionModal from "../components/ActionModal/ActionModal";
import ActionButtons from "../components/ActiosButtons/ActionButtons";
import Backdrop from "../components/Backdrop/Backdrop";
import Balance from "../modules/Balance/Balance";
import Widget from "../modules/Balance/Widget";
import Budget from "../modules/Budget/Budget";
import axios from "axios";
import api from "../api";
import BalanceModal from "../components/BalanceModal/BalanceModal";
import Button from "../components/Button/Button";

const Home = () => {
  const [opened, setOpened] = useState(false);
  const [which, setWhich] = useState(0);
  const [openedB, setOpenedB] = useState(false);
  const [typeB, setTypeB] = useState("");
  const [balance, setBalances] = useState([]);
  const [incomeTypes, setIncomeTypes] = useState([]);
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [type, setType] = useState("");
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
  function getExpenseTypes() {
    axios.get(api + "balances/expense/types").then((res) => {
      setExpenseTypes(res.data);
    });
  }
  useEffect(() => {
    getBalances();
    getIncomeTypes();
    getExpenseTypes();
  }, [balance]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: "10px",
        width: "70vw",
        padding: "30px",
      }}
    >
      {opened || openedB ? (
        <Backdrop
          close={() => {
            setOpened(false);
            setOpenedB(false);
          }}
        />
      ) : null}
      <BalanceModal
        opened={openedB}
        id={which}
        type={typeB}
        close={() => setOpenedB(false)}
      />
      <ActionModal
        type={type}
        close={() => setOpened(false)}
        opened={opened}
        incomeTypes={incomeTypes}
        expenseTypes={expenseTypes}
      />
      <Widget title={"Balances"}>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <div
            style={
              balance.length < 1
                ? {
                    height: "75vh",
                    display: "flex",
                    alignItems: "center",
                  }
                : null
            }
          >
            <Button
              event={() => {
                setOpenedB(true);
                setTypeB("create");
              }}
            >
              Create new balance
            </Button>
          </div>
          {balance.map((item) => {
            return (
              <Balance
                key={item.id}
                open={() => {
                  setTypeB("update");
                  setWhich(item.id);
                  setOpenedB(true);
                }}
                data={item}
              />
            );
          })}
        </div>
      </Widget>
      <Widget title={"Budget"}>
        <Budget />
      </Widget>
      <Widget title={"Actions"}>
        <ActionButtons
          open={() => setOpened(true)}
          income={() => setType("income")}
          expense={() => setType("expense")}
          transaction={() => setType("transaction")}
        />
      </Widget>
    </div>
  );
};

export default Home;
