import { dateComponent, flexBox } from "../../styles";

const DateComponent = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const date = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div
      style={{ ...flexBox, ...dateComponent.date_container, ...props.style }}
    >
      <div style={dateComponent.monthYear}>{month}</div>
      <div style={dateComponent.monthYear}>{year}</div>
      <div style={dateComponent.date}>{date}</div>
    </div>
  );
};
export default DateComponent;
