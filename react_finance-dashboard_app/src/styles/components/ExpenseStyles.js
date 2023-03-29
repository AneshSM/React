import { COLOR } from "../../constants";
const buttonStyle = {
  padding: "15px",
  borderRadius: "5px",
  borderColor: COLOR.color_focus,
  color: COLOR.color_60,
  fontWeight: 600,
  backgroundColor: COLOR.font_color_30,
  boxShadow: `0 1.5px 5px ${COLOR.color_focus}`,
};
//Expense Page Style
const expensePageStyle = {
  expense: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    flexFlow: "column nowrap",
    padding: "20px",
    paddingTop: 0,
    gap: "10px",
    backgroundColor: COLOR.color_60,
  },
};

//Expenses
const expensesStyle = {
  expenses_container: {
    width: "100%",
    justifyContent: "flex-start",
    flex: "1 1 auto",
    flexFlow: "column nowrap",
    gap: "10px",
    position: "relative",
  },
  expenseFilterChart_container: {
    width: "100%",
    flexFlow: "column nowrap",
    position: "sticky",
    top: 0,
    zIndex: 1,
    padding: "10px",
    backgroundColor: COLOR.color_60,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingBottom: "20px",
    paddingTop: "20px",
  },
};
//New Expenses
const new_expensesStyles = {
  new_expense_container: {
    justifyContent: "center",
    width: "100%",
    height: "fit-content",
    padding: "10px",
    backgroundColor: COLOR.color_30,
    flexFlow: " column nowrap",
  },
  add_new_button: { ...buttonStyle },
};

//Expese Form
const expenseFormStyle = {
  buttonStyle: { ...buttonStyle },
  inputStyle: {
    borderRadius: "5px",
    width: "20rem",
    padding: "5px",
  },
  new_expense_form: {
    width: "100%",
    flexFlow: "column nowrap",
    color: COLOR.font_color_60,
    padding: "10px",
  },
  new_expense_controls: {
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    flex: " 1 1 auto",
  },
  new_expense_control: {
    flexFlow: "column nowrap",
    alignItems: "flex-start",
    padding: "5px",
  },
  new_expense_actions: {
    width: "100%",
    justifyContent: "end",
    gap: "20px",
  },
};

//Expense Filter
const expenseFilterStyle = {
  expenseFilter_container: {
    width: "100%",
    height: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "10px",
    backgroundColor: COLOR.color_60,
  },
  select: {
    backgroundColor: "#1A1C22",
    padding: "5px",
    borderRadius: "5px",
    color: "#9A9A9A",
    border: ".5px solid #9A9A9A",
  },
  label: { fontSize: "x-large", color: "white" },
};

//Expense Chart
const expenseChartStyle = {
  chart_constainer: {
    width: "100%",
  },
  Chart: {
    width: "100%",
    padding: "10px",
    backgroundColor: " #a9a9a9",
  },
  ChartBar: {
    flexFlow: "column nowrap",
    borderRadius: "20px",
  },
  outer_bar: {
    width: "1rem",
    height: "20vh",
    backgroundColor: COLOR.color_30,
    border: `1px solid ${COLOR.color_60}`,
    justifyContent: "flex-end",
    flexFlow: "column nowrap",
    borderRadius: "20px",
  },
  inner_bar: {
    backgroundColor: COLOR.color_10,
    width: "100%",
    borderRadius: "20px",
  },
  bar_label: {
    color: COLOR.color_60,
  },
};

//Expense List style
const expenseListStyles = {
  expenseList_container: {
    width: "100%",
    flexFlow: "column nowrap",
    gap: "10px",
    overflowY: "auto",
  },
  list_meassage: {
    fontSize: "25px",
    width: "100%",
    color: COLOR.font_color_60,
    backgroundColor: COLOR.color_30,
    padding: "15px",
  },
};

//Expense Item style
const expenseItemStyles = {
  date: { backgroundColor: " #1a1c22" },
  amount: {
    padding: "10px",
    backgroundColor: COLOR.color_10,
    color: COLOR.color_60,
    fontWeight: "900",
    border: "1px solid white",
    fontSize: "18px",
    borderRadius: "10px",
  },
  item_container: {
    backgroundColor: COLOR.color_30,
    color: "white",
    width: "100%",
    justifyContent: "space-between",
    flexFlow: "row nowrap",
    padding: "10px",
    gap: "10px",
  },
  item_title: {
    justifyContent: "flex-start",
    fontSize: "30px",
    fontWeight: "500",
    flex: "1 1 auto",
  },
};
export {
  expensePageStyle,
  expenseFormStyle,
  new_expensesStyles,
  expenseFilterStyle,
  expenseChartStyle,
  expenseItemStyles,
  expenseListStyles,
  expensesStyle,
};
