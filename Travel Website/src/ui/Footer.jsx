import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "80vh",
        maxWidth: "80%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "4rem",
        lineHeight: "3rem",
      }}
    >
      <div>
        <h3 style={{ fontWeight: "500" }}>ABOUT US</h3>
        <ul
          style={{
            listStyle: "none",
            marginTop: "2rem",
            color: "gray",
            cursor: "pointer",
          }}
        >
          <li>About Us</li>
          <li>Training & Safety</li>
          <li>Our Guides</li>
          <li>Office team</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <h3 style={{ fontWeight: "500" }}>USEFUL INFO</h3>
        <ul
          style={{
            listStyle: "none",
            marginTop: "2rem",
            color: "gray",
            cursor: "pointer",
          }}
        >
          <li>Pick Up Location</li>
          <li>Terms Of Payment</li>
          <li>Privacy Policy</li>
          <li>Difficulty Levels</li>
          <li>Where to Find Us</li>
        </ul>
      </div>
      <div>
        <h3 style={{ fontWeight: "500" }}>CONTACT US</h3>
        <ul
          style={{
            listStyle: "none",
            marginTop: "2rem",
            color: "gray",
            cursor: "pointer",
          }}
        >
          <li>GFXPARTNER INC.</li>
          <li>30 Aarhus, Denmark</li>
          <li>Phone: 123 456 7890</li>
          <li>info@gfxpartner.com4</li>
        </ul>
      </div>
      <div>
        <h3 style={{ fontWeight: "500" }}>LANGUAGE & CURRENCY</h3>
        <ul
          style={{
            listStyle: "none",
            marginTop: "2rem",
            color: "gray",
            cursor: "pointer",
          }}
        >
          <li>
            <input
              placeholder="English (INDIA)"
              style={{
                width: "15rem",
                color: "gray",
                borderRadius: "0.5rem",
                border: "1px solid gray",
                fontSize: "0.8rem",
                padding: "1rem 1rem",
              }}
              type="text"
              name=""
              id=""
            />
          </li>
          <br />
          <li>
            <input
              placeholder="English (INDIA)"
              style={{
                width: "15rem",
                color: "gray",
                borderRadius: "0.5rem",
                border: "1px solid gray",
                fontSize: "0.8rem",
                padding: "1rem 1rem",
              }}
              type="text"
              name=""
              id=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
