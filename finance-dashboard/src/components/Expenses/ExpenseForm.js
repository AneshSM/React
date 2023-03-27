import "../../styles/ComponentStyles/ExpensesStyles/ExpenseForm.css";
import { CustomButton, CustomInput } from "../common";
const ExpenseForm = (props) => {
  // Styles
  const formStyle = {
    buttonStyle: {
      padding: "15px",
      borderRadius: "5px",
      backgroundColor: "#1a1c22",
      boxShadow: "0 1.5px 5px #1FCB4F",
    },
    inputStyle: {
      borderRadius: "5px",
      width: "20rem",
      padding: "5px",
    },
  };

  // Form Elements
  let [title, titleInput] = CustomInput({
    id: "title",
    style: formStyle.inputStyle,
    type: "text",
  });
  let [amount, amountInput] = CustomInput({
    id: "amount",
    style: formStyle.inputStyle,
    type: "number",
    min: "0.01",
    step: "0.01",
  });
  let [date, dateInput] = CustomInput({
    id: "date",
    style: formStyle.inputStyle,
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
    document.getElementById("amount").value = 0;
    document.getElementById("date").value = "";
    // return new data
    props.onAddNewExpenseData(formValues);
    props.onCancel("false");
  };

  return (
    <form className="new_expense_form" onSubmit={submitHandler}>
      <div className="new_expense_controls">
        <div className="new_expense_control">
          <label>Title</label>
          {titleInput}
        </div>
        <div className="new_expense_control">
          <label>Amount</label>
          {amountInput}
        </div>
        <div className="new_expense_control">
          <label>Date </label>
          {dateInput}
        </div>
      </div>
      <div className="new_expense_actions">
        <CustomButton
          style={formStyle.buttonStyle}
          label="Cancel "
          type="button"
          value="false"
          onPressed={props.onCancel}
        />
        <CustomButton
          style={formStyle.buttonStyle}
          label="Add Expenses"
          type="submit"
          onPressed={props.onCancel}
        />
      </div>
    </form>
  );
};
export default ExpenseForm;
