import "../../../styles/ComponentStyles/ExpensesStyles/chartStyles/ChartBar.css";
import Card from "../../Wrapper/Card";

const ChartBar = (props) => {
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <Card className="ChartBar">
      <div className="outer_bar">
        <div className="inner_bar" style={{ height: barHeight }}></div>
      </div>
      <div className="bar_label">{props.label}</div>
    </Card>
  );
};
export default ChartBar;
