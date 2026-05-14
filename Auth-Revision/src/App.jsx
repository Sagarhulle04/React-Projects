import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Admin from "./components/Admin";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index />
            <Route path="home" element={<Home />} />
            <Route path="student" element={<Student />} />
            <Route path="teacher" element={<Teacher />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
