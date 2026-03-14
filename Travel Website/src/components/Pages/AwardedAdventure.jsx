import React from "react";

const IMAGE = "https://gfxpartner.com/Frolic/images/quote-bg03.jpg";

const AwardedAdventure = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={IMAGE} style={{ height: "100vh", width: "100%" }} alt="IMAGE" />

      <div
        style={{
          position: "absolute",
          top: "0",
          padding: "3rem 18rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "3.8rem" }}>
            The Most Awarded Adventure Tour Company in Europe
          </p>
          <img
            src="https://gfxpartner.com/Frolic/images/title-seperator.png"
            alt=""
          />
          <p
            style={{
              color: "gray",
              marginTop: "2rem",
              fontSize: "1.2rem",
              textAlign: "center",
              fontWeight: "200",
              letterSpacing: "0.1rem",
              lineHeight: "2rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit. In erat est
            viverra fringilla euismod in fermentum sed augue nullam consectetur
            ligula id elementum.
          </p>
          <button
            style={{
              padding: "0.8rem",
              marginTop: "2rem",
              width: "15rem",
              fontSize: "1.2rem",
              border: "1px solid orange",
              backgroundColor: "orange",
              color: "white",
              borderRadius: "0.3rem",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardedAdventure;
