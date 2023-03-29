import { Card } from "../../../common";

const ChartBar = (props) => {
  let barHeight = "0%";
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <Card style={{}}>
      <div style={{}}>
        <div
          style={{
            height: barHeight,
          }}
        ></div>
      </div>
      <div style={{}}>{props.label}</div>
    </Card>
  );
};
export default ChartBar;
