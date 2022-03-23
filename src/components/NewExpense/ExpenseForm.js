import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveData(newExpenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-complete">
        <div className="title-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="date-field">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="amount-field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0"
            step="0.01"
            id="amount"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="submit-form">
        <button type="button" onClick={props.onClickFlipCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
