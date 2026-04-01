import React from "react";
import SelectBasicExample from "./Select";

const SortBy = () => {
  const data = [
    {
      label: "Sort By Price (Asc)",
      option: "sort-by-price-asc",
    },
  ];

  return (
    <div>
      {" "}
      <SelectBasicExample />{" "}
    </div>
  );
};

export default SortBy;
