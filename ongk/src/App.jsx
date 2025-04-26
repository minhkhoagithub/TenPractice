import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header.jsx'
import ListProduct from './component/ListProduct.jsx'
import Counter from './component/Counter.jsx'
import CounterReducer from './component/CounterReducre.jsx'
import TodoList from './component/TodoList.jsx'
import TodoListReducer from './component/TodoListReducer.jsx'
import CountTime from './component/CountTime.jsx'
import CountTimeReducer from './component/CountTimeReducer.jsx'
import Item from './component/Item.jsx'
import MemoTest from './component/MemoTest.jsx'
import VDuseMemo from './component/VDuseMemo.jsx'
import ThemeToggle from "./component/TheemToogle.jsx"; // import component vừa tách ra
import "./css/style.css";
import { CartProvider } from "./component/CartContext.jsx";
import Cart from "./component/Cart.jsx";
import ProductList from "./component/ProductList.jsx";
function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
     
       <TodoListReducer />
       <div className={`app ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <h1>Hello World!</h1>
      <CartProvider>
      <h1>🛍 Cửa hàng</h1>
      <ProductList />
      <Cart />
    </CartProvider>
    </div>
        
      </>
  )
}

export default App
