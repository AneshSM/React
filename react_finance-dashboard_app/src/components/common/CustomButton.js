import Card from "./Card";

const CustomButton = (props) => {
  const passValue = (event) => {
    props.onPressed(event.target.value);
  };
  return (
    <Card mode="1" className="custom_button">
      <button
        className={props.className}
        type={props.type}
        style={{}}
        value={props.value}
        onClick={passValue}
      >
        {props.label}
      </button>
    </Card>
  );
};
export default CustomButton;
