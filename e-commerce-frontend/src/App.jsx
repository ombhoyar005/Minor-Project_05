import { Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Footer from "../src/components/Footer.jsx";

function App() {
  return(
    <>
      <Navbar />
      
      <Routes>

        <Route path="/" element={<Home />}  />
        <Route path="/products" element={<Products />}  />
        <Route path="/product/:id" element={<ProductDetails />}  />
        <Route path="/cart" element={<Cart />}  />
      
      </Routes>
      
      <Footer />
    </>
  )
}

export default App;
