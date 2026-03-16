import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const CheckOutHeader = () => {
  return (
    <div
      style={{
        maxWidth: "80%",
        margin: "0 auto",
        padding: "3rem 1rem",
        height: "80vh",
        display: "flex",
      }}
    >
      <div style={{ width: "120rem" }}>
        <p style={{ color: "gray", fontWeight: "600" }}>FROM SKAGEN</p>

        <h1 style={{ fontSize: "5rem", fontWeight: "400", marginTop: "1rem" }}>
          Take a Walk on the Green Side
        </h1>

        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "2rem",
            marginTop: "7rem",
          }}
        >
          <li style={{ display: "flex", alignItems: "center" }}>
            <p style={{ color: "gray", fontSize: "1.3rem" }}>Aug 30th 2018</p>
            <IoIosArrowDropdown size={30} color="orange" />
          </li>

          <li style={{ display: "flex", alignItems: "center" }}>
            <p style={{ color: "gray", fontSize: "1.3rem" }}>12:30 AM</p>
            <IoIosArrowDropdown size={30} color="orange" />
          </li>

          <li style={{ display: "flex", alignItems: "center" }}>
            <p style={{ color: "gray", fontSize: "1.3rem" }}>
              2 Adults + 1 Child
            </p>
            <IoIosArrowDropdown size={30} color="orange" />
          </li>

          <li style={{ display: "flex", alignItems: "center" }}>
            <p style={{ color: "gray", fontSize: "1.3rem" }}>Price: $278.42</p>
            <IoIosArrowDropdown size={30} color="orange" />
          </li>
        </ul>
      </div>

      <div>
        <p
          style={{
            color: "gray",
            fontWeight: "400",
            fontSize: "1.3rem",
            letterSpacing: "0.15rem",
            lineHeight: "2rem",
          }}
        >
          Arci varius natoque penatibus et magnis dis turient montes scetur
          ridiculus mus cras eleifend.
        </p>
        <p style={{ marginTop: "3rem", fontSize: "1.3rem" }}>
          Tour Code: <span style={{ fontWeight: "bold" }}>WS-3597</span>
        </p>
      </div>
    </div>
  );
};

export default CheckOutHeader;
