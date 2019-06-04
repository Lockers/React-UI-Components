import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import Display from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  
  return (
    <div className='main-container'>
      <Display />
      <NumberButton buttonStyle='sign' text='&divide;' />
      <ActionButton buttonStyle='action' text='Clear' />
      <NumberButton buttonStyle='sign' text='X' />
      <NumberButton buttonStyle='number' text='9' />
      <NumberButton buttonStyle='number' text='8' />
      <NumberButton buttonStyle='number' text='7' />
      <NumberButton buttonStyle='sign' text='-' />
      <NumberButton buttonStyle='number' text='6' />
      <NumberButton buttonStyle='number' text='5' />
      <NumberButton buttonStyle='number' text='4' />
      <NumberButton buttonStyle='sign' text='+' />
      <NumberButton buttonStyle='number' text='3' />
      <NumberButton buttonStyle='number' text='2' />
      <NumberButton buttonStyle='number' text='1' />
      <NumberButton buttonStyle='sign' text='=' />
      <ActionButton buttonStyle='action' text='0' />
      

    </div>
  );
};

export default App;
