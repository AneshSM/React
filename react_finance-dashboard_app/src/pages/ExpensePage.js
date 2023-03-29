import { Expenses } from "../components/pages";
import styles from "../styles/pages/ExpensePage.module.css";
const ExpensePage = () => {
  return (
    <div id={styles.expensePage}>
      <Expenses />
    </div>
  );
};
export default ExpensePage;
