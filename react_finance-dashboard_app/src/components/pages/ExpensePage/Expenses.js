import { useState } from "react";

import styles from "../../../styles/pages/ExpensePage.module.css";

// import ExpenseFilter from "./ExpenseFilter";
// import ExpenseList from "./ExpenseList";
// import ExpensesChart from "./ExpensesChart";
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
    <div id={styles.expense_container}>
      <div id={styles.expense_data_filter_chart_container}>
        <NewExpenses onAddNewExpense={getNewExpenseData} />
        {/* <ExpenseFilter
          title={"Year"}
          value={year}
          onExpenseFilter={getFilteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} /> */}
      </div>
      {/* <ExpenseList items={filteredExpenses} /> */}
    </div>
  );
};

export default Expenses;
