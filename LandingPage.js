import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
        backgroundSize: "cover",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "50px",
      }}
    >
      <h1>Welcome to the Plant Shop</h1>
      <p>We provide beautiful indoor houseplants to make your home fresh.</p>

      <Link to="/products">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            backgroundColor: "green",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}
