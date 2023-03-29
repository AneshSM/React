import { ICNcontainer } from "../container";
import Card from "./Card";

const KPIcards = (props) => {
  return (
    <Card style={{}}>
      <ICNcontainer icn={props.icon} />
      <div style={{}}>
        <div style={{}}>{props.title}</div>
        <div style={{}}>{props.content}</div>
      </div>
    </Card>
  );
};
export default KPIcards;
