import TaskExpenses from "./components/Expenses/TaskExpenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";
import dummyData from "./data/dummyData";

function App() {
  const [dummy, setDummy] = useState(dummyData);

  const addDataHandler = (newExpenseData) => {
    console.log("From the parent of NewExpenses - App.js");
    console.log(newExpenseData);
    setDummy((prev) => [newExpenseData, ...prev]);
  };

  return (
    <div>
      <NewExpense onAddData={addDataHandler} />
      <TaskExpenses dummy={dummy} />
    </div>
  );
}

export default App;
