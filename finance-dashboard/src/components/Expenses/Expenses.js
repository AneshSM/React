import { useState } from "react";
import "../../styles/ComponentStyles/ExpensesStyles/Expenses.css";
import { Card } from "../Wrapper";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState(new Date().getFullYear().toString());

  const getFilteredYear = (getyear) => {
    setYear(getyear);
  };

  const filteredExpenses = props.items.filter((expensedata) => {
    return expensedata.date.getFullYear().toString() === year;
  });

  return (
    <Card id="expenses">
      <ExpenseFilter
        title={"Year"}
        value={year}
        onExpenseFilter={getFilteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
