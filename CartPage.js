import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, deleteItem } from "../features/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const cartArray = Object.values(items);

  const totalCost = cartArray.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      <p>Total Items: {cartArray.length}</p>
      <p>Total Cost: ₹{totalCost}</p>

      {cartArray.map((item) => (
        <div
          key={item.id}
          style={{
            background: "white",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <img src={item.img} width="100" alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.qty}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

          <button
            onClick={() => dispatch(deleteItem(item.id))}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}

      <button
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
        }}
      >
        Coming Soon
      </button>

      <br />

      <Link to="/products">
        <button style={{ marginTop: "10px" }}>Continue Shopping</button>
      </Link>
    </div>
  );
}
