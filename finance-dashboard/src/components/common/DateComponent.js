import "../../styles/ComponentStyles/commonStyles/DateComponent.css";
const DateComponent = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const date = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date_container" style={props.style}>
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="date">{date}</div>
    </div>
  );
};
export default DateComponent;
