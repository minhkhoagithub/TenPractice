import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/productSlice";

function ProductList() {
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <button onClick={() => dispatch(setProducts([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Điện thoại" },
      ]))}>
        Load sản phẩm
      </button>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
