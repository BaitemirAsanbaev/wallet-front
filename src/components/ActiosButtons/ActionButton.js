import classes from "./ActionButton.module.scss"
import income from './income-button.png'
import expense from './expense-button.png'
import transaction from './transaction-button.png'

const ActionButton = ({open, type}) => {
    return ( <button
        onClick={open}
        className={classes.ActionButton}>
        <img
        alt={type}
        src={
            type==="income"?income
            :type==="expense"?expense
            :type==="transaction"?transaction
            :null
        }/>
    </button> );
}
 
export default ActionButton;