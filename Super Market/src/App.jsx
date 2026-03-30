import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DummyProduct from "./components/DummyProduct";
import AppLayout from "./components/AppLayout";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<DummyProduct />} />
              <Route path="/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
