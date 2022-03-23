import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="item">
      <ExpenseDate date={props.item.date} />
      <div className="title">{props.item.title}</div>
      <div className="amount">
        <p>${props.item.amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
