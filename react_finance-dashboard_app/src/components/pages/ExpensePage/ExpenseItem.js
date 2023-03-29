import { expenseItemStyles, flexBox } from "../../../styles";
import { Card, DateComponent } from "../../common";

const ExpenseItem = (props) => {
  return (
    <Card style={expenseItemStyles.item_container}>
      <DateComponent style={expenseItemStyles.date} date={props.date} />
      <div style={{ ...flexBox, ...expenseItemStyles.item_title }}>
        {props.title}
      </div>
      <Card style={expenseItemStyles.amount}>{props.amount}</Card>
    </Card>
  );
};

export default ExpenseItem;
