// import logo from './logo.svg';
// import './App.css';
import { incrementByAmount } from './features/counter/counterSlice';
import {decrement, increment, incrementByAmount} from './counterSlice';
import React, { Component, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';



const count = useSelector(state => state.counter.value);
const [counter, setCounter] = React.useState(0);
const dispatch = useDispatch()

const handleIncrement = event => {
    setCounter(event.target.value)
}


export default function Counter() {
    return (
        <div>
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                value={counter}
                onChange={(e) => setCounter(e.target.value)}
            />

            <Button variant = "contained" onClick={() => dispatch(incrementByAmount(increment))}>
                Increment
            </Button>
            <span>
                {count}
            </span>
        </div>
        

    )
}

// export default Counter;




