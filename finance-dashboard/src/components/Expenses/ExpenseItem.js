import "../../styles/ComponentStyles//ExpensesStyles/ExpenseItem.css";

import { Card } from "../Wrapper";
import { DateComponent } from "../common";
const itemStyles = {
  date: { backgroundColor: " #1a1c22" },
  amount: {
    padding: "10px",
    backgroundColor: "#1FCB4F",
    color: "#1a1c22",
    fontWeight: "900",
    border: "1px solid white",
    fontSize: "18px",
  },
};
const ExpenseItem = (props) => {
  return (
    <Card className="item_container">
      <DateComponent style={itemStyles.date} date={props.date} />
      <div className="item_title">{props.title}</div>
      <Card style={itemStyles.amount}>{props.amount}</Card>
    </Card>
  );
};

export default ExpenseItem;
