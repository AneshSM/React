import styles from "../../styles/components/CustomComponentStyles.module.css";
import Card from "./Card";
const DateComponent = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const date = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className={styles.date_container}>
      <Card>{month}</Card>
      <Card>{year}</Card>
      <Card>{date}</Card>
    </Card>
  );
};
export default DateComponent;
