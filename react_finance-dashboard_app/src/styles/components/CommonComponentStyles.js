import { COLOR } from "../../constants";

const cardStyle = {
  card: {
    borderRadius: " 10px",
  },
};
const customButton = {
  color: COLOR.color_10,
  fontSize: "15px",
  padding: "5px",
  cursor: "pointer",
  borderRadius: "10px",
  border: `0.1px solid ${COLOR.color_10}`,
  backgroundColor: COLOR.color_30,
};
const customInput = {
  justifyContent: "flex-start",
};
const customDropDown = {
  dropDown_container: {
    width: " 100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: COLOR.font_color_60,
  },
  dropDown_Title: {
    fontSize: "12px",
  },
  dropDown_Option: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    outline: "none",
  },
};
const dateComponent = {
  date_container: {
    border: " 0.5px solid white",
    backgroundColor: COLOR.color_30,
    borderRadius: "15px",
    height: "100%",
    width: "5rem",
    padding: "10px",
    justifyContent: "center",
    flexFlow: "column nowrap",
  },

  monthYear: {
    fontSize: "12px",
    fontWeight: 200,
  },
  date: {
    fontSize: "20px",
    fontWeight: 600,
  },
};

const kpiCards = {
  kpi_container: {
    backgroundColor: COLOR.color_60,
    justifyContent: "space-evenly",
    padding: "10px",
    paddingLeft: "20px",
    gap: "10px",
    width: "214.82px",
    height: "95.75px",
    flex: "1 1 auto",
    border: `0.5px solid ${COLOR.color_30}`,
  },
  kpi_contents: {
    height: "100%",
    justifyContent: "space-evenly",
    flexFlow: "column nowrap",
    paddingLeft: "10px",
    flex: " 1 1 auto",
    fontFamily: '"Poppins", sans-serif',
  },
  kpi_title: {
    color: COLOR.font_color_60,
    fontSize: "12px",
    fontWeight: 400,
  },
  kpi_content: {
    fontSize: "27px",
    flex: "1 1 auto",
    fontWeight: 500,
  },
};
export {
  cardStyle,
  customButton,
  customDropDown,
  customInput,
  dateComponent,
  kpiCards,
};
