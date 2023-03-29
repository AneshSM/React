import { useState } from "react";
import { new_expensesStyles } from "../../../styles";
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
    <Card style={new_expensesStyles.new_expense_container}>
      {!ClickState && (
        <CustomButton
          type="button"
          label="Add New Expense"
          value="true"
          style={new_expensesStyles.add_new_button}
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
