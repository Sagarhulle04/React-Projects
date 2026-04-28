import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { ToastContainer } from "react-toastify";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
