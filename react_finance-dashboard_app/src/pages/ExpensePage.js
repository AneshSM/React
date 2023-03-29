import { Expenses } from "../components/pages";
import { expensePageStyle, flexBox } from "../styles";

const ExpensePage = () => {
  return (
    <div style={{ ...flexBox, ...expensePageStyle.expense }}>
      <Expenses />
    </div>
  );
};
export default ExpensePage;
