import { Card } from "../../common";
import { Chart } from "./ExpenseChart";

const ExpensesChart = (props) => {
  const ChartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Agu", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of props.expenses) {
    const monthIndex = expense.date.getMonth();
    ChartDataPoint[monthIndex].value += expense.amount;
  }

  return (
    <Card style={{}}>
      <Chart dataPoints={ChartDataPoint} />
    </Card>
  );
};
export default ExpensesChart;
