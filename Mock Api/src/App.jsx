import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Create from "./pages/Create";
import AppLayout from "./components/AppLayout";
import { ProductProvider } from "./context/ProductProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="edit/:id" element={<Update />} />
              <Route path="add" element={<Create />} />
              <Route path="*" element={<h1>No Page Found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  );
};

export default App;
