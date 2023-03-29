import { flexBox, kpiCards } from "../../styles";
import { ICNcontainer } from "../container";
import Card from "./Card";

const KPIcards = (props) => {
  return (
    <Card style={(flexBox, kpiCards.kpi_container)}>
      <ICNcontainer icn={props.icon} />
      <div style={(flexBox, kpiCards.kpi_contents)}>
        <div style={kpiCards.kpi_title}>{props.title}</div>
        <div style={(flexBox, kpiCards.kpi_content)}>{props.content}</div>
      </div>
    </Card>
  );
};
export default KPIcards;
