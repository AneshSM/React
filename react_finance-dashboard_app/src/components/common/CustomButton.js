const CustomButton = (props) => {
  return (
    <button className={props.classes.button_Classes} type={props.type}>
      {props.label}
    </button>
  );
};
export default CustomButton;
