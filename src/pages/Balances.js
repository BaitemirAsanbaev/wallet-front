import Balance from "../modules/Balance/Balance";
const Balances = ({ balances, setOpenedB, setTypeB, setWhich }) => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        width:"900px",
        padding:"30px",
        transform:"translateX(-170px)"
    }}>
        <div>
            <h1>Balances</h1>
        </div>
      {balances.map((item) => {
        return (
          <Balance
            all={true}
            key={item.id}
            open={() => {
              setTypeB("update");
              setWhich(item.id);
              setOpenedB(true);
            }}
            data={item}
          />
        );
      })}
    </div>
  );
};

export default Balances;
