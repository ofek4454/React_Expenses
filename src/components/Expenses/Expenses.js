import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import YearFilter from "./YearFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filter, setFilter] = useState(2023);

  const filterSetHandler = (year) => {
    setFilter(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  return (
    <div>
      <Card className="expenses">
        <YearFilter value={filter} onFilterSet={filterSetHandler} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
