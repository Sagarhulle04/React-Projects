import React from "react";
import AdevntureActivityCard from "./AdevntureActivityCard";

const data = [
  {
    id: 1,
    image: "https://gfxpartner.com/Frolic/images/attractions01-3x.jpg",
  },
  {
    id: 2,
    image: "https://gfxpartner.com/Frolic/images/attractions02-3x.jpg",
  },
  {
    id: 3,
    image: "https://gfxpartner.com/Frolic/images/attractions03-3x.jpg",
  },
  {
    id: 4,
    image: "https://gfxpartner.com/Frolic/images/attractions04-3x.jpg",
  },
];

export const AdevntureActivity = () => {
  return (
    <div>
      <div
        style={{
          paddingBottom: "10rem",
          marginTop: "2rem",
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
            <AdevntureActivityCard key={tour.id} data={tour} />
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

export default AdevntureActivity;
