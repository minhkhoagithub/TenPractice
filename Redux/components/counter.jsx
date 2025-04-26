"use client"

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "@/lib/features/counter/counterSlice"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-7xl font-bold">{count}</div>
      <div className="flex gap-4">
        <Button variant="outline" size="lg" onClick={() => dispatch(decrement())} className="h-16 w-16 rounded-full">
          <Minus className="h-6 w-6" />
        </Button>
        <Button size="lg" onClick={() => dispatch(increment())} className="h-16 w-16 rounded-full">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
