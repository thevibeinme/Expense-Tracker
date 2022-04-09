import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  const [originalTitle, setOriginalTitle] = useState('');
  const [originalAmount, setOriginalAmount] = useState('');
  const [originalDate, setOriginalDate] = useState('');

  const titleChangeHandler = (event) => {
    setOriginalTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setOriginalAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setOriginalDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: originalTitle,
      amount: originalAmount,
      date: new Date(originalDate).toString(),
    };
    setOriginalAmount('');
    setOriginalDate('');
    setOriginalTitle('');
    props.onSaveGetData(expenseData);

    // console.log(expenseData);

    // console.log(event);
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={originalTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="1.0"
            step="1.1"
            value={originalAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            value={originalDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
