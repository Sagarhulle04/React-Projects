import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Home = () => {
  const [flowers, setFlowers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("http://localhost:3000/");
        const data = res.data;
        setFlowers(data.message);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  let filteredData = flowers;
  if (searchInput.length > 2)
    filteredData = filteredData.filter((flower) =>
      flower.name.toLowerCase().includes(searchInput.toLowerCase()),
    );

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3000/flower/${id}`);
      setFlowers((flowers) => flowers.filter((flower) => flower.id !== id));
      toast.success("flower deleted successfully");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div style={{ maxWidth: "90%", margin: "2rem auto" }}>
      <div style={{ position: "relative", left: "30rem" }}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{
            width: "25rem",

            borderRadius: "0.2rem",
            border: "2px solid gray",
          }}
        />
      </div>
      <div className="d-flex flex-wrap gap-3">
        {filteredData.map((flower) => (
          <Cards key={flower.id} flower={flower} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
