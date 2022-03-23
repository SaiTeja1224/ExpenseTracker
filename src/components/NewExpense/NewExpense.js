import Card from "../UI/Card";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [formFlip, setformFlip] = useState(false);

  const saveDataHandler = (newExpenseData) => {
    console.log("In the parent of Expense Form - NewExpense.js");
    console.log(newExpenseData);
    newExpenseData.id = Math.random().toString();
    props.onAddData(newExpenseData);
    setformFlip(false);
  };

  const clickFlipHandler = (e) => {
    e.preventDefault();
    setformFlip((prev) => !prev);
  };

  let newExpenseContent = (
    <div className="form-flip-button">
      <button onClick={clickFlipHandler}>Add New Expenses</button>
    </div>
  );

  if (formFlip) {
    newExpenseContent = (
      <ExpenseForm
        onSaveData={saveDataHandler}
        onClickFlipCancel={clickFlipHandler}
      />
    );
  }

  return <Card className="new-expenses">{newExpenseContent}</Card>;
}

export default NewExpense;
