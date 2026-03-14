import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const NextAdventure = () => {
  return (
    <div
      style={{
        maxWidth: "70%",
        margin: "0 auto",
        marginTop: "50px",
        paddingBottom: "15px",
        height: "70vh",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "300",
        }}
      >
        Find Your Next Adventure!
      </h1>

      {/* Search Section */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          marginTop: "4rem",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search Activities, Themes or Tours"
          style={{
            width: "25rem",
            padding: "1rem",
            fontSize: "1.1rem",
            color: "gray",
            borderRadius: "10px",
            border: "1px solid gray",
            outline: "none",
          }}
        />

        <input
          type="date"
          style={{
            width: "15rem",
            padding: "1rem",
            color: "gray",
            borderRadius: "10px",
            border: "1px solid gray",
            outline: "none",
          }}
        />

        <button
          style={{
            width: "10rem",
            fontSize: "1.3rem",
            backgroundColor: "orange",
            color: "white",
            cursor: "pointer",
            padding: "1rem",
            borderRadius: "10px",
            border: "none",
          }}
        >
          Search
        </button>
      </div>

      {/* Suggestions Section */}
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            color: "black",
            fontWeight: "900",
          }}
        >
          Suggestions
        </span>

        <HiArrowNarrowRight color="orange" size={25} />

        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            color: "gray",
            cursor: "pointer",
            padding: 0,
            margin: 0,
          }}
        >
          <li>Adventure</li>
          <li>Northern Lights</li>
          <li>Waterfalls</li>
          <li>Winter Tours</li>
          <li>Glacier Walk</li>
        </ul>
      </div>
    </div>
  );
};

export default NextAdventure;
