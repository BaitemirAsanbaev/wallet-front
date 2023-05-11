import ActionButton from "./ActionButton";

const ActionButtons = ({open, income, expense, transaction}) => {
    return ( <div 
    style={{
        display:"grid",
        gridTemplateColumns:"auto auto auto",
        gap:"20px",
    }}>

        <ActionButton
        open={()=>{
            income()
            open()
        }}
        type="income"/>
        
        <ActionButton
        open={()=>{
            expense()
            open()
        }}
        type="expense"/>
        <ActionButton
        type="transaction"
        open={()=>{
            transaction()
            open()
        }}/>

    </div> );
}
export default ActionButtons;