import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

let value = true;
function NewExpense(props) {
  const [display, setDisplay] = useState(false);
  // use the change the state of form and button
  const displayHandler = (value) => {
    setDisplay(value);
  };
  // this function is controlled by cancel button in expense form so
  // so whenever clicked it should hide the form back

  const editDisplayHandler = (value) => {
    setDisplay(value);
  };

  function loadData(expenseData) {
    props.onAddExpense(expenseData);
    // console.log(expenseData);
  }

  let content;
  if (display === false) {
    content = <button onClick={displayHandler}>Add New Expense</button>;
  } else {
    content = (
      <ExpenseForm
        displayHandlerCancel={editDisplayHandler}
        onSaveGetData={loadData}
      />
    );
  }

  return (
    <div className="new-expense">
      {content}
      {/* {display === false && (
        <button onClick={displayHandler}>Add New Expense</button>
      )}
      {display === true && <ExpenseForm onSaveGetData={loadData} />} */}
    </div>
  );
}

export default NewExpense;
