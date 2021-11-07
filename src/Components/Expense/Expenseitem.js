import './Expenseitem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import React from 'react';



const Expenseitem = (props) =>
{
   
      // const [title,setTitle]=useState(props.title);
    
    // const changeTitle =() =>
    // {
    //   setTitle('Lamborghini')
    // }
    return (
      
      <li>
    <Card className="expense-item">
  
    
       <ExpenseDate dates={props.dates}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₹{props.amount}</div>
          {/* <button onClick={changeTitle}>Change Title</button> */}
        </div>

    </Card>
    </li>
    );
}

export default Expenseitem;