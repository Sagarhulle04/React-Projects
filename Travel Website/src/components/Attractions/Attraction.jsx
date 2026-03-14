import React from "react";
import AttractionHeader from "./AttractionHeader";
import AttractionMainImage from "./AttractionMainImage";
import AttractionAdventure from "./AttractionAdventure";
import AttractionTours from "./AttractionTours";

const Attraction = () => {
  return (
    <div>
      <AttractionHeader />
      <AttractionMainImage />
      <AttractionAdventure />
      <AttractionTours />
    </div>
  );
};

export default Attraction;
