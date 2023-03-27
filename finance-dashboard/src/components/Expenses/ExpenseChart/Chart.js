import "../../../styles/ComponentStyles/ExpensesStyles/chartStyles/Chart.css";
import ChartBar from "./ChartBar";
import Card from "../../Wrapper/Card";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxMothValue = Math.max(...dataPointValues);
  console.log(maxMothValue);
  return (
    <Card className="Chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxMothValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </Card>
  );
};
export default Chart;
