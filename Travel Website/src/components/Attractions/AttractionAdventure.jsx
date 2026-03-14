import React from "react";
import AttractionAdventureCard from "./AttractionAdventureCard";

const data = [
  {
    id: 1,
    image: "https://gfxpartner.com/Frolic/images/attractions01.jpg",
  },
  {
    id: 2,
    image: "https://gfxpartner.com/Frolic/images/attractions02.jpg",
  },
  {
    id: 3,
    image: "https://gfxpartner.com/Frolic/images/attractions03.jpg",
  },
  {
    id: 4,
    image: "https://gfxpartner.com/Frolic/images/attractions04.jpg",
  },
  {
    id: 5,
    image: "https://gfxpartner.com/Frolic/images/attractions05.jpg",
  },
  {
    id: 6,
    image: "https://gfxpartner.com/Frolic/images/attractions06.jpg",
  },
  {
    id: 7,
    image: "https://gfxpartner.com/Frolic/images/attractions07.jpg",
  },
  {
    id: 8,
    image: "https://gfxpartner.com/Frolic/images/attractions08.jpg",
  },
  {
    id: 9,
    image: "https://gfxpartner.com/Frolic/images/attractions09.jpg",
  },
  {
    id: 10,
    image: "https://gfxpartner.com/Frolic/images/attractions10.jpg",
  },
  {
    id: 11,
    image: "https://gfxpartner.com/Frolic/images/attractions11.jpg",
  },
  {
    id: 12,
    image: "https://gfxpartner.com/Frolic/images/attractions12.jpg",
  },
  {
    id: 13,
    image: "https://gfxpartner.com/Frolic/images/attractions13.jpg",
  },
  {
    id: 14,
    image: "https://gfxpartner.com/Frolic/images/attractions14.jpg",
  },
  {
    id: 15,
    image: "https://gfxpartner.com/Frolic/images/attractions15.jpg",
  },
  {
    id: 16,
    image: "https://gfxpartner.com/Frolic/images/attractions16.jpg",
  },
];

export const AttractionAdventure = () => {
  return (
    <div>
      <div
        style={{
          paddingBottom: "15rem",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "80%",
            margin: "0 auto",
            paddingTop: "4rem",
          }}
        >
          <div>
            <h1
              style={{
                width: "50rem",
                fontSize: "3.5rem",
                wordSpacing: "0.5rem",
                fontWeight: "500",
              }}
            >
              Adventure Activities
            </h1>
            <img
              src="https://gfxpartner.com/Frolic/images/title-seperator.png"
              alt=""
            />
          </div>
        </div>

        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            padding: "3rem",
          }}
        >
          {data.map((tour) => (
            <AttractionAdventureCard key={tour.id} data={tour} />
          ))}
        </div>

        <button
          style={{
            maxWidth: "90%",
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
    </div>
  );
};

export default AttractionAdventure;
