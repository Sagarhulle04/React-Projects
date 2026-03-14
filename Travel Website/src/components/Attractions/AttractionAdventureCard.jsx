import React from "react";

export const AttractionAdventureCard = ({ data }) => {
  const { image } = data;

  return (
    <div
      style={{
        width: "17em",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "1px 4px 15px rgba(0,0,0,0.1)",
        background: "#fff",
        fontFamily: "sans-serif",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src={image}
        alt="image"
        style={{
          width: "100%",
          height: "28rem",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default AttractionAdventureCard;
