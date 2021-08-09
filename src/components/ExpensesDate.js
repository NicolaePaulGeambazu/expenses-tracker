import { Day, ExpenseDate, Month, Year } from "./style/expenseItems.style";

function ExpensesDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <ExpenseDate>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </ExpenseDate>
  );
}

export default ExpensesDate;
