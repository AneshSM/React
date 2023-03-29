import { expenseFilterStyle } from "../../../styles";
import { Card, CustomDropDown } from "../../common";

const ExpenseFilter = (props) => {
  return (
    <Card style={expenseFilterStyle.expenseFilter_container}>
      <CustomDropDown
        onSelect={props.onExpenseFilter}
        title={props.title}
        value={props.value}
        style={{ ...expenseFilterStyle }}
      />
    </Card>
  );
};

export default ExpenseFilter;
