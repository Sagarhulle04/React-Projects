import React, { useEffect, useState } from "react";
import CardLayout from "./Card";
import Spinners from "./Spinner";
import { Button, Pagination } from "react-bootstrap";
import SelectBasicExample from "./Select";
import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = 4;

const DummyProduct = () => {
  const [dummyData, setDummyData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [start, setStart] = useState(0);
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "sort-by-price-asc";

  let end = start + PAGE_SIZE;

  async function getData() {
    const data = await fetch("https://dummyjson.com/products");
    const res = await data.json();
    setDummyData(res.products);
  }

  let filteredValue = dummyData;

  if (sortBy === "sort-by-price-asc") {
    filteredValue = filteredValue.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "sort-by-price-desc") {
    filteredValue = filteredValue.sort((a, b) => b.price - a.price);
  }

  console.log(dummyData);

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  if (searchValue.length > 0)
    filteredValue = filteredValue.filter((filtering) =>
      filtering.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

  function handlePreviousPagination() {
    setStart((start) => start - PAGE_SIZE);
    end = start - PAGE_SIZE;
  }

  function handleNextPagination() {
    setStart((start) => start + PAGE_SIZE);
    end = start + PAGE_SIZE;
  }
  if (dummyData.length == 0) return <Spinners />;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      <div className="d-flex gap-2">
        <input
          style={{
            width: "25rem",
            padding: " 0.5rem",
            borderRadius: "0.4rem",
            border: "1px solid gray",
            fontSize: "1rem",
          }}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <SelectBasicExample />
      </div>

      <div className="d-flex gap-3 flex-wrap cursor-pointer">
        {filteredValue.slice(start, end).map((data) => (
          <CardLayout key={data.id} data={data} />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>
          Page No : {start} - {end} of {filteredValue.length}{" "}
        </p>

        <Button
          variant="outline-primary"
          disabled={start === 0}
          onClick={handlePreviousPagination}
        >
          Previous
        </Button>
        <Button
          variant="outline-primary"
          disabled={end >= filteredValue.length}
          onClick={handleNextPagination}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default DummyProduct;
