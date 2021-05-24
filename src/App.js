import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


export function App() {
  const [counter, setCounter]=useState(8)

  const increment=()=>{
    setCounter(counter+1)

  }
  const decrement=()=>{
    setCounter(counter-1)
  }




  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

