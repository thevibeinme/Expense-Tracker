// import logo from './logo.svg';
import './App.css';

import Expenses from './components/Expenses/Expenses';

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
  return (
    <div className="App">
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
