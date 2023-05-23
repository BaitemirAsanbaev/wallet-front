import classes from "./Button.module.scss"

const Button = ({children, event})=> {
    return ( <button
    className={classes.Button}
    onClick={(e)=>{
        e.preventDefault()
        event()
    }}>
        {children}
    </button> );
}
 
export default Button;