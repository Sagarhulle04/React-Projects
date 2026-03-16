import React from "react";

const CustomerReviewCard = ({ data }) => {
  const { image, name, description, stars } = data;

  return (
    <div
      style={{
        width: "17rem",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        background: "#fff",
        fontFamily: "sans-serif",
        transition: "transform 0.3s ease",
        padding: "1rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        {[...Array(stars)].map((_, star) => (
          <span key={star} style={{ color: star < stars ? "#f5a623" : "#ddd" }}>
            ⭐
          </span>
        ))}
      </div>

      <h3
        style={{
          marginBottom: "1rem",
          fontSize: "25px",
          fontWeight: "200",
          textAlign: "center",
        }}
      >
        {name}
      </h3>

      <p
        style={{
          fontSize: "1rem",
          marginBottom: "6px",
          letterSpacing: "1px",
          fontWeight: "200",
        }}
      >
        {description}
      </p>
      <img
        src={image}
        alt={name}
        style={{
          marginTop: "1.6rem",
          width: "5rem",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default CustomerReviewCard;
