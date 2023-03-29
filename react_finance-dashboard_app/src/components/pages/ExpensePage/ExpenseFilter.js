import { Card, CustomDropDown } from "../../common";

const ExpenseFilter = (props) => {
  return (
    <Card style={{}}>
      <CustomDropDown
        onSelect={props.onExpenseFilter}
        title={props.title}
        value={props.value}
        style={{}}
      />
    </Card>
  );
};

export default ExpenseFilter;
