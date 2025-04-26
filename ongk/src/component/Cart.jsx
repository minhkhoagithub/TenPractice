import { useCart } from "./CartContext.jsx";

function Cart() {
  const { cartItems, removeItem, updateQuantity, totalQuantity, totalPrice } = useCart();

  return (
    <div>
      <h2>🛒 Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm nào.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}₫ x
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
              />
              <button onClick={() => removeItem(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <p>Tổng số lượng: {totalQuantity}</p>
      <p>Tổng tiền: {totalPrice.toLocaleString()}₫</p>
    </div>
  );
}

export default Cart;
