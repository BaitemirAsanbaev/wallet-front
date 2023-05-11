import classes from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : null)}
          >
            <span>Home</span>
          </NavLink>
          <div></div>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? classes.active : null)}
          >
            <span>Statistics</span>
          </NavLink>
          <div></div>
        </li>
        <li>
          <NavLink
            to="/balances"
            className={({ isActive }) => (isActive ? classes.active : null)}
          >
            <span>Balances</span>
          </NavLink>
          <div></div>
        </li>
        <li>
          <NavLink
            to="/transactins"
            className={({ isActive }) => (isActive ? classes.active : null)}
          >
            <span>Transactions</span>
          </NavLink>
          <div></div>
        </li>
        <li>
          <NavLink
            to="/budget"
            className={({ isActive }) => (isActive ? classes.active : null)}
          >
            <span>Budget</span>
          </NavLink>
          <div></div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
