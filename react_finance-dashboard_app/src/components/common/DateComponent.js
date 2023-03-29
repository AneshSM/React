const DateComponent = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const date = props.date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div style={{}}>
      <div style={{}}>{month}</div>
      <div style={{}}>{year}</div>
      <div style={{}}>{date}</div>
    </div>
  );
};
export default DateComponent;
