import { ICNcontainer } from "../container";
import Card from "./Card";

import styles from "../../styles/components/CustomComponentStyles.module.css";

const KPIcards = (props) => {
  return (
    <Card className={styles.kpi_card}>
      <ICNcontainer className={styles.icon} icn={props.icon} />
      <div className={styles.kpi_data}>
        <div className={styles.kpi_data_head}>{props.title}</div>
        <div className={styles.kpi_data_content}>{props.content}</div>
      </div>
    </Card>
  );
};
export default KPIcards;
