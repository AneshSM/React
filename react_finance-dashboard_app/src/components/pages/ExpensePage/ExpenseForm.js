import styles from "../../../styles/pages/ExpensePage.module.css";
import { CustomButton } from "../../../components/common";
import { useState } from "react";
import { expenseInput } from "../../../hooks";

const ExpenseForm = (props) => {
  //set Data
  const [title, bindTitle, resetTitle] = expenseInput("");
  const [amount, bindAmount, resetAmount] = expenseInput(0);
  const [date, bindDate, resetDate] = expenseInput("");
  const [validateTitle, setTitle] = useState(false);
  const [validateAmount, setAmount] = useState(false);
  const [validateDate, setDate] = useState(false);

  // get Data
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      (title !== "" && setTitle(true)) ||
      (amount !== 0 && setAmount(true)) ||
      (date.toString() !== "" && setDate(true))
    ) {
      validateTitle &&
        validateAmount &&
        validateDate &&
        console.log({ title, amount, date });
    }
    // props.onAddNewExpenseData({ title, amount, date }) &&
    // props.onCancel("false");
  };

  return (
    <form className={styles.expense_form} onSubmit={submitHandler}>
      <div className={styles.expense_form_Input_container}>
        <div className="expense_input_container">
          <label htmlFor="" className="input_label">
            Title
          </label>
          <input
            type="text"
            className={`${styles.expense_input} ${
              !validateTitle && styles.input_alert
            }`}
            value={title}
            {...bindTitle}
          />
        </div>
        <div className="expense_input_container">
          <label htmlFor="" className="input_label">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            className={`${styles.expense_input} ${
              !validateAmount && styles.input_alert
            }`}
            {...bindAmount}
          />
        </div>
        <div className="expense_input_container">
          <label htmlFor="" className="input_label">
            Date
          </label>
          <input
            type="date"
            className={`${styles.expense_input} ${
              !validateDate && styles.input_alert
            }`}
            value={date}
            {...bindDate}
          />
        </div>
      </div>
      <div className={styles.expense_form_Button_container}>
        <CustomButton
          style={{}}
          label="Cancel "
          type="button"
          value="false"
          className={`${styles.expenseButton} ${styles.expenseCancelButton}`}
          onPressed={props.onCancel}
        />
        <CustomButton
          style={{}}
          label="Submit"
          type="submit"
          className={styles.expenseButton}
          onPressed={props.onCancel}
        />
      </div>
    </form>
  );
};
export default ExpenseForm;
