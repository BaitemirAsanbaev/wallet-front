import axios from "axios";
import { useEffect, useState } from "react";
import { Line, LineChart } from "recharts";
import api from "../api";

const Statistics = () => {
    const [income, setIncome] = useState([])
    const [expense, setExpense] = useState([])
    useEffect(()=>{
        axios.get(api + 'balances/incomes').then((res)=>{
            setIncome(res.data)
        })
        axios.get(api + 'balances/expenses').then((res)=>{
            setExpense(res.data)
        })
    }, [])
    
    const incomeData = []
    const expenseData = []
    income.forEach((item)=>{
        incomeData.push({uv: item.value})
    })
    expense.forEach((item)=>{
        expenseData.push({uv: item.value})
    })
  return (
    <div>
      <LineChart width={700} height={400} data={incomeData}>
        <Line type="monotone" dataKey="uv" stroke="#1DBC2D" />
      </LineChart>
      <LineChart width={700} height={400} data={expenseData}>
        <Line type="monotone" dataKey="uv" stroke="#ff2213" />
      </LineChart>
      
    </div>
  );
};

export default Statistics;
