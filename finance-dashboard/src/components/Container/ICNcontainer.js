import "../../styles/ComponentStyles/containerStyles/ICNcontainer.css";
import Card from "../Wrapper/Card";
const ICNcontainer = (props) => {
  return (
    <div className="icnContainer">
      <Card className="icon">{props.icn}</Card>
    </div>
  );
};
export default ICNcontainer;
