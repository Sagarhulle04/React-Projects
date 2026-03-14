import React from "react";

const IMAGE = "https://gfxpartner.com/Frolic/images/attractions-hero-1x.jpg";

const AttractionMainImage = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={IMAGE} alt="image" />
    </div>
  );
};

export default AttractionMainImage;
