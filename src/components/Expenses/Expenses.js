import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './EpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

import './Expenses.css';
function Expenses(props) {
  const [year, setYear] = useState('2022');

  const filterList = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const changeYearHandler = (year) => {
    setYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onChangeYear={changeYearHandler} />
        <ExpenseChart expenses={filterList} />
        <ExpensesList items={filterList} />
      </Card>
    </div>
  );
}

export default Expenses;
