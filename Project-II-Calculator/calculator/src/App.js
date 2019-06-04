import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import Display from './components/DisplayComponents/CalculatorDisplay'


const App = () => {
  
  return (
    <div className='main-container'>
      <Display />
      <NumberButton  />
    </div>
  );
};

export default App;
