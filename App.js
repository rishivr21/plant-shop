// This is a feature update test change

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductListingPage from "./pages/ProductListingPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <h1>Welcome to the Updated Plant Shop 🌱 (Feature Update)</h1>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
