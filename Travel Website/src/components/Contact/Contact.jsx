import React from "react";

import OfficeLocation from "./OfficeLocation";
import Card from "./Card";
import WriteusMessage from "./WriteusMessage";

const IMAGE = "https://gfxpartner.com/Frolic/images/contact-hero.jpg";

const Contact = () => {
  return (
    <div>
      <div style={{ position: "relative", left: "10rem", marginTop: "10rem" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "400",
          }}
        >
          Contact
        </h1>
        <img
          src="https://gfxpartner.com/Frolic/images/title-seperator.png"
          alt="underlined-image"
        />
      </div>

      <div>
        <img
          src={IMAGE}
          style={{ height: "100vh", width: "100vw", marginTop: "3rem" }}
          alt="image"
        />
      </div>

      <OfficeLocation />
      <Card />
      <WriteusMessage />
    </div>
  );
};

export default Contact;
