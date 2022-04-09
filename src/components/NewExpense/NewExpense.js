import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense(props) {
  function loadData(expenseData) {
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveGetData={loadData} />
    </div>
  );
}

export default NewExpense;
