import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); //return array with first value at original value of title and next value as function which set new title

  const clickHandler = () => {
    setTitle('New Item');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Click Me</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
//   React.createElement(
//     Card,
//     { className: 'expense-item' },
//     React.createElement(ExpenseDate, { date: props.data }),
//     React.createElement(
//       'div',
//       { className: 'expense-item__description' },
//       React.createElement('h2', {}, props.title),
//       React.createElement(
//         'div',
//         { className: 'expense-item__price' },
//         props.amount
//       )
//     )
//   );
