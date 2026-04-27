import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { ToastContainer } from "react-toastify";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}></Route>
        <Route path="/signUp" element={<SignIn />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
