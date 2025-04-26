import React, { useReducer } from 'react'
export default function CounterReducer() {
    // const [count, setCount] = useState(0);
    const INCREASE = 'increase';
    const DECREASE = 'decrease';
    const RESET = 'reset';
    const innitialCount = 0;
    const reducer = (state, action) => {
        switch (action) {
            case INCREASE: return state +1
                  
            case DECREASE:
                return state - 1
            case RESET:
                return innitialCount
            default:
                return state
        }
        
    } 
    const [state, dispatch] = useReducer(reducer, innitialCount);
    const handleIncrease = () => {
        dispatch(INCREASE);
    }
    const handleDecrease = () => {
       dispatch(DECREASE);
    }
    const handleReset = () => {
        dispatch(RESET);
    }
    return (
        < div className='flex  items-center justify-center bg-amber-100 h-32 w-80 rounded-lg shadow-lg m-auto'>
            <span>Result: {state} </span>
            <button onClick={handleIncrease} className='m-2.5'>Increase</button>
            <button onClick={handleDecrease}className='m-2.5'>Decrease</button>
            <button onClick={handleReset}className='border-2 border-green-600 bg-green-600 m-2.5 '>Reset</button>
        </div>
    )

}