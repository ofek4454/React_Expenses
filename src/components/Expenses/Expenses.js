import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import YearFilter from "./YearFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState("all");

  const filterSetHandler = (year) => {
    setFilter(year);
  };

  const filteredExpenses =
    filter === "all"
      ? props.expenses
      : props.expenses.filter(
          (expense) => expense.date.getFullYear().toString() === filter
        );

  filteredExpenses.sort((a, b) => b.date - a.date);
  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <YearFilter value={filter} onFilterSet={filterSetHandler} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
