import { COLOR } from "../../constants";
import { Card } from "../common";
import { FaBeer } from "react-icons/fa";
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
    <div className={props.className} style={icn.icnContainer}>
      <FaBeer />
    </div>
  );
};
export default ICNcontainer;
