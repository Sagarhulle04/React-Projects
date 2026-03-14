import React from "react";

const WriteusMessage = () => {
  return (
    <div style={{ backgroundColor: "#ecf4f8" }}>
      <div
        style={{
          maxWidth: "70%",
          margin: "0 auto",
          height: "95vh",
          padding: "5rem 10rem",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3.3rem", fontWeight: "500" }}>
            Write Us a Message
          </h1>
          <img
            style={{ marginTop: "1rem" }}
            src="https://gfxpartner.com/Frolic/images/title-seperator.png"
            alt="separator"
          />
        </div>

        <div style={{ marginTop: "2rem" }}>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <li>
              <input
                style={{
                  padding: "1.1rem 1rem",
                  width: "20rem",
                  color: "gray",
                  borderRadius: "0.3rem",
                  border: "1px solid gray",
                  fontSize: "1rem",
                }}
                type="text"
                placeholder="Full Name"
              />
            </li>
            <li>
              <input
                style={{
                  padding: "1.1rem 1rem",
                  width: "20rem",
                  color: "gray",
                  borderRadius: "0.3rem",
                  border: "1px solid gray",
                  fontSize: "1rem",
                }}
                type="email"
                placeholder="Email Address"
              />
            </li>
            <li>
              <input
                style={{
                  padding: "1.1rem 1rem",
                  width: "20rem",
                  color: "gray",
                  borderRadius: "0.3rem",
                  border: "1px solid gray",
                  fontSize: "1rem",
                }}
                type="tel"
                placeholder="Phone"
              />
            </li>
            <li>
              <input
                style={{
                  padding: "1.1rem 1rem",
                  width: "20rem",
                  color: "gray",
                  borderRadius: "0.3rem",
                  border: "1px solid gray",
                  fontSize: "1rem",
                }}
                type="text"
                placeholder="Subject"
              />
            </li>
          </ul>

          <textarea
            style={{
              marginTop: "2rem",
              width: "35rem",
              position: "relative",
              right: "3.4rem",
              borderRadius: "0.3rem",
            }}
            rows={11}
            name=""
            id=""
          ></textarea>
        </div>
        <button
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.1rem",
            borderRadius: "0.3rem",
            border: "1px solid orange",
            backgroundColor: "orange",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default WriteusMessage;
