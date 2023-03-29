import { customButton, flexBox } from "../../styles";
import Card from "./Card";

const CustomButton = (props) => {
  const passValue = (event) => {
    props.onPressed(event.target.value);
  };
  return (
    <Card mode="1" className="custom_button">
      <button
        className="button"
        type={props.type}
        style={{ ...flexBox, ...customButton, ...props.style }}
        value={props.value}
        onClick={passValue}
      >
        {props.label}
      </button>
    </Card>
  );
};
export default CustomButton;
