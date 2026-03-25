import React, { useState } from "react";

const CityCard = ({ data, onDelete }) => {
  const [descrip, setDescrip] = useState(false);

  function handleDescription() {
    setDescrip(!descrip);
  }

  function handleDeleteCity(id) {
    onDelete(id);
  }

  return (
    <div
      style={{
        width: "280px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        transition: "transform 0.3s ease",
        backgroundColor: "#fff",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={data.image}
        alt="city"
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "1rem" }}>
        <h2 style={{ margin: "0", fontSize: "1.5rem", color: "#333" }}>
          {data.name}
        </h2>

        <p style={{ margin: "0.5rem 0", color: "#2e7d32", fontWeight: "bold" }}>
          ₹ {data.price}
        </p>

        <p style={{ fontSize: "0.9rem", color: "#555" }}>
          {data.description.slice(0, descrip ? data.description.length : 120)}
          <span
            onClick={handleDescription}
            style={{
              color: "#1976d2",
              cursor: "pointer",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {descrip ? "Read Less" : "Read More"}
          </span>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#1976d2",
              color: "#fff",
              border: "none",
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => alert(`Tour booked with sagar to ${data.name}`)}
          >
            Book
          </button>

          <button
            style={{
              backgroundColor: "#d32f2f",
              color: "#fff",
              border: "none",
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => handleDeleteCity(data.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
