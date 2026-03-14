import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const PageHeader = () => {
  return (
    <div
      style={{
        maxWidth: "70%",
        margin: "0 auto",
        height: "70vh",
        padding: "4rem 2rem",
      }}
    >
      <p style={{ color: "#53a0ef" }}>YOU SEARCHED</p>
      <h1 style={{ fontSize: "4rem", marginTop: "1rem", fontWeight: "500" }}>
        Adventure Tours in Denmark
      </h1>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "1.3rem",
          color: "gray",
          wordSpacing: "0.3rem",
        }}
      >
        Found
        <span style={{ fontWeight: "bold", color: "black" }}>83 Tours</span>,
        Use the filters below to refine the search.
      </p>

      <ul
        style={{
          listStyleType: "none",
          padding: "2rem 2rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "1rem",
          marginTop: "3rem",
          fontSize: "1.5rem",
        }}
      >
        <li
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: "gray",
          }}
        >
          Dates
          <IoIosArrowDropdown size={30} color="orange" />
        </li>

        <li
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: "gray",
          }}
        >
          Duration
          <IoIosArrowDropdown size={30} color="orange" />
        </li>

        <li
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: "gray",
          }}
        >
          Category
          <IoIosArrowDropdown size={30} color="orange" />
        </li>

        <li
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: "gray",
          }}
        >
          Starts from
          <IoIosArrowDropdown size={30} color="orange" />
        </li>

        <li
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            color: "gray",
          }}
        >
          Sort By
          <IoIosArrowDropdown size={30} color="orange" />
        </li>
      </ul>
    </div>
  );
};

export default PageHeader;
