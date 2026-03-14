import React from "react";

const AttractionHeader = () => {
  return (
    <div
      style={{
        maxWidth: "80%",
        margin: "0 auto",
        height: "70vh",
        padding: "5rem 0",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4rem", fontWeight: "300" }}>
          Denmark Attractions
        </h1>
        <img
          src="https://gfxpartner.com/Frolic/images/title-seperator.png"
          alt="image"
        />
        <p
          style={{
            color: "gray",
            marginTop: "2rem",
            fontSize: "1.2rem",
            fontWeight: "300",
            letterSpacing: "0.1rem",
            wordSpacing: "0.2rem",
          }}
        >
          Pellentesque vestibulum fermentum velit non placerat aecenas in
          hendrerit justo quisque quis rhoncus exeget semper semlam at lobortis
          velit. Vestibulum ante ipsum primis in faucibus orcie luctus et
          ultrices posuere cubilia curae ed dignissim leo lorema intum mauris
          vestibulum et maecenas vitae urna aced magna facilisis porttitor.
        </p>
      </div>
    </div>
  );
};

export default AttractionHeader;
