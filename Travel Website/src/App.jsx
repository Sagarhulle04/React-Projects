import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import Footer from "./ui/Footer";
import Contact from "./components/Contact/Contact";
import Navbar from "./ui/Navbar";
import Page from "./components/Pages/Page";
import Attraction from "./components/Attractions/Attraction";
import CheckOut from "./components/Checkout/CheckOut";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pages" element={<Page />} />
          <Route path="attractions" element={<Attraction />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
