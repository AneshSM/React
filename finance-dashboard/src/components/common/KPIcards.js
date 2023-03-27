import "../../styles/ComponentStyles/commonStyles/KPIcards.css";
import ICNcontainer from "../Container/ICNcontainer";
import Card from "../Wrapper/Card";
const KPIcards = (props) => {
  return (
    <Card className="kpi_container">
      <ICNcontainer icn={props.icon} />
      <div className="kpi_contents">
        <div className="kpi_title">{props.title}</div>
        <div className="kpi_content">{props.content}</div>
      </div>
    </Card>
  );
};
export default KPIcards;
