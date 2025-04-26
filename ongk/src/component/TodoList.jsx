import React, { useRef, useState } from 'react'
import { useReducer } from 'react'
export default function TodoList() {
    const ref = useRef();
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleClick = () =>{
        setTodos([...todos,inputValue]);
        setInputValue('');
        ref.current.focus();
    }
    return (
        <div >
            <h2>TodoList</h2>
            <input
            ref={ref}
            value={inputValue}
            type="text"
            placeholder="Enter your task"
            className='border-2 border-green-600 m-2.5 '
            onChange={e => setInputValue(e.target.value)}
            ></input>
            <button onClick={handleClick} className='border-2 border-green-600 bg-green-600 m-2.5 '>Add</button>
            <ul>
                {todos.map((todo, index) =>(
                    <li key={index} className='border-2 border-green-600 m-2.5 '>
                        {todo}
                        <button onClick={() => {
                            const newTodos = todos.filter((_, i) => i !== index);
                            setTodos(newTodos);
                        }} className='border-2 border-green-600 bg-green-600 m-2.5 '>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
