import plants from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Plants</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {plants.map((plant) => (
          <div
            key={plant.id}
            style={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "5px",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img src={plant.img} alt={plant.name} width="100%" />

            <h3>{plant.name}</h3>
            <p>Price: ₹{plant.price}</p>
            <p>Category: {plant.category}</p>

            <button
              disabled={cartItems[plant.id]}
              onClick={() => dispatch(addToCart(plant))}
              style={{
                padding: "8px 12px",
                border: "none",
                backgroundColor: cartItems[plant.id] ? "gray" : "green",
                color: "white",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              {cartItems[plant.id] ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
