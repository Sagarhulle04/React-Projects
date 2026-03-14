import React from "react";
import CustomerReviewCard from "./CustomerReviewCard";

const data = [
  {
    id: 1,
    stars: 5,
    name: "A truly amazing experience!",
    description:
      "Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut erdiete metus dolor eget lemi.",
    image: "https://gfxpartner.com/Frolic/images/guide01.png",
  },
  {
    id: 2,
    stars: 4,
    name: "A truly amazing experience!",
    description:
      "Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut erdiete metus dolor eget lemi.",
    image: "https://gfxpartner.com/Frolic/images/guide01.png",
  },
  {
    id: 3,
    stars: 5,
    name: "A truly amazing experience!",
    description:
      "Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut erdiete metus dolor eget lemi.",
    image: "https://gfxpartner.com/Frolic/images/guide01.png",
  },
  {
    id: 4,
    stars: 4,
    name: "A truly amazing experience!",
    description:
      "Lorem ipsum dolor sit amet consectetur dese adipiscing helit nullam li sodales, nibh quis viverra laotreet mauris jurna sagitis arcu ut erdiete metus dolor eget lemi.",
    image: "https://gfxpartner.com/Frolic/images/guide01.png",
  },
];

const CustomerReview = () => {
  return (
    <div
      style={{
        backgroundColor: "#edf4f9",
        paddingBottom: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "80%",
          margin: "0 auto",
          paddingTop: "2rem",
        }}
      >
        <div>
          <h1
            style={{
              width: "50rem",
              fontSize: "3.5rem",
              wordSpacing: "0.5rem",
              fontWeight: "500",
            }}
          >
            Customer Reviews
          </h1>
          <img
            src="https://gfxpartner.com/Frolic/images/title-seperator.png"
            alt=""
          />
        </div>
      </div>

      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.3rem",
          justifyContent: "center",
          padding: "3rem",
        }}
      >
        {data.map((tour) => (
          <CustomerReviewCard key={tour.id} data={tour} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
