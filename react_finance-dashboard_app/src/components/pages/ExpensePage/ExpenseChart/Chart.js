import ChartBar from "./ChartBar";
import styles from "../../../../styles/pages/ExpensePage.module.css";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxMothValue = Math.max(...dataPointValues);
  return (
    <div className={styles.chart_container}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxMothValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
