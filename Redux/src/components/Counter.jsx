"use client"

import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../features/counter/counterSlice"
import "./Counter.css"

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="counter">
      <div className="count">{count}</div>
      <div className="buttons">
        <button className="button decrement" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="button increment" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
