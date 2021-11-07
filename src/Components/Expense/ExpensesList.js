import React, { Component } from "react";
import "./ExpensesList.css";

import Expenseitem from "./Expenseitem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expenseitem
          key={expense.id}
          dates={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
