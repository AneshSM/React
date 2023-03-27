import "../../styles/ComponentStyles/wrapperStyles/Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  const ids = props.id;
  const cardStyle = {
    boxShadow: props.mode
      ? "0 1px 6px rgba(255, 255, 255, 0.25)"
      : "0 1px 8px rgba(0, 0, 0, 0.45)",
  };
  return (
    <div style={(cardStyle, { ...props.style })} className={classes} id={ids}>
      {props.children}
    </div>
  );
};
export default Card;
