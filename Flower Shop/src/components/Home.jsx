import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Home = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:3000/");
        const data = res.data;
        setFlowers(data.message || []);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  console.log(flowers);

  return (
    <div
      style={{ maxWidth: "90%", margin: "auto" }}
      className="d-flex flex-wrap gap-3"
    >
      {flowers.map((flower) => (
        <Cards key={flower.id} flower={flower} />
      ))}
    </div>
  );
};

export default Home;
