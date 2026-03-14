import React from "react";
import PopularToursCard from "./PopularToursCard";

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
  {
    id: 4,
    image: "https://gfxpartner.com/Frolic/images/tour-thumb04.jpg",
    name: "LAUGAVEGUR TRAIL",
    description: "Laugavegur Trek Classic (Huts)",
  },
  {
    id: 5,
    image: "https://gfxpartner.com/Frolic/images/tour-thumb05.jpg",
    name: "FROM DENMARK",
    description: "The Wonders of Copenhagen",
  },
  {
    id: 6,
    image: "https://gfxpartner.com/Frolic/images/tour-thumb06.jpg",
    name: "FROM SKAGEN",
    description: "Take a Walk on the Green Side",
  },
];

const PopularTours = () => {
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
              width: "30rem",
              fontSize: "4rem",
              wordSpacing: "0.5rem",
              fontWeight: "500",
            }}
          >
            Most Popular Tours
          </h1>
          <img
            src="https://gfxpartner.com/Frolic/images/title-seperator.png"
            alt=""
          />
        </div>

        <p
          style={{
            width: "30rem",
            marginLeft: "auto",
            wordSpacing: "0.5rem",
            letterSpacing: "0.1rem",
            fontWeight: "400",
            color: "black",
            fontSize: "1.2rem",
          }}
        >
          Orci varius natoque penatibus et magnis dis turient montes nascetur
          ridiculus mus. Cras eleifend tellus sed congue consectetur, velit
          turpis faucibus odio eget volutpat odio lectus eu erat.
        </p>
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
          <PopularToursCard key={tour.id} data={tour} />
        ))}
      </div>

      <button
        style={{
          maxWidth: "80%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 3.5rem",
          fontSize: "1.2rem",
          color: "white",
          backgroundColor: "orange",
          borderRadius: "1rem",
          border: "none",
        }}
      >
        LOAD MORE
      </button>
    </div>
  );
};

export default PopularTours;
