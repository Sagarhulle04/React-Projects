import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Create from "./pages/Create";
import AppLayout from "./components/AppLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="edit" element={<Update />} />
            <Route path="add" element={<Create />} />
            <Route path="*" element={<h1>No Page Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
