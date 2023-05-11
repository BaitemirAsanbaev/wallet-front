import classes from './SideBar.module.scss'
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";

const SideBar = () => {
    return ( <div className={classes.SideBar}>
        <Logo/>
        <Nav/>
    </div> );
}
 
export default SideBar;