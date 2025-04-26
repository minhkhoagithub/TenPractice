import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <button onClick={() => dispatch(addItem({ id: 1, name: "Sản phẩm A" }))}>
        Thêm sản phẩm
      </button>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => dispatch(removeItem(item.id))}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
