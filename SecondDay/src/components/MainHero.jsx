import React from "react";
import Hero from "./Hero";

const IMAGE_URL_1 =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D";
const IMAGE_URL_2 =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D";
const IMAGE_URL_3 =
  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D";

export const MainHero = () => {
  return (
    <div>
      <Hero img={IMAGE_URL_1} text="USER IMAGE ICON 1" />
      <Hero img={IMAGE_URL_2} text="USER IMAGE ICON 2" />
      <Hero img={IMAGE_URL_3} text="USER IMAGE ICON 3" />
    </div>
  );
};
