import classes from "./Layout.module.scss";
import SideBar from "../../modules/SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <SideBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
