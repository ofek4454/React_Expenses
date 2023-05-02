import ExpenseItem from "./ExspenseItem";

const ExpensesList = (props) => {
  return (
    <div>
      {props.expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
};

export default ExpensesList;
