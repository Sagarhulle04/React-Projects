import React from "react";
import AttractionToursCard from "./AttractionToursCard";

const data = [
  {
    id: 1,
    image: "https://gfxpartner.com/Frolic/images/tour-thumb01.jpg",
    name: "FROM SKAFTAFELL",
    description: "Blue Ice Experience",
  },
  {
    id: 2,
    image: "https://gfxpartner.com/Frolic/images/tour-thumb02.jpg",
    name: "FROM SKAGEN",
    description: "Kayaking by Glacier",
  },
  {
    id: 3,
    image: "https://gfxpartner.com/Frolic/images/tour-thumb03.jpg",
    name: "FROM SKAGEN",
    description: "Glacier Discovery",
  },
];

const AttractionTours = () => {
  return (
    <div
      style={{
        backgroundColor: "#f4fbff",
        paddingBottom: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "80%",
          margin: "0 auto",
          paddingTop: "2rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "4rem",
              wordSpacing: "0.5rem",
              fontWeight: "400",
            }}
          >
            Related Adventure Tours
          </h1>
          <img
            src="https://gfxpartner.com/Frolic/images/title-seperator.png"
            alt=""
          />
        </div>
      </div>

      <div
        style={{
          maxWidth: "80%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          padding: "3rem",
        }}
      >
        {data.map((tour) => (
          <AttractionToursCard key={tour.id} data={tour} />
        ))}
      </div>
    </div>
  );
};

export default AttractionTours;
