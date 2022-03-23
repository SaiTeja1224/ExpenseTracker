import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const changeHandler = (e) => {
    const reqFilterYear = e.target.value;
    props.onSaveFilterYear(reqFilterYear);
  };
  return (
    <form>
      <div className="filter-year-select">
        <label htmlFor="filter">Filter By Year</label>
        <select id="filter" value={props.selected} onChange={changeHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </form>
  );
}

export default ExpensesFilter;
