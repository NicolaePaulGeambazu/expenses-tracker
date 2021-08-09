import Card from "./Card";
import ExpensesDate from "./ExpensesDate";
import {
  ExpenseAmount,
  ExpenseDetails,
  ExpensesItem,
  ExpenseTitle,
} from "./style/expenseItems.style";

function ExpenseItem(props) {
  return (
    <Card>
      <ExpensesItem>
        <ExpensesDate date={props.date} />
        <ExpenseDetails>
          <ExpenseTitle>{props.title}</ExpenseTitle>
          <ExpenseAmount>£{props.amount}</ExpenseAmount>
        </ExpenseDetails>
      </ExpensesItem>
    </Card>
  );
}

export default ExpenseItem;
