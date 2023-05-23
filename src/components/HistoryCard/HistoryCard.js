import classes from "./HistoryCard.module.scss";
import arrow from '../../assets/arrow.svg'
const HistoryCard = ({ type, data, balances }) => {
  return (
    <div className={classes.HistoryCard}>
      <div className={classes.card_head}>
        <span>{type === "transaction" ? "#Transaction" : "#" + data.type}</span>
        <h2
          style={
            type === "transaction"
              ? { color: "blue" }
              : type === "income"
              ? { color: "green" }
              : { color: "red" }
          }
        >
          ${data.value}
        </h2>
        <span>{data.date}</span>
      </div>
      <div>
        {type === "transaction" ? (
          <div className={classes.card_body}>
          <h1>
              {balances.map((j) => (j.id === data.from_id ? j.title : null))}
            </h1>
            <img src={arrow}/>
            <h1>
              {balances.map((j) => (j.id === data.to_id ? j.title : null))}
            </h1></div>
        ) : (
          <div className={classes.card_body}>
            <h1>
              {balances.map((j) => (j.id === data.balance_id ? j.title : null))}
            </h1>
            <p>{data.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryCard;

{
  /* <span>{balances.map(j=>j.id===data.from_id?j.title:null)} {"->"} {balances.map(j=>j.id===data.to_id?j.title:null)}</span/> */
}
