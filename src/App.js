import "./App.css";
import Card from "./components/Card";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.25,
      data: new Date(2021, 2, 6),
    },
    {
      id: "e2",
      title: "Foor",
      data: new Date(2021, 4, 9),
      amount: 94.25,
    },
    {
      id: "e3",
      title: "Petrol",
      data: new Date(2021, 3, 6),
      amount: 194.25,
    },
    {
      id: "e4",
      title: "Sercice Car",
      data: new Date(2020, 2, 8),
      amount: 594.25,
    },
    {
      id: "e5",
      title: "Paper",
      data: new Date(2021, 2, 5),
      amount: 4.25,
    },
  ];

  return (
  <Card>
    

    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].data}> </ExpenseItem>;
    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].data}> </ExpenseItem>;
    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].data}> </ExpenseItem>;
    <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].data}> </ExpenseItem>;
    <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].data}> </ExpenseItem>
  </Card>
  )
}
export default App;
