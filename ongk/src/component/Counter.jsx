
// import { useState } from 'react';
// export default function Counter() {
//     const [count, setCount] = useState(0);
//      const handleIncrease = () => {
//         setCount(count + 1);
//     }
//     const handleDecrease = () => {
//         setCount(count - 1);
//     }
//     const handleReset = () => {
//         setCount(0);
//     }
//     return (
//         < div className='flex  items-center justify-center bg-amber-100 h-32 w-80 rounded-lg shadow-lg m-auto'>
//             <span>Result: {count} </span>
//             <button onClick={handleIncrease} className='m-2.5'>Increase</button>
//             <button onClick={handleDecrease}className='m-2.5'>Decrease</button>
//             <button onClick={handleReset}className='border-2 border-green-600 bg-green-600 m-2.5 '>Reset</button>
//         </div>
//     )

// }

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(prev => prev + 1);
  const incrementByAmount = () => setCount(prev => prev + Number(step));
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={increment} className="border">+1</button>
        <button onClick={incrementByAmount} className="border">+Step</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          style={{ width: "60px", textAlign: "center" }}
        />
        <p>Nhập số Step để tăng</p>
      </div>
    </div>
  );
}

export default Counter;

