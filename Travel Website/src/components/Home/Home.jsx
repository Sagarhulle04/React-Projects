import React from "react";
import Hero from "./Hero";
import NextAdventure from "./NextAdventure";
import PopularTours from "./PopularTours";
import AdevntureActivity from "./AdevntureActivity";
import CustomerReview from "./CustomerReview";

const Home = () => {
  return (
    <div>
      <Hero />
      <NextAdventure />
      <PopularTours />
      <AdevntureActivity />
      <CustomerReview />
    </div>
  );
};

export default Home;
