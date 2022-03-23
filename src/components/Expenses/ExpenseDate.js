import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-uk", { month: "long" });
  const day = props.date.toLocaleString("en-uk", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="date">
      <p className="month">{month}</p>
      <p className="year">{year}</p>
      <p className="day">{day}</p>
    </div>
  );
}

export default ExpenseDate;
