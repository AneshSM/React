import { expenseChartStyle } from "../../../../styles";
import { Card } from "../../../common";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxMothValue = Math.max(...dataPointValues);
  return (
    <Card style={expenseChartStyle.Chart}>
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
