import React, { Component } from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.dates.toLocaleString("en-US", { month: "long" });
  const day = props.dates.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dates.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
