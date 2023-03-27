import { useState } from "react";
import "../../styles/ComponentStyles/ExpensesStyles/NewExpenses.css";
import { CustomButton } from "../common";
import Card from "../Wrapper/Card";
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
    <Card className="new_expenses">
      {!ClickState && (
        <CustomButton
          type="button"
          label="Add New Expense"
          value="true"
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
