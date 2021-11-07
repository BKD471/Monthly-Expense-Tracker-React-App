import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {

        const saveExpenseDataHandler=(entrdExpenseData) => {
            const expenseData={
                ...entrdExpenseData,
                id:Math.random().toString()
            };
           
            props.onAddExpense(expenseData)
            setIsEditing(false)
        };
       const [isEditing,setIsEditing]=useState(false)

       const cancelEditing = () => {
           setIsEditing(false)
       }
       const startEditing = () => {

          setIsEditing(true)
       }
       
  return (
         <div className="new-expense">
            {!isEditing &&  <button type="button" onClick={startEditing}>Add New Expenses</button> }
            { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditing}/>}
         </div>
         );

};


export default NewExpense;