import styles from "../../../styles/pages/ExpensePage.module.css";
import moduleStyles from "../../../styles/module/moduleStyles.module.css";
import { Card, CustomButton } from "../../../components/common";
import { expenseInput } from "../../../hooks";
import ErrorModule from "../../../module/ErrorModule";
import { useState } from "react";

const ExpenseForm = (props) => {
  //set Data
  const [title, bindTitle, resetTitle] = expenseInput("");
  const [amount, bindAmount, resetAmount] = expenseInput(0);
  const [date, bindDate, resetDate] = expenseInput("");
  const [error, setError] = useState();
  const closeError = () => {
    setError(null);
  };
  const checkValue = (formvalues) => {
    if (formvalues.title === "") {
      setError({
        title: "Invalid title",
        message: "Please enter an valid Expense Title",
      });
      return;
    }
    if (formvalues.amount === 0) {
      setError({
        title: "Invalid title",
        message: "Please enter an valid Expense Amount",
      });
      return;
    }
    if (formvalues.date.toString() === "Invalid Date") {
      setError({
        title: "Invalid title",
        message: "Please enter an valid Expense Date",
      });
      return;
    }
    return (
      formvalues.title !== "" &&
      formvalues.amount > 0 &&
      formvalues.date.toString() !== "Invalid Date"
    );
  };
  // get Data
  const submitHandler = (event) => {
    event.preventDefault();
    const formvalues = {
      id: "",
      title,
      amount: +amount,
      date: new Date(date),
    };
    if (checkValue(formvalues)) {
      resetAmount();
      resetTitle();
      resetDate();
      props.onAddNewExpenseData(formvalues);
      props.onCancel("false");
      setError({ className: moduleStyles.hideContainer });
    }
  };

  return (
    <>
      {error && <ErrorModule {...error} onClose={closeError} />}
      <form className={styles.expense_form} onSubmit={submitHandler}>
        <Card className={styles.expense_form_Input_container}>
          <div>
            <label htmlFor="" className={styles.input_label}>
              Title
            </label>
            <input
              type="text"
              className={styles.expense_input}
              value={title}
              {...bindTitle}
            />
          </div>
          <div>
            <label htmlFor="" className={styles.input_label}>
              Amount
            </label>
            <input
              type="number"
              value={amount}
              className={styles.expense_input}
              {...bindAmount}
            />
          </div>
          <div>
            <label htmlFor="" className={styles.input_label}>
              Date
            </label>
            <input
              type="date"
              className={styles.expense_input}
              value={date}
              {...bindDate}
            />
          </div>
        </Card>
        <Card className={styles.expense_form_Button_container}>
          <CustomButton
            style={{}}
            label="Cancel "
            type="button"
            value="false"
            className={`${styles.expenseButton} " " ${styles.expenseCancelButton}`}
            onPressed={props.onCancel}
          />
          <CustomButton
            style={{}}
            label="Submit"
            type="submit"
            className={styles.expenseButton}
            onPressed={props.onCancel}
          />
        </Card>
      </form>
    </>
  );
};
export default ExpenseForm;
