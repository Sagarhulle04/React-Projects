import React from "react";
import "../CSS/Hero.css";
import { Link } from "react-router-dom";

const IMAGE_URL = "https://gfxpartner.com/Frolic/images/slide04.jpg";
const LOGO = "https://gfxpartner.com/Frolic/images/logo-light.png";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div>
          <img className="mainImage" src={IMAGE_URL} alt="image" />
        </div>

        <div className="information">
          <div className="nav">
            <img className="nav-logo" src={LOGO} alt="logo" />
            <ul>
              <li>
                <Link style={{ color: "white" }}>Home</Link>
              </li>
              <li>
                <Link>Pages</Link>
              </li>
              <li>
                <Link>Attraction</Link>
              </li>
              <li>
                <Link>Checkout</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
