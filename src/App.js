
import React,{useState} from 'react';

import Expense from './Components/Expense/Expense'

import NewExpense from './Components/New Expense/NewExpense'


const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

const App = () =>{

  const [expenses,setExpense] = useState(dummy_expenses)
  
  const addExpenseHandler= (expense) => {
    
   
    //setExp([expense,...exp])
     setExpense( (prevState) => { 
         return [expense, ...prevState]
      })
    
    // console.log(expenses)
  }

  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
       <Expense items={expenses}/>
     
    </div>
  );
}

export default App;
