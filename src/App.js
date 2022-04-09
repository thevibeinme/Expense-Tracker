// import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toiler Paper',
      amount: 94.12,
      date: new Date(2022, 4, 8),
    },
    {
      id: 'e2',
      title: 'Car Insuaranace',
      amount: 934.12,
      date: new Date(2022, 4, 6),
    },
    {
      id: 'e3',
      title: 'Ram Upgradation',
      amount: 3322.2,
      date: new Date(2022, 4, 1),
    },
    {
      id: 'e4',
      title: 'Slipper',
      amount: 300.2,
      date: new Date(2022, 4, 6),
    },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log('Main App');
    console.log(expenseData);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
