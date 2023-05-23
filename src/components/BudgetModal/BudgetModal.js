import axios from "axios";
import { useState } from "react";
import api from "../../api";
import classes from "./BudgetModal.module.scss";
import Button from "../Button/Button";

const BudgetModal = ({ opened, close}) => {
  const [amount, setAmount] = useState(0);
  function setBudget() {
    axios.post(api + `balances/budget/set`, {
        amount
    });
    close()
  }
  return (
    <div
      className={classes.BudgetModal}
      style={
        !opened
          ? {
              top: "-100vh",
            }
          : {
              top: "25vh",
            }
      }
    >
      <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="amount">Your today's budget</label>
        <input
          id="amount"
          type="number"
          onInput={(e) => setAmount(e.target.value)}
        />
        <Button event={setBudget}>Submit</Button>
      </form>
    </div>
  );
};

export default BudgetModal;
