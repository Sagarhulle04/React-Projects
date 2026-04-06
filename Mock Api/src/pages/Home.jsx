import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Home = () => {
  const [flowersData, setFlowersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          "https://69d33482336103955f8ea792.mockapi.io/yes/addFlower",
        );
        setFlowersData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [flowersData]);

  async function handleDelete(id) {
    await axios.delete(
      `https://69d33482336103955f8ea792.mockapi.io/yes/addFlower/${id}`,
    );
    alert("deleted");
  }

  if (isLoading) {
    return <h1 className="text-center "> Loading </h1>;
  }

  return (
    <div className="p-3">
      <h1>Flowers Data</h1>
      <div className="d-flex gap-3 flex-wrap ">
        {flowersData.map((flower) => (
          <Cards key={flower.id} flower={flower} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
