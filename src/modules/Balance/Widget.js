import classes from "./Container.module.scss"

const Widget = ({title, children}) => {
    return ( <div
    style={title==="Balances"?{
        gridRowStart:"1",
        gridRowEnd:"3",
    }:null}
    className={classes.Container}>
        <h1>{title}</h1>
        {children}
    </div> );
}
 
export default Widget;