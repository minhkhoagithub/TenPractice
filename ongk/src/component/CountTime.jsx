import React, { useRef, useState } from 'react'
// let timeId
export default function CountTime() {
    const [time, setTime] = useState(0);
    
    
    let timeId = useRef();

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
        console.log(timeId)
    }
    const handleStop = () => {
        clearInterval(timeId.current);
        console.log(timeId)
    }
    const handleReset = () => {
        clearInterval(timeId.current);
        setTime(0);
      
    }

    return (
        <>
            <h2>Time : {time} s</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
