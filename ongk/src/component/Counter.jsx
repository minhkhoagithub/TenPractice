
import { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
     const handleIncrease = () => {
        setCount(count + 1);
    }
    const handleDecrease = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        < div className='flex  items-center justify-center bg-amber-100 h-32 w-80 rounded-lg shadow-lg m-auto'>
            <span>Result: {count} </span>
            <button onClick={handleIncrease} className='m-2.5'>Increase</button>
            <button onClick={handleDecrease}className='m-2.5'>Decrease</button>
            <button onClick={handleReset}className='border-2 border-green-600 bg-green-600 m-2.5 '>Reset</button>
        </div>
    )

}

