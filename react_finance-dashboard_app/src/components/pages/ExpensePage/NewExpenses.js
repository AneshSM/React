import { useState } from "react";
import styles from "../../../styles/pages/ExpensePage.module.css";
import { Card, CustomButton } from "../../common";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const onAddExpense = (getExpenseData) => {
    props.onAddNewExpense(getExpenseData);
  };
  const [ClickState, setClickState] = useState(false);
  const checkValue = (value) => {
    value === "false" ? setClickState(false) : setClickState(true);
  };
  return (
    <Card id={styles.newExpense_container}>
      {!ClickState && (
        <CustomButton
          type="button"
          label="Add New Expense"
          value="true"
          className={styles.expenseButton}
          style={{}}
          onPressed={checkValue}
        />
      )}
      {ClickState && (
        <ExpenseForm onAddNewExpenseData={onAddExpense} onCancel={checkValue} />
      )}
    </Card>
  );
};

export default NewExpenses;
