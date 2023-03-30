import styles from "../../../../styles/pages/ExpensePage.module.css";
import {
  InnnerBar,
  OuterBar,
} from "../../../../styles/components/Componentstyles";

const ChartBar = (props) => {
  let barHeight = 0;
  if (props.maxValue > 0) {
    barHeight = Math.round((props.value / props.maxValue) * 100);
  }

  return (
    <div className={styles.chartBar_container}>
      <OuterBar>
        <InnnerBar height={barHeight} />
      </OuterBar>
      <div className={styles.chart_label}>{props.label}</div>
    </div>
  );
};
export default ChartBar;
