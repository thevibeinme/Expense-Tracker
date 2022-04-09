import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
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
