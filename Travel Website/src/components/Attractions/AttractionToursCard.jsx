import React from "react";

const AttractionToursCard = ({ data }) => {
  const { image, name, description } = data;

  return (
    <div
      style={{
        width: "300px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        background: "#fff",
        fontFamily: "sans-serif",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "20rem",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "2rem" }}>
        <p
          style={{
            fontSize: "12px",
            color: "#888",
            marginBottom: "6px",
            letterSpacing: "1px",
          }}
        >
          {description}
        </p>

        <h3 style={{ marginBottom: "14px", fontSize: "20px" }}>{name}</h3>

        <button
          style={{
            padding: "10px 16px",
            border: "none",
            background: "#0d6efd",
            color: "#fff",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          SELECT DATES
        </button>
      </div>
    </div>
  );
};

export default AttractionToursCard;
