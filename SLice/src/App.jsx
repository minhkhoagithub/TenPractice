import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Provider } from "react-redux";
import store from "./store/store.js";
import Login from "./component/Login.jsx";
import Cart from "./component/Cart.jsx";
import ProductList from "./component/ProductList.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <div style={{ padding: "20px" }}>
      <Login />
      <Cart />
      <ProductList />
    </div>
  </Provider>
  )
}

export default App
