import { expenseChartStyle, flexBox } from "../../../../styles";
import { Card } from "../../../common";

const ChartBar = (props) => {
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <Card style={{ ...flexBox, ...expenseChartStyle.ChartBar }}>
      <div style={{ ...flexBox, ...expenseChartStyle.outer_bar }}>
        <div
          style={{
            ...flexBox,
            ...expenseChartStyle.inner_bar,
            height: barHeight,
          }}
        ></div>
      </div>
      <div style={expenseChartStyle.bar_label}>{props.label}</div>
    </Card>
  );
};
export default ChartBar;
