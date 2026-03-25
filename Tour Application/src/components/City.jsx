import React, { useState } from "react";
import CityCard from "./CityCard";

const City = ({ data }) => {
  const [cities, setCities] = useState(data);
  const [cityName, setCityName] = useState("");

  let filteredCity = cities;

  function handleDeleteCity(id) {
    const updatedCity = cities.filter((c) => c.id !== id);
    setCities(updatedCity);
  }

  if (cityName.length > 2) {
    filteredCity = filteredCity.filter((c) =>
      c.name.toLowerCase().includes(cityName.toLowerCase()),
    );
  }

  return (
    <div
      style={{
        maxWidth: "90%",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <input
        type="text"
        placeholder="Search city..."
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        style={{
          display: "block",
          margin: "1rem auto",
          padding: "0.8rem 1rem",
          width: "300px",
          borderRadius: "25px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {filteredCity.length > 0 ? (
          filteredCity.map((data) => (
            <CityCard key={data.id} data={data} onDelete={handleDeleteCity} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

function NotFound() {
  return <h2 style={{ textAlign: "center", color: "#777" }}>City Not Found</h2>;
}

export default City;
