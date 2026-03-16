import React from "react";
import PassengerInfoCard from "./PassengerInfoCard";

const data = [
  {
    id: 1,
    passengerDetail: "Passenger 1",
    age: "16-99",
  },
  {
    id: 2,
    passengerDetail: "Passenger 2",
    age: "16-99",
  },
  {
    id: 3,
    passengerDetail: "Passenger 3",
    age: "16-99",
  },
];

const PassengerInfo = () => {
  return (
    <div
      style={{
        backgroundColor: "#f4fbff",
        padding: "3rem 8rem",
        display: "flex",
      }}
    >
      <div
        style={{
          height: "80vh",
          maxWidth: "80%",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "24rem" }}>
          <p style={{ color: "orange", fontSize: "1.5rem" }}>STEP 1</p>
          <h3
            style={{
              color: "black",
              fontWeight: "300",
              marginTop: "0.3rem",
              fontSize: "1.6rem",
            }}
          >
            Passengers Info
          </h3>
          <p
            style={{
              marginTop: "2rem",
              color: "gray",
              fontWeight: "400",
              fontSize: "1.3rem",
            }}
          >
            Please provide basic information for all of the passengers
            travelling with us including any extras.
          </p>

          <div style={{ marginTop: "3rem", lineHeight: "2rem" }}>
            <p style={{ color: "gray", fontWeight: "600" }}>PEOPLE GOING</p>
            <p style={{ fontWeight: "800", fontSize: "1.2rem" }}>
              2 ADULTS + 1 CHILD
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          flex: 1,
        }}
      >
        {data.map((data) => (
          <PassengerInfoCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PassengerInfo;
