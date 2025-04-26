import { useCart } from "./CartContext.jsx";

const products = [
  { id: 1, name: "Cà phê sữa", price: 30000 },
  { id: 2, name: "Trà đào", price: 25000 },
];

function ProductList() {
  const { addItem } = useCart();

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}₫
            <button onClick={() => addItem(p)}>Thêm</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
