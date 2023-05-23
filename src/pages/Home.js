import ActionModal from "../components/ActionModal/ActionModal";
import ActionButtons from "../components/ActiosButtons/ActionButtons";
import Backdrop from "../components/Backdrop/Backdrop";
import Balance from "../modules/Balance/Balance";
import Widget from "../modules/Balance/Widget";
import Budget from "../modules/Budget/Budget";
import BalanceModal from "../components/BalanceModal/BalanceModal";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import TypesModal from "../components/TypesModal/TypesModal";
import BudgetModal from "../components/BudgetModal/BudgetModal";

const Home = ({
  opened,
  openedB,
  setOpened,
  setOpenedB,
  setType,
  setTypeB,
  which,
  balance,
  typeB,
  incomeTypes,
  expenseTypes,
  type,
  setWhich,
  openedT,
  setOpenedT,
  openedBg,
  setOpenedBg,
  budget
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: "10px",
        width: "70vw",
        padding: "30px",
      }}
    >
      {opened || openedB || openedT || openedBg ? (
        <Backdrop
          close={() => {
            setOpened(false);
            setOpenedB(false);
            setOpenedT(false);
            setOpenedBg(false);
          }}
        />
      ) : null}
      <BalanceModal
        opened={openedB}
        id={which}
        type={typeB}
        close={() => setOpenedB(false)}
      />
      <TypesModal type={type} opened={openedT} close={()=>setOpenedT(false)}/>
      <BudgetModal opened={openedBg} close={() => setOpenedBg(false)} />
      <ActionModal
        type={type}
        close={() => setOpened(false)}
        opened={opened}
        incomeTypes={incomeTypes}
        expenseTypes={expenseTypes}
        openT={() => setOpenedT(true)}
      />
      <Widget title={"Balances"}>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <div
            style={
              balance.length < 1
                ? {
                    height: "75vh",
                    display: "flex",
                    alignItems: "center",
                  }
                : null
            }
          >
            <Button
              event={() => {
                setOpenedB(true);
                setTypeB("create");
              }}
            >
              Create new balance
            </Button>
            
              {balance.length?
              <Button event={()=>console.log("")}>
              <Link
                  to={"/balances"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  View all balances
                </Link></Button>:null }
            
          </div>
          {balance.map((item) => {
            return (
              <Balance
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
      </Widget>
      <Widget title={"Budget"}>
        <Budget open={() => setOpenedBg(true)} budget={budget} />
      </Widget>
      <Widget title={"Actions"}>
        <ActionButtons
          open={() => setOpened(true)}
          income={() => setType("income")}
          expense={() => setType("expense")}
          transaction={() => setType("transaction")}
        />
      </Widget>
    </div>
  );
};

export default Home;
