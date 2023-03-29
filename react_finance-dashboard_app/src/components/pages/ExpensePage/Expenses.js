import { useState } from "react";
import { expensesStyle } from "../../../styles";
import { Card } from "../../common";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import NewExpenses from "./NewExpenses";

const Expenses = () => {
  const dummy_list = [];
  //New data
  let [key, setkey] = useState(0);
  const [ExpenseListValue, setExpenses] = useState(dummy_list);
  const getNewExpenseData = (newExpenseData) => {
    newExpenseData.id = key;
    setkey((prev) => prev + 1);
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  //Fiter
  const [year, setYear] = useState(new Date().getFullYear().toString());

  const getFilteredYear = (getyear) => {
    setYear(getyear);
  };

  const filteredExpenses = ExpenseListValue.filter((expensedata) => {
    return expensedata.date.getFullYear().toString() === year;
  });

  return (
    <Card style={expensesStyle.expenses_container}>
      <Card style={expensesStyle.expenseFilterChart_container}>
        <NewExpenses onAddNewExpense={getNewExpenseData} />
        <ExpenseFilter
          title={"Year"}
          value={year}
          onExpenseFilter={getFilteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
      </Card>
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
