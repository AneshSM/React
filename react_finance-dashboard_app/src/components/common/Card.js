import { cardStyle, flexBox } from "../../styles";

const Card = (props) => {
  const ids = props.id;
  return (
    <div style={{ ...flexBox, ...cardStyle.card, ...props.style }} id={ids}>
      {props.children}
    </div>
  );
};
export default Card;
