import { useEffect, useState } from "react";
import classes from "./ActionModal.module.scss";
import axios from "axios";
import api from "../../api";

const ActionModal = ({ type, close, opened, incomeTypes, expenseTypes, balance }) => {
  const [income, setIncome] = useState(0);
  const [id, setId] = useState(1);
  const [second_id, setSecondId] = useState(2);
  const [typo, setTypo] = useState();
  const [description, setDescription] = useState("");
  const [balances, setBalances] = useState([]);
  let title = type
  title = type.charAt(0).toUpperCase() + type.slice(1)
  function requestIncome() {
    axios.post(
      api +
        `balances/${type}/${id}${
          type === "transaction" ? "/" + second_id : ""
        }`,
      {
        value: income,
        type: typo,
        description: description,
      }
    );
  }
  function getBalances() {
    axios.get(api + "balances").then((res) => {
      setBalances(res.data);
      setId(res.data[0].id)
      setSecondId(res.data[1].id)
    });
  }
  useEffect(() => {
    getBalances();
  }, []);
  return (
    <div
      className={classes.ActionModal}
      style={
        !opened
          ? {
              top: "-100vh",
            }
          : null
      }
    >
      <form>
        <h1>{title}</h1>

        <label htmlFor="income">Amount</label>
        <input
          type="number"
          name="inome"
          id="income"
          onInput={(e) => setIncome(e.target.value)}
        />
        <label htmlFor="balance">Balance</label>
        <select onChange={(e) => setId(e.target.value)} id="balance">
          {balances.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            );
          })}
        </select>
        {type === "transaction" ? (
          <select
            onChange={(e) => setSecondId(e.target.value)}
            id="second_balance"
          >
            {balances.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              );
            })}
          </select>
        ) : (
          <>
          <label>Type</label>
            <select onChange={(e) => setTypo(e.target.value)}>
              {type === "income"
                ? incomeTypes.map((item) => {
                    return (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    );
                  })
                : expenseTypes.map((item) => {
                    return (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    );
                  })}
            </select>
            <label>Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} />
          </>
        )}

        <input
          className={classes.button}
          type="button"
          value={type}
          onClick={() => {
            requestIncome();
            close();
            setDescription('')
            setIncome(0)
            setTypo('')
          }}
        />
        <input
          className={classes.button}
          type="button"
          value="Cancel"
          onClick={()=>{
            close()
            setDescription('')
            setIncome(0)
            setTypo('')
          }}
        />
      </form>
    </div>
  );
};

export default ActionModal;
