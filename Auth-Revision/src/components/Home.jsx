import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));

  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      const payload = token.split(".")[1];

      const decoded = JSON.parse(atob(payload));

      if (decoded.role === "teacher") navigate("/teacher");
      if (decoded.role === "student") navigate("/student");
      if (decoded.role === "admin") navigate("/admin");
    }
  }, [token, navigate]);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
