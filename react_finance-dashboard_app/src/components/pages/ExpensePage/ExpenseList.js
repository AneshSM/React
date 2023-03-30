import { Card } from "../../common";
import ExpenseItem from "./ExpenseItem";
import styles from "../../../styles/pages/ExpensePage.module.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className={styles.expense_list_container}>No Expense found</Card>
    );
  }
  return (
    <div className={styles.expense_list_container}>
      {props.items.map((expenseItems) => (
        <ExpenseItem
          key={expenseItems.id}
          title={expenseItems.title}
          amount={expenseItems.amount}
          date={expenseItems.date}
        />
      ))}
    </div>
  );
};
export default ExpenseList;
