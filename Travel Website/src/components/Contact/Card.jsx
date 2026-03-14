import React from "react";

const data = [
  {
    id: 1,
    image: "https://gfxpartner.com/Frolic/images/office01.jpg",
    name: "FROLIC INC.",
    description:
      "GFXPARTNER INC. 30 Aarhus, Denmark. Phone: 123 456 7890, info@gfxpartner.com",
  },
  {
    id: 2,
    image: "https://gfxpartner.com/Frolic/images/office02.jpg",
    name: "FROLIC INC.",
    description:
      "GFXPARTNER INC. 30 Aarhus, Denmark. Phone: 123 456 7890, info@gfxpartner.com",
  },
  {
    id: 3,
    image: "https://gfxpartner.com/Frolic/images/office03.jpg",
    name: "FROLIC INC.",
    description:
      "GFXPARTNER INC. 30 Aarhus, Denmark. Phone: 123 456 7890, info@gfxpartner.com",
  },
  {
    id: 4,
    image: "https://gfxpartner.com/Frolic/images/office04.jpg",
    name: "FROLIC INC.",
    description:
      "GFXPARTNER INC. 30 Aarhus, Denmark. Phone: 123 456 7890, info@gfxpartner.com",
  },
];

const Card = () => {
  return (
    <div
      style={{
        backgroundColor: "#f4fbff",
        padding: "3rem 0",
      }}
    >
      <div
        style={{
          padding: "rem",
          maxWidth: "70%",
          margin: "0 auto",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              width: "30rem",
              display: "flex",
              gap: "1rem",
              backgroundColor: "white",
            }}
          >
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />

            <div style={{ lineHeight: "1.8rem", marginTop: "0.5rem" }}>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "500",
                }}
              >
                {item.name}
              </h3>

              <p style={{ fontSize: "0.9rem" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
