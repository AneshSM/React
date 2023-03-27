import { Card, Expenses } from "../components";
import "../styles/pagesStyles/pagesStyle.css";
import "../styles/pagesStyles/Expense.css";
import { NewExpenses } from "../components/Expenses";
import { useState } from "react";
const dummy_list = [];

const Expense = () => {
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
    <div id="Expense" className="tabs">
      <Card id="expense">
        <NewExpenses onAddNewExpense={getNewExpenseData} />
        <Expenses items={ExpenseList} />
      </Card>
    </div>
  );
};
export default Expense;
