import { Card, DateComponent } from "../../common";

const ExpenseItem = (props) => {
  return (
    <Card style={{}}>
      <DateComponent style={{}} date={props.date} />
      <div style={{}}>{props.title}</div>
      <Card style={{}}>{props.amount}</Card>
    </Card>
  );
};

export default ExpenseItem;
