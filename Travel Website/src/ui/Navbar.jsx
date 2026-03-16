import React from "react";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const LOGO = "https://gfxpartner.com/Frolic/images/logo-dark.png";

const Navbar = () => {
  return (
    <div
      style={{ display: "flex", padding: "2rem 5rem", alignItems: "center" }}
    >
      <Link to="/">
        <img src={LOGO} style={{ width: "12rem" }} alt="logo" />
      </Link>

      <ul
        style={{
          display: "flex",
          marginLeft: "auto",
          gap: "2rem",
          listStyleType: "none",
          cursor: "pointer",

          fontWeight: "600",
        }}
      >
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/pages">
            PAGES
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/attractions"
          >
            ATTRACTION
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/checkout"
          >
            CHECKOUT
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
          >
            CONTACT
          </Link>
        </li>
        <li>
          <HiSearch size={20} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
