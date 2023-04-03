import { COLOR } from "../../constants";
import { FaBeer } from "react-icons/fa";
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
    <Card className={props.className} style={icn.icnContainer}>
      <FaBeer />
    </Card>
  );
};
export default ICNcontainer;
