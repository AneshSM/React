import "../../styles/ComponentStyles/ExpensesStyles/ExpenseFilter.css";
import { CustomDropDown } from "../common";
import { Card } from "../Wrapper";
const selectStyle = {
  select: {
    backgroundColor: "#1A1C22",
    padding: "5px",
    borderRadius: "5px",
    color: "#9A9A9A",
    border: ".5px solid #9A9A9A",
  },
  label: { fontSize: "x-large", color: "white" },
};
const ExpenseFilter = (props) => {
  return (
    <Card id="expenseFilter">
      <CustomDropDown
        onSelect={props.onExpenseFilter}
        title={props.title}
        value={props.value}
        style={selectStyle}
      />
    </Card>
  );
};

export default ExpenseFilter;
