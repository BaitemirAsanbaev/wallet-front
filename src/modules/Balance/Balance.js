import Button from "../../components/Button/Button";
import classes from "./Balance.module.scss";

const Balance = ({open, data }) => {
  let income=0
  let expense=0
  data.income.forEach(el => {
    income+=el.value
  });
  data.expense.forEach(el => {
    expense+=el.value
  });
  return (
    <div className={classes.Balance}>
      <div>
        <div className={classes.money}>
          <div>{data.title}</div>
          <div>{data.balance}$</div>
        </div>
        <div className={classes.actions}>
          <div>+ ${income}</div>
          <div>- ${expense}</div>
        </div>
      </div>
      <div>
        <Button event={open}>Edit</Button>
      </div>
    </div>
  );
};

export default Balance;
