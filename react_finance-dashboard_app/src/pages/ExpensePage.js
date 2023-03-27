import { useState } from "react";
import { Card } from "../components/common";

const expensePageStyle = {
  expense: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexFlow: "column nowrap",
    padding: "20px",
    gap: "10px",
    backgroundColor: " #1a1c22",
  },

  Expense: {
    flexFlow: "column nowrap",
  },
};
const dummy_list = [];

const ExpensePage = () => {
  let [key, setkey] = useState(0);
  const [ExpenseList, setExpenses] = useState(dummy_list);
  const getNewExpenseData = (newExpenseData) => {
    newExpenseData.id = key;
    setkey((prev) => prev + 1);
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div style={expensePageStyle.expense}>
      <Card />
    </div>
  );
};
export default ExpensePage;
