import "../../styles/ComponentStyles/ExpensesStyles/ExpenseList.css";
import { Card } from "../Wrapper";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card
        style={{
          fontSize: "25px",
          width: "100%",
          backgroundColor: "#282C35",
          padding: "15px",
        }}
      >
        No Expense found
      </Card>
    );
  }
  return (
    <Card id="expenses_container">
      {props.items.map((expenseItems) => (
        <ExpenseItem
          key={expenseItems.id}
          title={expenseItems.title}
          amount={expenseItems.amount}
          date={expenseItems.date}
        />
      ))}
    </Card>
  );
};
export default ExpenseList;
