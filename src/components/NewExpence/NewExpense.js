import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const changeFormVisibility = () => {
    setShowForm((old) => !old);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={changeFormVisibility}>Add new expense</button>
      ) : (
        <ExpenseForm
          onSubmit={props.onSubmit}
          changeFormVisibility={changeFormVisibility}
        />
      )}
    </div>
  );
};

export default NewExpense;
