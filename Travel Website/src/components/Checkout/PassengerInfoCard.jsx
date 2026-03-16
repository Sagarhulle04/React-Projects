import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const PassengerInfoCard = ({ data }) => {
  const { passengerDetail, age } = data;
  return (
    <div
      style={{
        position: "relative",
        left: "2rem",
        backgroundColor: "white",
        padding: "2rem, 9rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        height: "max-content",
        width: "35rem",
      }}
    >
      {" "}
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          gap: "1rem",
          padding: "2rem 2rem",
          alignItems: "center",
        }}
      >
        {" "}
        <CiCirclePlus size={35} />{" "}
        <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
          {" "}
          {passengerDetail}:{" "}
        </h3>{" "}
        <p style={{ color: "gray", fontSize: "1.1rem", fontWeight: "300" }}>
          {" "}
          Adult ({age}){" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default PassengerInfoCard;
