import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './EpenseFilter';

import './Expenses.css';
function Expenses(props) {
  const [year, setYear] = useState('2019');
  const changeYearHandler = (year) => {
    setYear(year);
  };
  let newItem;
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onChangeYear={changeYearHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
