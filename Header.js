import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        marginBottom: "10px",
      }}
    >
      <Link to="/" style={{ fontSize: "22px", fontWeight: "bold" }}>
        🌿 Plant Shop
      </Link>

      <div>
        <Link to="/products" style={{ marginRight: "20px" }}>
          Products
        </Link>

        <Link to="/cart" style={{ fontWeight: "bold" }}>
          🛒 {totalItems}
        </Link>
      </div>
    </div>
  );
}

