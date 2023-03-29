import { expenseFormStyle, flexBox } from "../../../styles";
import { CustomButton, CustomInput } from "../../../components/common";
const ExpenseForm = (props) => {
  // Styles

  // Form Elements
  let [title, titleInput] = CustomInput({
    id: "title",
    style: expenseFormStyle.inputStyle,
    type: "text",
  });
  let [amount, amountInput] = CustomInput({
    id: "amount",
    style: expenseFormStyle.inputStyle,
    type: "number",
    min: "0",
    step: "0.01",
  });
  let [date, dateInput] = CustomInput({
    id: "date",
    style: expenseFormStyle.inputStyle,
    type: "date",
    min: "2019-01-01",
    max: "2024-12-31",
  });

  // getData
  const submitHandler = (event) => {
    event.preventDefault();
    const formValues = {
      id: "",
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
    // return new data
    formValues.title.trim().length > 0 &&
      formValues.amount > 0 &&
      formValues.date.toDateString() !== "Invalid date" &&
      (props.onAddNewExpenseData(formValues) || props.onCancel("false"));
  };

  return (
    <form
      style={{ ...flexBox, ...expenseFormStyle.new_expense_form }}
      onSubmit={submitHandler}
    >
      <div style={{ ...flexBox, ...expenseFormStyle.new_expense_controls }}>
        <div style={{ ...flexBox, ...expenseFormStyle.new_expense_control }}>
          <label>Title</label>
          {titleInput}
        </div>
        <div style={{ ...flexBox, ...expenseFormStyle.new_expense_control }}>
          <label>Amount</label>
          {amountInput}
        </div>
        <div style={{ ...flexBox, ...expenseFormStyle.new_expense_control }}>
          <label>Date </label>
          {dateInput}
        </div>
      </div>
      <div style={{ ...flexBox, ...expenseFormStyle.new_expense_actions }}>
        <CustomButton
          style={expenseFormStyle.buttonStyle}
          label="Cancel "
          type="button"
          value="false"
          onPressed={props.onCancel}
        />
        <CustomButton
          style={expenseFormStyle.buttonStyle}
          label="Add Expenses"
          type="submit"
          onPressed={props.onCancel}
        />
      </div>
    </form>
  );
};
export default ExpenseForm;
