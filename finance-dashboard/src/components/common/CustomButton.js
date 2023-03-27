import "../../styles/ComponentStyles/commonStyles/CustomButton.css";
import Card from "../Wrapper/Card";
const CustomButton = (props) => {
  const passValue = (event) => {
    props.onPressed(event.target.value);
  };
  return (
    <Card mode="1" className="custom_button">
      <button
        className="button"
        type={props.type}
        style={props.style}
        value={props.value}
        onClick={passValue}
      >
        {props.label}
      </button>
    </Card>
  );
};
export default CustomButton;
