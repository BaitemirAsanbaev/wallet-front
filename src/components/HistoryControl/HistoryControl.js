import classes from "./HistoryControl.module.scss"

const HistoryControl = ({i, e, t, switchT, switchE, switchI}) => {
    return ( <div className={classes.HistoryControl}>
        <div style={i?{backgroundColor:"rgb(58, 58, 58)"}:{backgroundColor:"grey"}} onClick={switchI}>Incomes</div>
        <div style={e?{backgroundColor:"rgb(58, 58, 58)"}:{backgroundColor:"grey"}} onClick={switchE}>Expenses</div>
        <div style={t?{backgroundColor:"rgb(58, 58, 58)"}:{backgroundColor:"grey"}} onClick={switchT}>Transactions</div>
    </div> );
}
 
export default HistoryControl;