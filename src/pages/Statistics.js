import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
} from "recharts";

const Statistics = ({ incomes, expenses }) => {
  function calculateSummary(incomes, expenses) {
    const summary = [];

    // Combine incomes and expenses into a single array
    const transactions = [...incomes, ...expenses];

    // Group transactions by date
    const groupedTransactions = transactions.reduce((grouped, transaction) => {
      const { date, value } = transaction;

      if (!grouped[date]) {
        grouped[date] = { date, income: 0, expense: 0 };
      }

      if (incomes.includes(transaction)) {
        grouped[date].income += value;
      } else if (expenses.includes(transaction)) {
        grouped[date].expense += value;
      }

      return grouped;
    }, {});

    // Convert groupedTransactions object to an array
    Object.keys(groupedTransactions).forEach((date) => {
      summary.push(groupedTransactions[date]);
    });

    return summary;
  }

  function convertExpenses(expenses) {
    const output = [];

    // Iterate over each expense
    expenses.forEach((expense) => {
      // Check if the expense name already exists in the output array
      const existingExpense = output.find((item) => item.name === expense.type);

      if (existingExpense) {
        // If the expense name exists, add the value to the existing expense
        existingExpense.value += expense.value;
      } else {
        // If the expense name doesn't exist, create a new expense object
        output.push({
          name: expense.type,
          value: expense.value,
        });
      }
    });

    return output;
  }

  const dailyStat = calculateSummary(incomes, expenses);
  const expenseStat = convertExpenses(expenses);
  const incomeStat = convertExpenses(incomes);

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>
      <h1 style={{
        margin:"50px 0"
      }}>Statistics</h1>
      <h2 style={{
        margin:"20px 0"
      }}>Total Incomes and Expenses</h2>
      <div style={{
        display:"flex",
        marginBottom:"50px"
      }}>
      <AreaChart width={500} height={300} data={incomes}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"date"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="value"
          stroke="green"
          fill="lightgreen"
          activeDot={{ r: 8 }}
          dot={{ r: 6 }}
        />
      </AreaChart>
      <AreaChart width={500} height={300} data={expenses}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"date"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="value"
          stroke="red"
          fill="pink"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
      </div>
      <h2 style={{
        margin:"50px 0"
      }}>Daily summary</h2>
      <BarChart width={500} height={300} data={dailyStat}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="green" />
        <Bar dataKey="expense" fill="red" />
      </BarChart>
      <h2 style={{
        margin:"50px 0"
      }}>Income and Expense types</h2>
      <div style={{
        display:"flex"
      }}>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={expenseStat}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="red"
          innerRadius={40}
          label
        />
        <Tooltip />
      </PieChart>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={incomeStat}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="green"
          innerRadius={40}
          label
        />
        <Tooltip />
        
      </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
