import styles from "../../styles/components/CustomComponentStyles.module.css";
const CustomButton = (props) => {
  const passValue = (event) => {
    props.onPressed(event.target.value);
  };
  return (
    <button
      className={props.className || styles.button}
      type={props.type}
      style={{}}
      value={props.value}
      onClick={passValue}
    >
      {props.label}
    </button>
  );
};
export default CustomButton;
