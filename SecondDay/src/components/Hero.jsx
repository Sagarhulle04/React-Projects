import React from "react";

export const Hero = ({ img, text }) => {
  return (
    <figure>
      <img id="image" src={img} alt="user-image" />
      <figcaption> {text} </figcaption>
    </figure>
  );
};

export default Hero;
