import React, { useRef, useState } from 'react'
import { useReducer } from 'react'
export default function TodoList() {
    const ref = useRef();
    // const [todos, setTodos] = useState([]);
    // const [inputValue, setInputValue] = useState('');
    const initialState = {
        todolist: [],
        inputValue: ''
    }
    const SET_VALUE = 'setValue';
    const ADD_TODO = 'addTodo';
    const DELETE_TODO = 'deleteTodo';

    const setValue = payload =>(
        {
            type: SET_VALUE,
            payload
        }
    )
    const setAdd = payload =>(
        {
            type: ADD_TODO,
            payload
        }
    )
    const setDelete = payload =>(
        {
            type: DELETE_TODO,
            payload
        }
    )
    const reducer = (state, action) => {
        console.log(state, action);
        switch(action.type){
            case SET_VALUE:
                return {
                    ...state,
                    inputValue: action.payload
                    
                }
            case ADD_TODO:
                return {
                    todolist: [...state.todolist, action.payload],
                    inputValue: ''
                }
            case DELETE_TODO:
                return {
                    ...state,
                    todolist: state.todolist.filter((_, index) => index !== action.payload)
                }
        }
    }

    const [todos, setTodos] = useReducer(reducer, initialState);
    const handleClick = () =>{
        setTodos(setAdd(todos.inputValue));
        console.log("running");
        ref.current.focus();
    }
    const{ todolist, inputValue } = todos;
    return (
        <div >
            <h2>TodoList</h2>
            <input
            ref={ref}
            value={inputValue}
            type="text"
            placeholder="Enter your task"
            className='border-2 border-green-600 m-2.5 '
            onChange={e => setTodos(setValue(e.target.value))}
            ></input>
            <button onClick={handleClick} className='border-2 border-green-600 bg-green-600 m-2.5 '>Add</button>
            <ul>
                {todolist.map((todo, index) =>(
                    <li key={index} className='border-2 border-green-600 m-2.5 '>
                        {todo}
                        <button onClick={() => {
                            setTodos(setDelete(index));
                        }} className='border-2 border-green-600 bg-green-600 m-2.5 '>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}