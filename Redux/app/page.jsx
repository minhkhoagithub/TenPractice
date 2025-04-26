"use client"

import { Provider } from "react-redux"
import { store } from "@/lib/store"
import Counter from "@/components/counter"

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Redux Counter App</h1>
        <Counter />
      </main>
    </Provider>
  )
}
