import { Card } from "../../common";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <Card style={{}}>No Expense found</Card>;
  }
  return (
    <Card style={{}}>
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
