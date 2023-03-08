import logo from './logo.svg';
import './App.css';
import { incrementByAmount } from './features/counter/counterSlice';
import React, { Component, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';


const Counter = () => {
  const [counter, setCounter] = useState(0);

  <TextField
    id="standard-basic"
    label="Standard"
    variant="standard"
    value = {counter}
    onChange= {(e) => setCounter(e.target.value)}
  />

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
