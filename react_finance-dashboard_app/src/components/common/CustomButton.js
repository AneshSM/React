import styles from "../../styles/components/CustomComponentStyles.module.css";
const CustomButton = (props) => {
  return (
    <button className={props.className || styles.button} type={props.type}>
      {props.label}
    </button>
  );
};
export default CustomButton;
