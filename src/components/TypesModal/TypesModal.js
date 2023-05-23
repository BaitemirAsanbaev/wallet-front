import axios from 'axios';
import Button from '../Button/Button';
import classes from './TypesModal.module.scss'
import api from '../../api';
import { useState } from 'react';

const TypesModal = ({opened, close, type}) => {
  const [title,setTitle] =useState("")
  function addType(){
    axios.post(api+`balances/${type}/types/add`,{
      title
    })
    close()
  }
    return ( <div
        className={classes.TypesModal}
        style={
          !opened
            ? {
                top: "-100vh",
              }
            : {
                top: "25vh",
              }
        }>
            <form>
                <h2>New Type</h2>
                <input onInput={(e)=>setTitle(e.target.value)} required type='text'/>
                <Button event={addType}>Submit</Button>
            </form>
    </div> );
}
 
export default TypesModal;