import classes from "./Budget.module.scss";
import { NavLink } from "react-router-dom";

const Budget = () => {
  return (
    <div className={classes.Budget}>
      <div className={classes.left}>
        <div>$ 744.00</div>
        <span>left</span>
      </div>
      <div className={classes.limitButton}>
        <NavLink to="./budgets">Set daily budget</NavLink>
      </div>
    </div>
  );
};

export default Budget;
