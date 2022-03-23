import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./TaskExpenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import chartPlotData from "../../data/chartPlotData";
import Chart from "../Charts/Chart";

function TaskExpenses(props) {
  const [filterYear, setFilterYear] = useState("2019");

  const filteredDummyData = props.dummy.filter(
    (i) => i.date.getFullYear().toString() === filterYear
  );

  chartPlotData.forEach((o) => {
    o.value = 0;
  });
  filteredDummyData.forEach((obj1) => {
    let month = obj1.date.toLocaleString("en-uk", { month: "short" });
    chartPlotData.find((o, i) => {
      if (month === o.label) {
        chartPlotData[i].value += 1;
      }
    });
  });

  let content = <p>No available expenses for the year {filterYear}</p>;
  if (filteredDummyData.length > 0) {
    content = filteredDummyData.map((i) => <ExpenseItem item={i} key={i.id} />);
  }

  const saveFilterYearHandler = (enteredFilterYear) => {
    setFilterYear(enteredFilterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSaveFilterYear={saveFilterYearHandler}
      />
      <Chart plotData={chartPlotData} />
      {content}
    </Card>
  );
}

export default TaskExpenses;
