import React, { useRef } from 'react'
 import { useReducer } from 'react'
export default function CountTimeReducer() {
    const initialState = 0
    const INCREASE = 'increase';
    const DECREASE = 'decrease';
    const RESET = 'reset';
    const reducer = (state, action) => {
        switch(action)
        {
            case INCREASE: return state + 1
            case DECREASE: return state - 1
            case RESET: return initialState
            default: return state
        }
    }
    let timeId = useRef();
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleStart = () => {
        timeId.current = setInterval(() => {
            dispatch(INCREASE);
        }, 1000);
        console.log(timeId)
    }
    const handleStop = () => {
        clearInterval(timeId.current);
        console.log(timeId)
    }
    const handleReset = () => {
        clearInterval(timeId.current);
        dispatch(RESET);
      
    }

    return (
        <>
            <h2>Time : {state} s</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
