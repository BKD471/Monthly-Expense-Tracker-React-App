import Card from '../UI/Card';
import Expenseitem from './Expenseitem'
import './Expense.css'
import ExpensesFilter from './ExpensesFilter'
import React, { useState } from 'react'

import ExpensesChart from './ExpenseseChart'

import ExpenseList from './ExpensesList';

const NewExpense = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const yearChangeHandler = (val) => {
    setFilteredYear(val)
  }

  const filteredExpenses= props.items.filter( (expense) => {
    return expense.date.getFullYear().toString()=== filteredYear
  });
  

   
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelecting={yearChangeHandler} />
      {/* {props.items.map(expense => <Expenseitem key={expense.id} dates={expense.date} title={expense.title} amount={expense.amount} />)} */}
      
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList  items={filteredExpenses}/>
      
    </Card>
  );

}

export default NewExpense;