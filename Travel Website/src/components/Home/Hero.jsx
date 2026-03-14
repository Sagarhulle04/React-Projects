import React from "react";

const IMAGE_URL = "https://gfxpartner.com/Frolic/images/slide04.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-container" style={{ position: "relative" }}>
        <div>
          <img
            className="mainImage"
            style={{ width: "100%" }}
            src={IMAGE_URL}
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
