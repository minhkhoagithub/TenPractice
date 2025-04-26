import React, { useState } from 'react'
import { useMemo } from 'react';
export default function VDuseMemo() {
    const [todos, setTodos] = useState([]);
    const [salary, setSalary] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const handleClick = () => {
        setTodos([...todos, {
            name: inputValue,
            salary: salary
        }]);
        setInputValue('');
        setSalary(0);
    }
    const total = useMemo(() => {
         const result = todos.reduce((total, todo) => {
            return total + Number(todo.salary);
        }, 0)
        return result;
    }, [todos])

    return (
        <>
            <h1>VDuseMemo</h1>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                type="text" 
                placeholder="Enter your task"
                className='border-2 border-green-600 m-2.5 '
             />
             <input 
                value={salary}
                onChange={e => setSalary(e.target.value)}
                type="text"
                placeholder="Enter salary"
                className='border-2 border-green-600 m-2.5 ' 
             />
            <span>Total: {total}</span>
            <button onClick={handleClick} className='bg-amber-300'>Add</button>
            <ul>
                {todos.map((todo,index) =>(
                    <li key={index}>
                        {todo.name} - {todo.salary}
                    </li>
                ))}
            </ul>
        </>
    )
}
