import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cards from "./Cards";

const Home = () => {
  const [car, setCar] = useState([]);

  async function getCarDetails() {
    try {
      const res = await axios.get("http://localhost:3000/", {
        withCredentials: true,
      });
      setCar(res.data.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getCarDetails();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:3000/${id}`, {
        withCredentials: true,
      });
      toast.success("Car Deleted Successfully");
      getCarDetails();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div
      style={{
        maxWidth: "90%",
        margin: "2rem auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {car.map((car) => (
        <Cards key={car.id} car={car} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Home;
