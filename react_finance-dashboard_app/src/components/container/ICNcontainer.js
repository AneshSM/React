import { COLOR } from "../../constants";
import { Card } from "../common";
const icn = {
  icnContainer: {
    height: "100%",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    padding: "10px",
    paddingBottom: "6px",
    backgroundColor: COLOR.color_30,
  },
};
const ICNcontainer = (props) => {
  return (
    <div style={icn.icnContainer}>
      <Card style={icn.icon}>{props.icn}</Card>
    </div>
  );
};
export default ICNcontainer;
