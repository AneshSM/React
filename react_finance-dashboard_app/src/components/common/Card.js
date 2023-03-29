const Card = (props) => {
  const ids = props.id;
  return (
    <div style={{}} id={ids}>
      {props.children}
    </div>
  );
};
export default Card;
