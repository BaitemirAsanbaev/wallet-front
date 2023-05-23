import Button from "../../components/Button/Button";
import classes from "./Budget.module.scss";

const Budget = ({open, budget}) => {
  return (
    <div
      style={budget.amount<50?{backgroundColor:"tomato"}:null}
      className={classes.Budget}>
      <div className={classes.left}>
        <div>$ {budget.amount?budget.amount:0}</div>
        <span style={budget.amount<50?{color:"#fff"}:null}>left</span>
      </div>
      <div className={classes.limitButton}>
        <Button event={open}>Set Budget</Button>
      </div>
    </div>
  );
};

export default Budget;
