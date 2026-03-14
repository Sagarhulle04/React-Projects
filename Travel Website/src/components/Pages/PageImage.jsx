import React from "react";
import PageImageCard from "./PageImageCard";

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
  {
    id: 7,
    image: "https://gfxpartner.com/Frolic/images/tour-thumb07.jpg",
    name: "LAUGAVEGUR TRAIL",
    description: "Bassil Trek Cmaping Classic (Huts)",
  },
  {
    id: 8,
    image: "https://gfxpartner.com/Frolic/images/tour-thumb08.jpg",
    name: "FROM DENMARKTake a Walk on the Glacier Side",
    description: "The Divine Valley of Northern Lights",
  },
  {
    id: 9,
    image: "https://gfxpartner.com/Frolic/images/tour-thumb09.jpg",
    name: "FROM SKAGEN",
    description: "Take a Walk on the Glacier Side",
  },
];

const PageImage = () => {
  return (
    <div
      style={{
        backgroundColor: "#f4fbff",
        paddingBottom: "5rem",
      }}
    >
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
          <PageImageCard key={tour.id} data={tour} />
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

export default PageImage;
