import axios from "axios";
import { useState } from "react";
import api from "../../api";
import classes from "./BalanceModal.module.scss";
import Button from "../Button/Button";

const BalanceModal = ({ opened, id ,type, close }) => {
  const [title, setTitle] = useState("");
  function changeTitle() {
    axios.post(api + `balances/${type}/${id===0?"":id}`, {
      title
    });
    close()
  }
  function deleteBalance(){
    axios.delete(api+`balances/delete/${id}`)
    close()

  }
  return (
    <div
      className={classes.BalanceModal}
      style={
        !opened
          ? {
              top: "-100vh",
            }
          : {
              top: "25vh",
            }
      }
    >
      <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="title">{type.charAt(0).toUpperCase() + type.slice(1)}</label>
        <input
          id="title"
          type="text"
          onInput={(e) => setTitle(e.target.value)}
        />
        <Button event={changeTitle}>Submit</Button>
        {type==='update'?
        <Button event={deleteBalance}>Delete</Button>
        :null}
      </form>
    </div>
  );
};

export default BalanceModal;
