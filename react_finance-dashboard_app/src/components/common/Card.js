import styles from "../../styles/components/CustomComponentStyles.module.css";
const Card = (props) => {
  const ids = props.id;
  return (
    <div
      className={`${styles.card} " " ${props.className}`}
      onClick={props.onClick}
      id={ids}
    >
      {props.children}
    </div>
  );
};
export default Card;
