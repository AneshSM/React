import { CustomDropDown } from "../../common";
import styles from "../../../styles/pages/ExpensePage.module.css";
const ExpenseFilter = (props) => {
  return (
    <div className={styles.expense_filter_container}>
      <CustomDropDown
        onSelect={props.onExpenseFilter}
        title={props.title}
        value={props.value}
        style={{}}
      />
    </div>
  );
};

export default ExpenseFilter;
