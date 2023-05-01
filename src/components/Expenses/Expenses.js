import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExspenseItem";
import Card from "../UI/Card";
import YearFilter from "./YearFilter";

const Expenses = (props) => {
  const expenses = props.expenses;

  const [filter, setFilter] = useState(2023);

  const filterSetHandler = (year) => {
    setFilter(year);
  };

  return (
    <div>
      <Card className="expenses">
        <YearFilter value={filter} onFilterSet={filterSetHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
