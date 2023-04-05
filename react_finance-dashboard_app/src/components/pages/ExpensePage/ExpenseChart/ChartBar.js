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

  let divStyle = {
    "background-color": barHeight + "px",
  };

  return (
    <div className={styles.chartBar_container}>
      <OuterBar>
        {/* <InnnerBar height={barHeight} /> */}
        <div style={{ height: "23px", "--varWeight": "45px" }}>ello</div>
      </OuterBar>
      <div className={styles.chart_label}>{props.label}</div>
    </div>
  );
};
export default ChartBar;
