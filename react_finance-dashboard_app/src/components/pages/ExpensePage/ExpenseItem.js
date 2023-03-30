import { Card, DateComponent } from "../../common";
import styles from "../../../styles/pages/ExpensePage.module.css";
const ExpenseItem = (props) => {
  return (
    <Card className={styles.list_item}>
      <DateComponent date={props.date} />
      <Card className={styles.list_item_label}>{props.title}</Card>
      <Card className={styles.list_item_price}>{props.amount}</Card>
    </Card>
  );
};

export default ExpenseItem;
